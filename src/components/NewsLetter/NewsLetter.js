import React from "react";

import "./NewsLetter.css";
export default function NewsLetterSection(props) {
  const { title, btn1text, btn2text } = props;
  return (
    <section className="news-letter">
      <div className="wrapper">
        <h1 className="heading">{title}
        </h1>
        <hr className="hr-underline" />
        <div className="flex flex-jc-c">
          <button className="btn btn--dark btn--sm">
            {btn1text}
          </button>
          <button className="btn btn--toggle btn--sm">
            {btn2text}
          </button>
        </div>
        <hr className="hr" />
        <div className="container">
          <h2>
            Subcribe to our newsletter
          </h2>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <div className="icon"></div>
          </form>
        </div>
      </div>
    </section>
  );
}
