import "./index.css";
import Navbar from "./components/Navbar";
import Navigationbar from "./components/Navigationbar";
import { BrowserRouter as Router } from "react-router-dom";
import TopContent from "./components/TopContent";
import ImageGrid from "./components/ImageGrid";
import Tab from "./components/Tab";
import GridImage from "./components/GridImage";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navigationbar />
      <Navbar />
      <TopContent />
      <ImageGrid />
      <Tab />
      <GridImage />
      <Products />
      <Footer />
    </Router>
  );
}

export default App;
