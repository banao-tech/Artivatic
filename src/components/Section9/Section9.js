import React from "react";

import Carousel1 from "../Carousel1/Carousel1.js";

import "./Section9.css";
export default function Section9() {
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
    <section className="section-9">
      <div className="wrapper">
        <h1 className="section-9__heading">Industy Solutions</h1>

        <hr className="section-9__underline"></hr>
      </div>
      <Carousel1 id="section-9__carousel" values={courosalValues} />
    </section>
  );
}
