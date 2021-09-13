import React from "react";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection"
import Carousel from "../../components/Carousel/carousel";
import img from "../../assets/png/brand.png";
// import customer from "../../assets/customer.png";
import storyimg from "../../assets/png/Rectangle 199.png";
import "./aboutus.css";
import Section3 from "../../components/Section3/Section3";
import Section10 from "../../components/Section10/Section10";
import NewsLetterSection from "../../components/NewsLetter/NewsLetter";
export default function Aboutus() {
    return (
        <div id="aboutus">
            <IntroductionSection></IntroductionSection>
            <section className="wrapper">
                <Carousel
                    id="about-page__carousel"
                    containerClassName="resource-section__carousel__container"
                    prevControlClassName="resource-section__carousel__prev-control"
                    nextControlClassName="resource-section__carousel__next-control"
                    fade="primary-vl"
                    navColor="#22b966"
                    dotNav={false}
                >
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                    <img src={img}></img>
                </Carousel>
            </section>

            {/* Our Story Section Start  */}
            <section className="ourstory">
                <div className="wrapper">
                    <h1>Our story</h1>
                    <div className="line"></div>
                    <img src={storyimg}></img>
                    <p>Today’s data driven world moves faster than ever. From consumers, products, businesses, operations to revenue, all depends on the intelligent systems that are capable of learning the activities and building insights for better strategy, experience and delivery.</p>
                    <p>Artivatic empowers insurance & healthcare businesses and developers to re-imagine insurance & health products for the next billion users. We at Artivatic are constantly building low-cost, modular API infrastructure so that insurance businesses /hospitals can go live in a matter of days, not months.</p>
                </div>
            </section>
            {/* Our Story Section End */}

            {/* Our Journey Section Start  */}
            {/* <section className="our-journey wrapper">
                <h1>Our Journey</h1>
                <div className="row">
                    <div className="left-md">
                        <div className="journey-row">
                            <div className="year">
                                <h6>2017</h6>
                            </div>
                            <div className="desc">
                                <p>Artivatic operation was started by Puneet and Layak. <br />Raised First Cheque from Spark10 UK</p>
                            </div>
                        </div>
                        <div className="journey-row">
                            <div className="year">
                                <h6>2018</h6>
                            </div>
                            <div className="desc">
                                <p>First Underwriting Product was launched <br />Started piloting with large clients in India</p>
                            </div>
                        </div>
                        <div className="journey-row">
                            <div className="year">
                                <h6>2019</h6>
                            </div>
                            <div className="desc">
                                <p>Signed first customer. <br />Raised Sees Investment from Indian Angel Network & IAN Fund</p>
                            </div>
                        </div>
                        <div className="journey-row">
                            <div className="year">
                                <h6>2020</h6>
                            </div>
                            <div className="desc">
                                <p>7 Successful Live Clients <br />Started Generated regular revenue <br />Launched 8 core products & 400+ APIs platform<br />Expanding to APAC & USA Market</p>
                            </div>
                        </div>
                        <div className="journey-row">
                            <div className="year">
                                <h6>2021</h6>
                            </div>
                            <div className="desc">
                                <p>Incorporated in USA- Artivatic, Inc. <br />Launching B2C ASPIRE Platform<br />Health System Launch<br />Property & Auto Insurance Sector Launch<br />Distribution & Buy Policy Platforms Launch<br />Micro, Byte sized or Risk Based Product Design Platform Launch<br />Launching MiO Sales Platform<br />Launching Infrd Insurance API Cloud<br />Raises Pre-Series A Fund from KFintech (Backed by General Atlantic)<br />Launching in Singapore Office</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-md">
                        <img src={storyimg}></img>
                        <img src={storyimg}></img>
                        <img src={storyimg}></img>
                        <img src={storyimg}></img>
                        <img src={storyimg}></img>
                    </div>
                </div>


            </section> */}
            {/* Our Journey Section End  */}

            {/* Award Section Start  */}
            <Section3></Section3>
            {/* Award Section End */}

            {/* What We Do Section Start */}
            <section className="what-we-do">
                <IntroductionSection></IntroductionSection>
            </section>
            {/* What We Do Section Start */}

            {/* Changing the way Section */}
            <section className="change-the-way">
                <Section10></Section10>
            </section>
            {/* Changing the way Section */}

            {/* Join our Community Section */}
            <section className="join-community">
                <IntroductionSection></IntroductionSection>
            </section>
            {/* Join our Community Section */}

            {/* Our customers Section Start */}
            <section className="our-customer">
                <div className="wrapper">
                    <div className="left-md">
                        <h1>Our customers are<br /> <span>superheroes,</span> – we are their growth partners</h1>
                        <div className="line"></div>
                        <p>Righting the wrongs of insurance technology for global insurance organizations.Leading organizations in the world utilize Artivatic’s suite of solutions
                            Artivatic believes in collaborative growth with all of its stakeholders.</p>
                    </div>
                    <div className="right-md">
                        <img src={storyimg}></img>
                    </div>
                </div>
            </section>
            {/* Our customers Section End */}

            {/* Background Banner Section */}

            <NewsLetterSection
                title="Lets build next-gen insurance & health products"
                btn1text="Schedule a Demo"
                btn2text="Request Pricing"
            ></NewsLetterSection>

            {/* Background Banner Section */}
        </div>
    );
}