import React, { useState } from 'react';
import Accordion from './components/Accordian';
import Comments from './components/comments/comments';
import ImageSlider from './components/comments/ImageSlider';
import Pagination from './components/pagination/Pagination';

const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <Comments /> */}
      {/* <ImageSlider /> */}
      <Pagination />
    </div>
  );
};

export default App;
