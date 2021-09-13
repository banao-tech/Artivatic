import React from "react";
import "./IntroductionSection.css";
import img from "../../assets/png/Rectangle 184.png";
export default function IntroductionSection() {

    return (
        <div id="introductionsection">
            <section className="first-section wrapper">
                <div className="left-md">
                    <h1>A World of <span>Delightful</span> Possibilities</h1>
                    <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time. AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                    <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time. AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                    <div className="links">
                        <a href="#" className="fill">Explore Openings</a>
                        <a href="#">Know more about Artivatic</a>
                    </div>
                </div>
                <div className="right-md">
                    <img src={img} className="about-img"></img>
                </div>
            </section>
        </div>
    );
}