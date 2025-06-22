import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const [count, setCount] = useState(0);
  const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg',
    'https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png',
    'https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s',
  ];

  const handleSlideLeft = () => {
    setCount((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
    // length 4   =>4-1=3<0=false 4-1
    //  0   =>0-1=-1<0=true 4
  };
  const handleSlideRight = () => {
    debugger;
    setCount((active) => (active + 1) % images.length);
    //  0   => 1%4=>1   4)1(0 =>1-0=>1
    //  1   => 2%4=>2   4)2(0 =>2-0=>2
    //  2   => 3%4=>3   4)3(0 =>3-0=>3
    //  3   => 4%4=>0   4)4(1 =>4-4=>0
  };

  useEffect(() => {
    const i = setInterval(() => {
      handleSlideRight();
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '400px',
        height: '500px',
      }}
    >
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
          }}
          onClick={handleSlideLeft}
        >
          {'<'}
        </button>
        <img
          src={images[count]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <button
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
          }}
          onClick={handleSlideRight}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

// rightSide
// active=>active +1 % images.length
// leftSide
// active=> active -1 < 0? images.length-1:active
