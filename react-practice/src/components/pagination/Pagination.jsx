import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          currentPage * limit
        }`,
      );
      const jsonData = await res.json();
      setProducts(jsonData.products);
      setNoOfPages(Math.ceil(jsonData.total / limit));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.id}-{p.title}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <button
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage === 0}
        >
          prev
        </button>
        <div
          style={{
            display: 'flex',
            gap: '30px',
          }}
        >
          {[...Array(noOfPages).keys()].map((pN) => (
            <span
              role="button"
              onClick={() => {
                setCurrentPage(pN);
              }}
              style={{
                border: '1px solid black',
                borderRadius: '3px',
                padding: '3px',
                backgroundColor: currentPage === pN ? '#555' : '',
              }}
            >
              {pN}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage >= noOfPages - 1}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
