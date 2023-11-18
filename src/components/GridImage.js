import React from "react";
import "./GridImage.css";
import Image1 from "../assets/doggy.jpg";
import Image2 from "../assets/pet-cat.jpg";
import Image3 from "../assets/gold-fish.jpg";
import Image4 from "../assets/rat.jpg";
import Image5 from "../assets/green.jpg";
import Image6 from "../assets/small-bird.jpg";

const ImageGrid = () => {
  return (
    <div className="grid-container-0">
      <div className="grid-item-0">
        <img src={Image1} alt="Image 1" />
        <div className="image-text-0">Dog</div>
      </div>
      <div className="grid-item-0">
        <img src={Image2} alt="Image 2" />
        <div className="image-text-0">Cat</div>
      </div>
      <div className="grid-item-0">
        <img src={Image3} alt="Image 3" />
        <div className="image-text-0">
          Fish
        </div>
      </div>
      <div className="grid-item-0">
        <img src={Image4} alt="Image 4" />
        <div className="image-text-0">
        Small Pet
        </div>
      </div>
      <div className="grid-item-0">
        <img src={Image5} alt="Image 5" />
        <div className="image-text-0">
         Reptile
        </div>
      </div>
      <div className="grid-item-0">
        <img src={Image6} alt="Image 6" />
        <div className="image-text-0">
           Bird  
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
