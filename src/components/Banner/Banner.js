import React from "react";
import "./Banner.css";
import Rectangle from "../../assets/png/Rectangle 184.png";
import Carousel from "../../components/Carousel/carousel";
import brand1Img from "../../assets/vector/brands.svg"
import brand2Img from "../../assets/vector/brands2.svg"
import NewsLetterSection from "../../components/NewsLetter/NewsLetter"
import Section12 from "../../components/Section12/Section12.js";
export default function Banner(props) {
    const { bannerClass, title, buttonText, navUrl, titleClass, buttonClass, hrClass } = props;
    return (
        <div id="Banner">
            <section className={`banner ${bannerClass ? bannerClass : ''}`} >
                <div className="wrapper">
                    <h1 className={`title ${titleClass ? titleClass : ''}`}>{title}</h1>
                    <hr className={`hr ${hrClass ? hrClass : ''}`}></hr>
                    <button className={`button ${buttonClass ? buttonClass : ''}`}>{buttonText}</button>
                </div>
            </section>
        </div >
    );
}
