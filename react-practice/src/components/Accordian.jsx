import React, { useState } from 'react';
import AccordionItem from './Accordian-item';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      title: 'Accordion Item #1',
      description: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
        though the transition does limit overflow.`,
    },
    {
      title: 'Accordion Item #2',
      description: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
        though the transition does limit overflow.`,
    },
    {
      title: 'Accordion Item #3',
      description: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
        though the transition does limit overflow.`,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: '2px solid black',
          width: '550px',
          cursor: 'pointer',
          padding: '10px',
        }}
      >
        {data.map((d, i) => (
          <AccordionItem
            key={i}
            title={d.title}
            description={d.description}
            isOpen={openIndex === i}
            setIsOpen={() => {
              openIndex == i ? setOpenIndex(null) : setOpenIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
