import React from "react";
import MainLayout from "../layout/MainLayout";
import headshot from "../assets/images/headshot.jpeg";
import "./pages.css";
import ScrollToTop from "../ScrollToTop";
export default function AboutPage() {
  ScrollToTop();
  return (
    <MainLayout>
      <div className="about-container">
        <h2 className="about-container-title">Hey, I'm Alex!</h2>
        <img className="about-headshot" src={headshot} />
        <div className="about-paragraphs">
          <h1 className="about-introduction">Hey, I'm Alex</h1>
          <p>
            I’m an avid walker, nature lover, swimmer, bánh mì connoisseur, and
            the reason you’re here—a web designer!
          </p>

          <p>
            I created my first website at 18 and have been captivated by the
            web's endless possibilities ever since. My greatest passion is
            collaborating with emerging businesses to build the foundational
            framework and architecture necessary for establishing a strong
            online presence. I'm fascinated by the intricacies of
            design—understanding the rationale behind element configurations,
            the principles of Conversion Rate Optimization (CRO), and the art of
            web development. The process of creating something out of nothing
            has always resonated with me deeply.
          </p>

          <p>
            Driven by curiosity and a relentless pursuit of excellence, I
            continuously seek to expand my knowledge and hone my skills. My
            portfolio is a testament to my journey in the digital realm,
            reflecting a blend of creativity, strategic thinking, and technical
            prowess. I'm excited to bring my vision, expertise, and passion to
            your team, crafting memorable online experiences that drive success
            and foster connections.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
