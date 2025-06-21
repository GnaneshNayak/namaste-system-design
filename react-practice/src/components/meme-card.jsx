import React from 'react';

const MemeCard = ({ title, imgLink }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '5px',
      }}
    >
      <img
        src={imgLink}
        style={{
          width: '220px',
          height: '270px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          overflow: 'hidden',
          justifyContent: 'center',
        }}
      />
      <h1
        style={{
          fontSize: '14px',
          textAlign: 'center',
          marginTop: '8px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default MemeCard;
