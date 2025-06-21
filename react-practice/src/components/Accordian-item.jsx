import React from 'react';

const AccordionItem = ({ title, description, isOpen, setIsOpen }) => {
  return (
    <div
      style={{
        marginBottom: '5px',
        borderBottom: isOpen ? '0.5px solid black' : '',
      }}
    >
      <div
        onClick={() => {
          setIsOpen();
        }}
        style={{
          backgroundColor: '#ffe6e6',
          borderBottom: isOpen ? '0.5px solid black' : '',
          padding: '10px',
          borderRadius: '4px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <span>{title}</span>
      </div>
      {isOpen && (
        <p
          style={{
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {' '}
          {description}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
