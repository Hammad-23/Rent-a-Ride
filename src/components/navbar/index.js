import React from "react";
import "./style.css";

import { useHistory } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function NavBar() {
  let history = useHistory();

  const login = () => {
    history.push("/");
  };
  return (
    <>
      <nav>
        <div>
          <h4>Rent-A-Ride</h4>
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
          <BiUserCircle onClick={login} size={30} />
        </div>
      </nav>
    </>
  );
}
