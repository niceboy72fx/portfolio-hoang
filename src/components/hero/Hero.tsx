"use client";

import Image from "next/image";
import { CustomButton } from "..";
import ImageFile from "../../public/hero.png";
import "./Hero.css";
import Model3D from "../model3D/Model3D";

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
        <h1 className="content-title text-white"> Hello, My name is</h1>
        <h1 className="content-title text-white"> Luong Van Hoang !</h1>
        <p className="content-subtitle font-bold text-white">
          Software Engineer
        </p>
        <p className="my-5 text-xl font-bold text-white">
          Friendly - Crazy - Flexible
        </p>
        <CustomButton
          handleClick={() =>
            window.open(
              "https://drive.google.com/file/d/11L0ZRu2fqkyNaGR-fRKkuJqKs6gnVefs/view?usp=sharing",
              "_blank"
            )
          }
          title="Download CV"
          containerStyles="content-btn"
        />
      </div>
      <div className="content-image">
        <div className="image-contaner">
          {/* <Image src={ImageFile} alt="hero" fill className="object-contain" /> */}
          <Model3D />
        </div>
        <div className="image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
