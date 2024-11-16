"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Flower from "@/components/models/Flower";
import RenderModel from "@/components/RenderModel";
import bg from "../../public/background/background-image.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0); // Track current section

  const sections = ["#first-section", "#second-section"]; // Define sections

  const handleScroll = (e) => {
    if (isTransitioning) return; // Prevent triggering while transitioning

    const direction = e.deltaY > 0 ? 1 : -1; // Determine scroll direction (down or up)
    const nextSection = currentSection + direction;

    // Ensure next section is within bounds
    if (nextSection >= 0 && nextSection < sections.length) {
      setIsTransitioning(true);
      setCurrentSection(nextSection);

      setTimeout(() => {
        document.querySelector(sections[nextSection]).scrollIntoView({
          behavior: "smooth",
        });
        setIsTransitioning(false); // Allow transitions again
      }, 5); // Delay matches animation duration
    }
  };

  useEffect(() => {
    // Add wheel event listener
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      // Cleanup listener
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isTransitioning]);

  return (
    <div className="w-full h-full">
      {/* First Section */}
      <section
        id="first-section"
        className={`relative flex min-h-screen flex-col items-center justify-between ${
          isTransitioning && currentSection === 1 ? "animate-slide-down" : ""
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={bg}
            alt="background-image"
            fill
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center z-10 flex-col">
          <h1 className="text-white text-[10rem] font-bold translate-y-[-60%]">
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              S
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              o
            </span>
            <span className="font-jacquarda inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              f
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              i
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              a
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 opacity-0 cursor-default">
              i
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              Y
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              a
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              n
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              k
            </span>
            <span className="font-jacquarda inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              o
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              v
            </span>
            <span className="font-inter inline-block transform hover:translate-y-[-10px] transition-all duration-200 cursor-default">
              a
            </span>
          </h1>

          {/* Text Below Sofia Yankova */}
          <h1 className="text-3xl font-inter text-white font-medium translate-y-[-480%]">
            frontend developer • designer • 3d artist
          </h1>
        </div>

        {/* Flower Model */}
        <div className="w-full h-screen relative flex items-center justify-center z-0">
          <RenderModel>
            <Flower />
          </RenderModel>
        </div>
      </section>


      {/* Button in Bottom-Right */}
      <button
        onClick={() => {
          document.querySelector("#second-section").scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="absolute bottom-8 right-8 z-20 text-white text-7xl rotate-90 font-bold font-jacquarda cursor-pointer hover:-translate-y-1 transition-transform"
      >
        {"->"}
      </button>


    {/* Second Section */}
    <section
      id="second-section"
      className="h-screen bg-black flex flex-col items-center justify-center relative"  // Added relative to make absolute children position correctly
    >
      {/* Title */}
      <p className="font-jacquarda text-6xl text-accent2 mb-4 ">
        Contact me:
      </p>

      {/* Email */}
      <a
        href="mailto:yankovasofia@gmail.com"
        className="font-inter text-xl text-white underline mb-10 hover:text-accent transition-colors"
        >
        yankovasofia@gmail.com
      </a>

      {/* Find Me At */}
      <p className="font-inter text-l mb-10 translate-y-[800%] text-foreground ">
        find me at
      </p>

      {/* Icon Links */}
      <div className="flex space-x-8 mb-10 translate-y-[500%] text-white ">
        <a
          href="https://www.linkedin.com/in/sofia-yankova-92987a25a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-accent transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sophluv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-accent transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sophnni/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-accent transition-colors"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Button in Bottom-Right */}
      <button
        onClick={() => {
          document.querySelector("#first-section").scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="absolute bottom-8 right-8 z-20 text-white text-7xl -rotate-90 font-bold font-jacquarda cursor-pointer hover:-translate-y-1 transition-transform"
      >
        {"->"}
      </button>
    </section>

    </div>


  );
}
