import React from "react";
import Rectangle from "../../assets/png/Rectangle 184.png";
import serviceimg1 from "../../assets/png/service-img1.png";
import serviceimg2 from "../../assets/png/service-img2.png";
import serviceimg3 from "../../assets/png/service-img3.png";
import serviceimg4 from "../../assets/png/service-img4.png";
import Card from "../../components/Card/Card";
import teamImg from "../../assets/png/team.png"
import Carousel from "../../components/Carousel/carousel";
import "./team.css";
export default function Team() {
    var courosalProperties = {
        navbutton: "backgroundnone greenicon",
        carouselClass: "margin-left-none"
    }
    var staffList = [];

    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    }); staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    }); staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    staffList.push({
        type: "tag",
        name: "Name of the person",
        Designation: "Designation Of Person"
    });
    return (
        <div id="team">
            {/* First Section Start */}
            <section className="first-section">
                <div className="wrapper">
                    <div class="row">
                        <div className="left-md mobile">
                            <h1 >A World of <span>Delightful</span> Possibilities</h1>
                        </div>
                        <div className="left-md desktop">
                            <h1 >A World of <span>Delightful</span> Possibilities</h1>
                            <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time.AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                            <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time.AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                            <div className="links">
                                <a href="#" className="fill">Explore Openings</a>
                                <a href="#">Know more about Artivatic</a>
                            </div>
                        </div>
                        <div className="right-md">
                            <img src={Rectangle} className="about-img"></img>
                        </div>
                        <div className="left-md mobile">
                            <div>
                                <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time.AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                                <p>AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time.AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.</p>
                                <div className="links">
                                    <a href="#" className="fill">Explore Openings</a>
                                    <a href="#">Know more about Artivatic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Work Section Start */}
            <section className="work-value">
                <div className="wrapper">
                    <div className="dot-grid-1"></div>
                    <div className="dot-grid-2"></div>
                    <div className="col-4">
                        <h1>Our work
                            <span>values</span></h1>
                        <div className="line"></div>
                        <p>Artivatic makes all your tools work better by letting you integrate industry-leading software and custom apps.</p>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <span></span>
                            <h3>Title 1</h3>
                            <p>Our insurance, brokers, distribution partners find navigating the supply & demand side of the industry chaotic.Our insurance, brokers, distribution partners.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <span></span>
                            <h3>Title 2</h3>
                            <p>Our insurance, brokers, distribution partners find navigating the supply & demand side of the industry chaotic.Our insurance, brokers, distribution partners.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <span></span>
                            <h3>Title 3</h3>
                            <p>Our insurance, brokers, distribution partners find navigating the supply & demand side of the industry chaotic.Our insurance, brokers, distribution partners.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <span></span>
                            <h3>Title 4</h3>
                            <p>Our insurance, brokers, distribution partners find navigating the supply & demand side of the industry chaotic.Our insurance, brokers, distribution partners.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <span></span>
                            <h3>Title 5</h3>
                            <p>Our insurance, brokers, distribution partners find navigating the supply & demand side of the industry chaotic.Our insurance, brokers, distribution partners.</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* Third Section Start */}
            <section className="third-section">
                <div className="wrapper">
                    <div className="row">
                        <div className="col md-5">
                            <h1>Collaborative <br /> Environment</h1>
                            <img src={serviceimg1}></img>
                        </div>
                        <div className="col md-7">
                            <img src={serviceimg2}></img>
                        </div>
                        <div className="col md-7">
                            <img src={serviceimg3}></img>
                            <div className="height"></div>
                        </div>
                        <div className="col md-5">
                            <h3>We created a <span>vision statement </span> which is clear, short, and timeless. Every project gains the benifits of previous projects and experience. <span>Innovation</span> via Automation</h3>
                        </div>
                        <div className="col md-12">
                            <img src={serviceimg4}></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* Core Team Start */}
            <section className="core-team">
                <div className="wrapper">

                    <div className="row desktop">
                        <h1>Meet Core Team</h1>
                        {staffList.map((value, index) => {
                            return <div className="col-md-4">
                                <div className="card">

                                    <img src={teamImg} className="profilePic"></img>
                                    <div className="pad24">
                                        <label className="title">{value.name}</label>
                                        <label className="designation">{value.Designation}</label>
                                    </div>

                                </div>
                            </div>

                        })}
                    </div>
                    <div className="row mobile">

                        <h1>Meet Core Team</h1>
                        <Carousel
                            id="core-team__carousel"
                            containerClassName="core-team__carousel__container"
                            prevControlClassName="core-team__carousel__prev-control"
                            nextControlClassName="core-team__carousel__next-control"
                            fade="primary-vl"
                            navColor="#22b966"
                            dotNav={false}
                        >
                            {staffList.map((value, index) => {
                                return <div className="col-md-4">
                                    <div className="card">

                                        <img src={teamImg} className="profilePic"></img>
                                        <div className="pad24">
                                            <label className="title">{value.name}</label>
                                            <label className="designation">{value.Designation}</label>
                                        </div>

                                    </div>
                                </div>

                            })}
                        </Carousel>
                        {/* <Carousel1 id="contactus__carousel" values={staffList} properties={courosalProperties}
                        /> */}
                        {/* <Carousel1 id="team__carousel" values={staffList}
                        /> */}
                    </div>

                </div>
            </section>

            {/* Benefits Section Start  */}
            <section className="benefits">
                <div className="wrapper">
                    <h1>Perks and Benefits</h1>
                    <div className="line"></div>
                    <p>Future is about need based, instant, personalised & risk focused. Artivatic makes that happen with powerful AI driven platform.</p>
                    <div className="row">
                        <div className="col md-4">
                            <span></span>
                            <h3>Centrally Located</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                        <div className="col md-4">
                            <span></span>
                            <h3>Fitness Credits</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                        <div className="col md-4">
                            <span></span>
                            <h3>Health Cover</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                        <div className="col md-4">
                            <span></span>
                            <h3>Learning Stipend</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                        <div className="col md-4">
                            <span></span>
                            <h3>Gadgets</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                        <div className="col md-4">
                            <span></span>
                            <h3>Food</h3>
                            <p>Bleeding-edge technology innovations that leverage Natural Language Processing, Deep Learning and Predictive Algorithms to build a scalable and reliable financial, healthcare & Insurtech systems.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Last Section Start */}
            <section className="last-section">
                <div className="wrapper">
                    <div className="col-md-6">
                        <div className="box img1">
                            <h2>Do you want to be a
                                part of our Innovation team?</h2>
                            <div className="line"></div>
                            <a href="#">See current openings</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box img2">
                            <h2>We provide personalized insurance products based on customer goals</h2>
                            <div className="line"></div>
                            <a href="#">Know more about Atrivatic</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}