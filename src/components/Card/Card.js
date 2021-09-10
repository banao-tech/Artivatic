import React from "react";
import phoneIcon from "../../assets/vector/phone.svg";
import tollfreeIcon from "../../assets/vector/tollfree.svg";
import mailIcon from "../../assets/vector/mail.svg"
import cardImg from "../../assets/png/cardIMG.png";
import "./Card.css";
export default function Card(props) {
  const { type, tag, title, text, btnText, properties } = props;
  return (
    <div className={`card ${type} `}>
      <img src={cardImg} alt="card-img" className="card__img" />
      <div className="card__info">
        {tag && <span className="card__tag">{tag}</span>}
        <h5 className="card__title">{title}</h5>
        <p className="card__text">{text}</p>
        {type === "hover" && (
          <div className="card__hover">
            <h5 className="card__hover__title">{title}</h5>
            <p className="card__hover__text">{text}</p>
          </div>
        )}
        {type === "contact" && (
          <div className="card__contactdetails">
            <div className="row">
              <img src={phoneIcon} className="icon"></img>
              <label className="contact-label">Telephone number here</label>
            </div>
            <div className="row">
              <img src={mailIcon} className="icon"></img>
              <label className="contact-label">Mail ID here</label>
            </div>
            <div className="row">
              <img src={tollfreeIcon} className="icon"></img>
              <label className="contact-label">Toll free number here</label>
            </div>



          </div>
        )}
        {btnText && <button className="card__btn">{btnText}</button>}
      </div>
    </div>
  );
}
