import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../image/logo.png";
// import { NavLink } from 'react-router-dom'
// import './headers.css'



const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "8vmax",
  navColor1: "White",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Search",
  link4Text: "Login",
  link5Text:"Search",
  link6Text:"Login",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/search",
  link4Url: "/login",
  link5Url: "/search",
  link6url:"/Login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  cartIconUrl:"/cart",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;

  // return (
  //   <nav className="navbar">
  //     <div className="containers">
  //       <div className="logo">
  //         <span>Olivia-EStore</span>
  //       </div>
  //       <div className="nav-elements">
  //         <ul>
  //           <li>
  //             <NavLink to="/">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/products">Products</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/search">Search</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/about">About</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/contact">Contact</NavLink>
  //           </li>
  //           <button>Login</button>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // )
};

export default Header;
