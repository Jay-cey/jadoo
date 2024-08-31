"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const VerticalCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    // Set up auto-slide functionality
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust timing as needed

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slides.length]);

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const currentSlide = slides[currentIndex];
  const prevSlide = slides[prevIndex];

  return (
    <div className="relative w-4/5 h-52">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div
            className="transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-full flex items-center justify-center"
              style={{ zIndex: 10 }}
            >
              <div className="relative w-full h-fit shadow-md rounded-lg p-10 bg-white text-[#5E6282] transition-opacity duration-1000 ease-in-out">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  width={1000}
                  height={100}
                  className="w-14 h-auto absolute -top-6 -left-5"
                />
                <blockquote>{currentSlide.description}</blockquote>
                <br />
                <p className="font-semibold text-lg">{currentSlide.name}</p>
                <p className="text-sm">{currentSlide.location}</p>
              </div>
            </div>
            <div
              className="absolute -top-2 -right-16 transform  h-56 w-full bg-white rounded-lg drop-shadow-sm shadow-sm opacity-70"
              // style={{ zIndex: 5 }}
            >
              <div className="relative w-full h-full shadow-lg rounded-lg p-10 text-[#5E6282]">
                <Image
                  src={prevSlide.image}
                  alt={prevSlide.title}
                  width={1000}
                  height={100}
                  className="w-14 h-auto absolute -top-6 -left-5"
                />
                <blockquote>{prevSlide.description}</blockquote>
                <br />
                <p className="font-semibold text-lg">{prevSlide.name}</p>
                <p className="text-sm">{prevSlide.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
