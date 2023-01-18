import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import BodyImageSlider from "../BodyImageSlider/BodyImageSlider";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-0 navbar-container  ">
        <div className="dropdown ">
          <button
            className="border-0 "
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <HiBars3></HiBars3>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                <Link to="./home">HOME</Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <Link to="/products">PRODUCTS</Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <Link to="/contact">CONTACT</Link>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="">
          <div className="dropdown">
            <button
              className="border-0 "
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillCartFill></BsFillCartFill>
            </button>
            <ul className="dropdown-menu p-3 " aria-labelledby="dropdownMenu2">
              <p className="w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto impedit ipsum earum temporibus a nobis fuga maxime
                animi ipsa perferendis.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-img">
        <BodyImageSlider></BodyImageSlider>
      </div>
    </div>
  );
};

export default Navbar;
