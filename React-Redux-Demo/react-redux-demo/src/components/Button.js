import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickButton, hoverButton } from "../redux/button/buttonActions";

function Button() {
   const number = useSelector((state) => state.button.number);
   const dispatch = useDispatch();

   return (
      <div>
         <h2>Click and hover on button - {number}</h2>
         <button
            className="btn-1"
            onClick={() => dispatch(clickButton())}
            onMouseEnter={() => dispatch(hoverButton())}
         >
            Click Me
         </button>
      </div>
   );
}

export default Button;
