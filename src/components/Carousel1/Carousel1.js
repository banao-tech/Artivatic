import React, { useState } from "react";

import Card from "../Card/Card.js";
import "./Carousel1.css";
export default function Carousel1(props) {
  // props
  const { id, containerClassName, values, properties } = props;
  // states
  const [controlState, setControlState] = useState(0);
  // const { } = props;

  function handleScroll(e) {
    const type = e.currentTarget.getAttribute("data-type");
    const container = document.querySelector(`#${id}`);
    const element = container.firstChild.offsetWidth;

    const currentScroll = container.scrollLeft;
    let scroll;
    if (type === "prev") {
      scroll = currentScroll - element;
    }

    if (type === "next") {
      scroll = currentScroll + element;
    }

    container.scroll(scroll, 0);

    if (scroll <= 0) {
      setControlState(0);
    } else if (container.scrollWidth - scroll <= container.offsetWidth) {
      setControlState(2);
    } else {
      setControlState(1);
    }

    console.log(container.offsetWidth);
    console.log(container.scrollWidth - scroll);
  }
  return (
    // < div className="carousel-1" >
    < div className={`carousel-1 ${properties ? (properties.carouselClass ? properties.carouselClass : "") : ""
      } `} >
      <div
        id={id}
        className={`carousel-1__container ${containerClassName ? containerClassName : ""
          }`}
      >
        {values.map((value, index) => {
          return <Card
            type={value.type}
            title={value.title}
            text={value.text}
          />
        })}

      </div>

      <div className="carousel-1__controls">
        {controlState !== 0 && (
          <div
            className={`carousel-1__control-prev ${properties ? (properties.navbutton ? properties.navbutton : "") : ""
              }`}
            data-type="prev"
            data-container={id}
            onClick={handleScroll}
          ></div>
        )}
        {controlState !== 2 && (
          <div
            className={`carousel-1__control-next ${properties ? (properties.navbutton ? properties.navbutton : "") : ""
              }`}
            data-type="next"
            data-container={id}
            onClick={handleScroll}
          ></div>
        )}
      </div>
    </div >
  );
}
