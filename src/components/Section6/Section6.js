import React from "react";

import Carousel1 from "../Carousel1/Carousel1.js";
import "./section6.css";
export default function Section6() {
  var courosalValues = []
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  courosalValues.push({
    type: "hover",
    title: "Role of Telehealth During COVID-19",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."

  })
  return (
    <section className="section-6">
      <div className="wrapper">
        <h1 className="section-6__heading">
          Artivatic is products designed for all user-driven scenarios.
        </h1>

        <hr className="section-6__underline" />
      </div>
      <Carousel1 id="section-6__carousel" values={courosalValues} />
    </section>
  );
}
