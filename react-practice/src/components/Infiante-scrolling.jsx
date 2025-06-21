import React, { useState, useEffect } from 'react';
import MemeCard from './components/meme-card';

function App() {
  const [memeData, setMemeData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`https://meme-api.com/gimme/20`);
      const data = await res.json();
      setMemeData((prev) => [...prev, ...data.memes]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= document.body.scrollHeight &&
      !loading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        {memeData.map((d) => (
          <MemeCard title={d.title} imgLink={d.url} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        {loading &&
          Array(15).fill(
            <div
              style={{
                textAlign: 'center',
                width: '200px',
                height: '200px',
                border: '1px black solid',
                backgroundColor: '#edebeb',
              }}
            ></div>,
          )}
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');

export default App;
