import React, { useState } from "react";
import "./Header.css";
import img from "../images/rocket2_downward (1).png";
import img1 from './images/img1.svg';
import img2 from '../Contact/Images/dark_cube1.png';
function Header() {
  const [moveDown, setMoveDown] = useState(false);

  const handleClick = () => {
    setMoveDown(true); // Trigger the moveDown state on click

    // Delay the scroll action by 1 second (1000ms)
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight, // Use document.body.scrollHeight to scroll to the bottom
        behavior: "smooth", // Smooth scroll
      });
    }); // 1000ms delay (1 second)
  };

  return (
    <div className="Header-con">
    <div className="Header">

      <div className="Head">
        <h1>
          I’m Sunil, an <br />
          E&TC Engineer
        </h1>
      </div>
      <div className="Discription">
        <p>
          I am Sunil Chavan, a third-year Electronics and Telecommunication
          engineering student.
        </p>
      </div>
      <div className="Roundbutton">
        <div className="arrowdiv">
          <img
            id="rocket"
            src={img}
            className={moveDown ? "move-down pulse" : "pulse"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>

    <div className="HeaderPhoto">
      <img src={img1} alt="" />
    </div>

    </div>
  );
}

export default Header;
