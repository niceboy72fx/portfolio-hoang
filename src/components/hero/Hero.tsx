"use client";

import Image from "next/image";
import { CustomButton } from "..";
import ImageFile from "../../public/hero.png";
import "./Hero.css";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="content-title">
          {" "}
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="content-subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton title="Explore Cars" containerStyles="content-btn" />
      </div>
      <div className="content-image">
        <div className="image-contaner">
          <Image src={ImageFile} alt="hero" fill className="object-contain" />
        </div>
        <div className="image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
