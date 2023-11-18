import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState } from "react";
import "./Tabs.css";
import Image1 from "../assets/shampo.jpg";
import Image2 from "../assets/foods.jpg";
import Image3 from "../assets/belt.jpg";
import Image4 from "../assets/cat-seafood.jpg";
import Image5 from "../assets/cat-chicken.jpg";
import Image6 from "../assets/cat-toy.jpg";
import Image7 from "../assets/fish-bluetooth.jpg";
import Image8 from "../assets/fish-aquarium.jpg";
import Image9 from "../assets/fish-stand.jpg";
import Image10 from "../assets/panic-attack.jpg";
import Image11 from "../assets/nursing-kit.jpg";
import Image12 from "../assets/pig-headpiece.jpg";

function App() {
  const [key, setKey] = useState("tab2");

  return (
    <div className="App">
      <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <h1 className="head">Bestsellers</h1>
        <TabList>
          <Tab eventKey="tab1">Dogs</Tab>
          <Tab eventKey="tab2">Cats</Tab>
          <Tab eventKey="tab3">Fish</Tab>
          <Tab eventKey="tab4">Small Pets</Tab>
        </TabList>
        <TabPanel>
          <div className="card">
            <div className="card-header"></div>
            <div className="image-grid">
              <img src={Image1} alt="Image 1" />
              <img src={Image2} alt="Image 2" />
              <img src={Image3} alt="Image 3" />
              <div className="heading">
              <h3> Zesty Paws Itch Soother Dog Shampoo</h3>
              <p>
              That's where Zesty Paws Itch-Soother Dog Shampoo features gentle and effective ingredients that will make your pet's bath time a breeze.
              </p>
              </div>
              <div className="heading">
              <h3>True Acre Foods Grain</h3>
              <p>
              Bring some grain-free goodness to your pup's bowl.
              </p>
              </div>
              <div className="heading">
              <h3>TEK Series 1.5 GPS Dog Tracking System</h3>
              <p>
               If your pet loves to wander, the Cube Real Time GPS Dog & Cat Tracker will give you peace of mind.
              </p>
              </div>
             
              <img src={Image1} alt="Image 1" />
              <img src={Image2} alt="Image 2" />
              <img src={Image3} alt="Image 3" />
              <div className="heading">
              <h3> Zesty Paws Itch Soother Dog Shampoo</h3>
              <p>
              That's where Zesty Paws Itch-Soother Dog Shampoo features gentle and effective ingredients that will make your pet's bath time a breeze.
              </p>
              </div>
              <div className="heading">
              <h3>True Acre Foods Grain</h3>
              <p>
              Bring some grain-free goodness to your pup's bowl.
              </p>
              </div>
              <div className="heading">
              <h3>TEK Series 1.5 GPS Dog Tracking System</h3>
              <p>
               If your pet loves to wander, the Cube Real Time GPS Dog & Cat Tracker will give you peace of mind.
              </p>
              </div>
             
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-header"></div>
            <div className="image-grid">
              <img src={Image4} alt="Image 4" />
              <img src={Image5} alt="Image 5" />
              <img src={Image6} alt="Image 6" />
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <img src={Image4} alt="Image 4" />
              <img src={Image5} alt="Image 5" />
              <img src={Image6} alt="Image 6" />
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-header"></div>
            <div className="image-grid">
              <img src={Image7} alt="Image 7" />
              <img src={Image8} alt="Image 8" />
              <img src={Image9} alt="Image 9" />
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <img src={Image7} alt="Image 7" />
              <img src={Image8} alt="Image 8" />
              <img src={Image9} alt="Image 9" />

              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card">
            <div className="card-header"></div>
            <div className="image-grid">
              <img src={Image10} alt="Image 10" />
              <img src={Image11} alt="Image 11" />
              <img src={Image12} alt="Image 12" />
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <img src={Image10} alt="Image 10" />
              <img src={Image11} alt="Image 11" />
              <img src={Image12} alt="Image 12" />
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
              <div className="heading">
              <h3> This is the content of the card. Replace this with your own
                content.</h3>
              <p>
                This is the content of the card. Replace this with your own
                content.
              </p>
              </div>
          </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
