import React from "react";
import BoxCard from "../../components/BoxCard/boxcard";
import greenShade from "../../assets/vector/green-shade.svg";
import customerSvc from "../../assets/png/customer-service.png";
import officeMap from "../../assets/png/office-map.png";
import Carousel1 from "../../components/Carousel1/Carousel1.js";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import "./contact.css";
import contactImg from "../../assets/png/contact-us-footer.png"
export default function Contact() {
    var courosalProperties = {
        navbutton: "backgroundnone greenicon",
        carouselClass: "margin-left-none"
    }
    var contactDetails = ["India: +91 8431969670", "USA: +1 (302) 216-1988", "Fax: +1 (302) 216-1994", "Toll Free: +1 (866) 397-1145"];
    var courosalValues = [];
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    courosalValues.push({
        type: "contact",
        title: "India (Headquarters)",
        text: "580/B, NCR Arcade, Sector 6, Service Rd, HSR Layout, Bangalore-560102"
    })
    return (
        <div id="contact">
            <section className="getintouch">
                <div className="banner">
                    <div className="leftdiv">
                        <label className="head1">Get in touch</label>
                        <label className="description desktop">
                            Want to get in touch?We’d love to hear from you.Here’s how you can reach us...
                            <br /><br />
                            If you want to know more about our products, features, pricing or anything at all, we are here to answer your questions.
                        </label>
                    </div>
                    <img src={customerSvc} className="service-img"></img>
                    <label className="description mobile">
                        Want to get in touch?We’d love to hear from you.Here’s how you can reach us...
                        <br /><br />
                        If you want to know more about our products, features, pricing or anything at all, we are here to answer your questions.
                    </label>
                    <img src={greenShade} className="green-right-shade" />
                </div>
            </section >
            <section className="contactdetails">
                <div className="wrapper">
                    <div className="dot-grid-1"></div>
                    <div className="dot-grid-2"></div>
                    <BoxCard
                        className="marginleft"
                        title="Sales Enquiries"
                        text="Interested in any of our products? Talk to our experts today for demo & integration."
                        ancLink="/"
                        contactNo={contactDetails}
                        btnText="contact@artivatic.ai"
                    ></BoxCard>
                    <BoxCard
                        className="marginright"
                        title="Support Enquiries"
                        text="Interested in any of our products? Talk to our experts today for demo & integration."
                        ancLink="/"
                        contactNo={contactDetails}
                        btnText="contact@artivatic.ai"
                    ></BoxCard>
                    <BoxCard
                        className="marginleft"
                        title="Business & Partners"
                        text="Interested in any of our products? Talk to our experts today for demo & integration."
                        ancLink="/"
                        contactNo={contactDetails}
                        btnText="contact@artivatic.ai"
                    ></BoxCard>
                    <BoxCard
                        className="marginright"
                        title="Press & Media Enquiries"
                        text="Interested in any of our products? Talk to our experts today for demo & integration."
                        ancLink="/"
                        contactNo={contactDetails}
                        btnText="contact@artivatic.ai"
                    ></BoxCard>
                </div>

            </section >
            <section className="globalOffices">
                <div className="wrapper">

                    <label className="title">
                        <span style={{ color: "black" }}>Connect with one of our </span>Global offices
                    </label>
                    <img src={officeMap} className="map"></img>
                    <Carousel1 id="contactus__carousel" values={courosalValues} properties={courosalProperties}
                    />
                </div>
            </section>
            <section className="demo">
                <div className="banner">
                    <img src={contactImg} className="contact-detail-img" />
                    <div className="contactdetails">
                        <div className="row">
                            <div className="col-md-12">
                                <label className="heading">Get started with your
                                    <br />personalised
                                    <span style={{ color: "#22bb66" }}> Demo</span></label>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" name="Name" placeholder="Name" className="inputField" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" name="LastName" placeholder="Last Name" className="inputField" />
                            </div>
                            <div className="col-sm-6">
                                <input type="email" name="email" placeholder="Email" className="inputField" />
                            </div>
                            <div className="col-sm-6">
                                <input type="number" name="PhoneNumber" placeholder="Phone Number" className="inputField" />
                            </div>
                            <div className="col-md-12">
                                <input type="text" name="email" placeholder="Topic" className="inputField" />
                            </div>
                            <div className="col-md-12">
                                <textarea rows="10" className="inputField" placeholder="Discription" ></textarea>
                            </div>
                            <div className="col-md-12">
                                <button className="greenbutton">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
            <NewsLetter
                title="View case study of our products and customers"
                btn1text="View Case Study"
                btn2text="About Artivatic"
            />
        </div >
    );
}
