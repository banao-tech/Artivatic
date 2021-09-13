import React from "react";
import rectImg from "../../assets/png/Rectangle 184.png"

import "./section13.css";
export default function Section13() {
    return (
        <section className="section-13">
            <div className="wrapper">
                <div className="headDiv">
                    <h1>Title for the <span>Key</span> Features of the product title</h1>
                </div>
                <div className="leftDiv"></div>
                <div className="rightDiv">
                    <img src={rectImg} ></img>
                </div>

            </div>
        </section>
    );
}
