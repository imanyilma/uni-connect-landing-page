import React, { useState, useEffect, useRef } from "react";

import Image3 from "../../assets/im1.png";
import Image2 from "../../assets/iman.png";
import Video1 from "../../assets/globe1.mp4";

/* TYPEWRITER */
function TypeWriter({ text = "", speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayedText("");
    indexRef.current = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function HeroSection() {
 
    const slides = [
  {
    type: "video",
    src: Video1,
    title: "Welcome to UniConnect",
    subtitle:
      "A Centralized Digital Platform for University Community",
  },
  {
    type: "image",
    src: Image2,
    title: "Solve Fragmented Communication",
    subtitle:
      "UniConnect unifies scattered platforms into one system where students can access updates, interact, and collaborate efficiently.",
    imgClass: "object-contain w-[85%] max-w-[380px]",
  },
 {
  type: "image",
  src: Image3,
  title: "Smart & Secure Student Engagement",
  subtitle: "...",
  centered: true,
  imgClass: "object-contain w-[85%] max-w-[600px]",
}
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  return (
    <section id="home" className="relative  w-full min-h-screen overflow-hidden bg-black text-white">

      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
         <div
  key={index}
  className={`min-w-full h-full flex items-center justify-center px-6 
    ${index === 2 ? "object-center" : "flex-col lg:flex-row"}
  `}
>
            {/* LEFT: TEXT (desktop) */}
            <div className="hidden lg:flex flex-1 justify-center z-20">
              <div className="max-w-xl text-center">
                
                <h1 className="text-4xl xl:text-6xl font-bold mb-4 ml-20 text-primary">
                  <TypeWriter
                    key={currentIndex}
                    text={slide.title}
                    speed={40}
                  />
                </h1>

                <p className="text-gray-300 ml-20 text-lg">
                  <TypeWriter
                    key={"sub-" + currentIndex}
                    text={slide.subtitle}
                    speed={20}
                  />
                </p>
              </div>
            </div>
            

            {/* RIGHT: MEDIA */}
            <div className="flex-1 flex items-center justify-center w-full">

              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                 className="w-full h-[110vh] lg:h-[110vh] object-cover rounded-xl"
                />
              ) : (
                <img
  src={slide.src}
  alt={slide.title}
  className={`
    ${slide.imgClass} 
    h-auto ${slide.centered ? "mx-auto object-center" : "object-left"}
  `}
/>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* MOBILE TEXT OVERLAY */}
      <div className="absolute inset-0 flex lg:hidden items-center justify-center z-20 px-4 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-primary">
            <TypeWriter
              key={currentIndex}
              text={slides[currentIndex].title}
              speed={40}
            />
          </h1>

          <p className="text-gray-300 text-base">
            <TypeWriter
              key={"sub-" + currentIndex}
              text={slides[currentIndex].subtitle}
              speed={20}
            />
          </p>
        </div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-30">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-primary" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}