import React from 'react';
import './ImageGrid.css';
import Image1 from '../assets/fish.jpg';
import Image2 from '../assets/rabbit.jpg';
import Image3 from '../assets/parrot.jpg';

const ImageGrid = () => {
  return (
    <div className="grid-container" >
      <div className="grid-item">
        <img src={Image1} alt="Image 1" />
        <div className="image-text">Satisfy Your Fish with Quality Food!</div>
      </div>
      <div className="grid-item">
        <img src={Image2} alt="Image 2" />
        <div className="image-text">Save Big, Make Pets Wiggle and Giggle!</div>
      </div>
      <div className="grid-item">
        <img src={Image3} alt="Image 3" />
        <div className="image-text">Enjoy Discounts on Nutritious Bird Food!</div>
      </div>
    </div>
  );
};

export default ImageGrid;
