import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          <i className="fa-solid fa-cat"></i>Ricky
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-menu">
              <li>
                <a>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-person"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            
        </ul>
      </nav>
    );
  }
}
export default Navbar;
