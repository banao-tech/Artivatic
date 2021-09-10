import React from "react";
import "./boxcard.css";
import blackDot from "../../assets/vector/blackDot.svg";
export default function BoxCard(props) {
    const { title, text, contactNo, btnText, ancLink, className } = props;
    return (
        <section className="boxcard">

            <div className={'grid-card mob ' + className}>
                <img src={blackDot} alt="grid-card-img" />
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="contactno-div">
                    {contactNo.map((value, index) => {
                        return <label className="contactno" key={index}>{value}</label>
                    })}
                </div>

                <a href={ancLink}>
                    <button >{btnText}</button>
                </a>
            </div>
        </section>
    );
}
