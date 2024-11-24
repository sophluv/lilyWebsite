"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Flower from "@/components/models/Flower";
import RenderModel from "@/components/RenderModel";
import bg from "../../public/background/background-image.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["#home", "#contacts"];

  const handleScroll = (e) => {
    if (isTransitioning) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;

    if (nextSection >= 0 && nextSection < sections.length) {
      setIsTransitioning(true);
      setCurrentSection(nextSection);

      setTimeout(() => {
        document.querySelector(sections[nextSection]).scrollIntoView({
          behavior: "smooth",
        });
        setIsTransitioning(false);
      }, 5);
    }
  };

  const handleButtonClick = (index) => {
    setCurrentSection(index);
    document.querySelector(sections[index]).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isTransitioning]);

  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <nav className="fixed top-4 right-8 z-50 bg-opacity-80 px-3 py-2 rounded-lg shadow-lg">
        <ul className="flex space-x-8 text-neutral-400 font-jacquarda text-xl">
          <li>
            <button
              onClick={() => handleButtonClick(0)}
              className={`hover:text-accent2 transition-colors ${
                currentSection === 0 ? "text-accent2" : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick(1)}
              className={`hover:text-accent2 transition-colors ${
                currentSection === 1 ? "text-accent2" : ""
              }`}
            >
              Contacts
            </button>
          </li>
        </ul>
      </nav>

      {/* First Section */}
      <section
        id="home"
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
        onClick={() => handleButtonClick(1)}
        className="absolute bottom-8 right-8 z-20 text-white text-7xl rotate-90 font-bold font-jacquarda cursor-pointer hover:-translate-y-1 transition-transform"
      >
        {"->"}
      </button>

      {/* Second Section */}
      <section
        id="contacts"
        className="h-screen bg-black flex flex-col items-center justify-center relative"
      >
        {/* Title */}
        <p className="font-jacquarda text-6xl text-accent2 mb-4">Contact me:</p>

        {/* Email */}
        <a
          href="mailto:yankovasofia@gmail.com"
          className="font-inter text-xl text-white underline mb-10 hover:text-accent transition-colors"
        >
          yankovasofia@gmail.com
        </a>

        {/* Find Me At */}
        <p className="font-inter text-l mb-10 translate-y-[800%] text-foreground">
          find me at
        </p>

        {/* Icon Links */}
        <div className="flex space-x-8 mb-10 translate-y-[500%] text-white">
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
          onClick={() => handleButtonClick(0)}
          className="absolute bottom-8 right-8 z-20 text-white text-7xl -rotate-90 font-bold font-jacquarda cursor-pointer hover:-translate-y-1 transition-transform"
        >
          {"->"}
        </button>
      </section>
    </div>
  );
}
