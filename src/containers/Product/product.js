import React from "react";
import "./product.css";
import Rectangle from "../../assets/png/Rectangle 184.png";
import Carousel from "../../components/Carousel/carousel";
import brand1Img from "../../assets/vector/brands.svg"
import brand2Img from "../../assets/vector/brands2.svg"
import NewsLetterSection from "../../components/NewsLetter/NewsLetter"
import Section12 from "../../components/Section12/Section12.js";
import Section13 from "../../components/section13/section13"
import Banner from "../../components/Banner/Banner";
export default function Product() {

    return (
        <div id="product">
            <section className="product">
                <div className="wrapper">
                    <div className="leftdiv">
                        <h1 className="head">AUSIS</h1>
                        <img src={Rectangle} className="rectangle mobile"></img>
                        <label className="title">Full-stack AI based Behavioural & Personalized Smart Underwriting</label>
                        <p className="description">
                            AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time. AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.
                        </p>
                        <p className="description">
                            AUSIS helps increasing STP from NSTP and also enables non-invasive methods of health data aggregation from AQI, Location, Mortality, Social, Photo, Video, Health Devices, Weather, Sanitation and more.AUSIS reduces up to 40% reduction in per policy issuance.
                        </p>
                        <button className="demo">Get a Demo</button>
                        <button className="learnMore">Learn More</button>
                        <br />
                        <label className="casestudy">Case study & customer stories for AUSIS</label>
                    </div>
                    <img src={Rectangle} className="rectangle desktop"></img>
                </div>
            </section>
            <section className="partners">
                <div className="wrapper">
                    <Carousel
                        id="partners__carousel"
                        containerClassName="partners__carousel__container"
                        prevControlClassName="partners__carousel__prev-control"
                        nextControlClassName="partners__carousel__next-control"
                        fade="primary-vl"
                        navColor="#22b966"
                        dotNav={false}>
                        <img src={brand1Img} className="brandImage"></img>
                        <img src={brand2Img} className="brandImage"></img>
                        <img src={brand2Img} className="brandImage"></img>
                    </Carousel>
                    <div className="services">
                        <label className="title">AUSIS Designer for</label>
                        <Carousel
                            className="desktop"
                            id="services__carousel"
                            containerClassName="services__carousel__container"
                            prevControlClassName="services__carousel__prev-control"
                            nextControlClassName="services__carousel__next-control"
                            fade="primary-vl"
                            navColor="#22b966"
                            dotNav={false}>
                            <label className="lifeLabel">Life Underwritng </label>
                            <label className="medicalLabel">Medical underwriting</label>
                            <label className="alternativeLabel">Alternative Underwriting </label>
                        </Carousel>
                        <button className="demo">Get a Demo</button>
                        <Carousel
                            className="mobile"
                            id="services__carousel"
                            containerClassName="services__carousel__container"
                            prevControlClassName="services__carousel__prev-control"
                            nextControlClassName="services__carousel__next-control"
                            fade="primary-vl"
                            navColor="#22b966"
                            dotNav={false}>
                            <label className="lifeLabel">Life Underwritng </label>
                            <label className="medicalLabel">Medical underwriting</label>
                            <label className="alternativeLabel">Alternative Underwriting </label>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="product-detail">
                <div className="wrapper">
                    <img src={Rectangle} className="rectangle"></img>
                    <div className="leftdiv">


                        <label className="title">AUSIS – Life Underwriting</label>
                        <p className="description">
                            AUSIS enables insurance businesses to provide in-depth underwriting, scoring & decisions in real-time. AUSIS provides reduction in cost, time, risk & fraud with enhancing efficiency, decision power, alternative scoring and more.
                        </p>
                        <p className="description">
                            AUSIS helps increasing STP from NSTP and also enables non-invasive methods of health data aggregation from AQI, Location, Mortality, Social, Photo, Video, Health Devices, Weather, Sanitation and more.AUSIS reduces up to 40% reduction in per policy issuance.
                        </p>
                        <button className="demo">Get to know more</button>

                    </div>

                </div>
            </section>
            <Section13></Section13>
            <Banner
                title="Need to experience the product ?"
                buttonText="Take a quick Product Tour"
            ></Banner>
            <Section12></Section12>

            <NewsLetterSection
                title="Lets build next-gen insurance & health products"
                btn1text="Schedule a Demo"
                btn2text="Request Pricing"></NewsLetterSection>
        </div >
    );
}
