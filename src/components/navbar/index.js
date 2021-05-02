import React from "react";
import "./style.css";

import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <h1>Rent-A-Ride</h1>
        </div>

        <div>
          <p className="pages">Home</p>
        </div>

        <div>
          <p className="pages">Cars</p>
        </div>

        <div>
          <p className="pages">Booking</p>
        </div>

        <div>
          <p className="pages">Our Clients</p>
        </div>

        <div>
          <p className="pages">Contact Us</p>
        </div>
        <div className="pages">
          <BiUserCircle size={30} />
        </div>
      </nav>
    </>
  );
}
