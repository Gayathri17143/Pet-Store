import React from "react";
import "./Products.css";
import Image1 from "../assets/ricky-doc.jpg";
import Image2 from "../assets/injection.png";
import Image3 from "../assets/doc.png";
import Image4 from "../assets/bath.png";
import Image5 from "../assets/bg-cat.jpg";
import Image6 from "../assets/bg-doggy.jpg";
const Product = () => {
  return (
    <div className="grid-container-1">
        <div className="grid-item1 " style={{width:"13vw"}}>
        <img src={Image5} alt="Image 5" />
        </div>
      <div className="grid-item-1">
        <div className="image-text-1">Veterinary Care</div>
        <p className="text-2">
          From routine check-ups and vaccinations to advanced diagnostics and
          treatments, our skilled veterinarians are here to keep your pet
          healthy and provide expert care with compassion.
        </p>
        <div className="text-p1">First Consultation is <span className="gn-clr">Free!</span></div>
      </div>
      <div className="grid-item1">
        <img src={Image1} alt="Image 1" />
      </div>
      <div className="grid-item-1">
        <div className="content">
          <img src={Image2} alt="Image 2" />
          <div className="text-p2">Check-ups & Vaccinations</div>
          <p className="text-2">
            Keep your pet healthy with regular check-ups and vaccines.
          </p>
        </div>
        <div className="content">
          <img src={Image3} alt="Image 3" />
          <div className="text-p2">Diagnostic Services</div>
          <p className="text-2">
            Pinpoint health issues with advanced diagnostics for effective
            treatment.
          </p>
        </div>
        <div className="content">
          <img src={Image4} alt="Image 4" />
          <div className="text-p2">Surgical Procedures</div>
          <p className="text-2">
            Expert, compassionate care for your pet's surgical needs.
          </p>
        </div>
      </div>
      <div className="grid-item1 " style={{width:"13vw"}}>
        <img src={Image6} alt="Image 6" />
        </div>
    </div>
  );
};

export default Product;
