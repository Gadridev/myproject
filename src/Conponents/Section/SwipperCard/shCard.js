import React from 'react';
import Cardsh from './Card_f';
import image1 from '../../../Assets/image2.jpg'

const Appli = () => {
  return (
    <div className="app">
      <Cardsh
        title="Card title"
        image={image1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default Appli;
