import React, { useState, useEffect } from "react";

import imageSmall from "@/assets/sliding-scale.png";
import imageMed from "@/assets/sliding-scale-mid.png";
import imageLrg from "@/assets/sliding-scale-high.png";

// Replace these with your actual image imports
const images = [
  { src: imageSmall, alt: "A description of a sliding scale cup analogy at the basic level", caption: "1/3" },
  { src:imageMed, alt: "A description of a sliding scale cup analogy at the medium level", caption: "2/3" },
  { src:imageLrg, alt: "A description of a sliding scale cup analogy at the highest level", caption: "3/3" },
];

const SlideshowSection: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 120000); // change every 120 sec for processing times
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sliding Scale Cups
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
          <br />
          <p>The slideshow will automatically change after two minutes. You can also manually click the buttons to read the next tier.</p>
        </div>

        <div className="slideshow-container arrows relative max-w-4xl mx-auto">
          {images.map((img, id) => (
            <div
              key={id}
              className={`slides photo-image-center ${
                id === slideIndex ? "block" : "hidden"
              }`}
            >
              {/* <div className="number-text">{img.caption}</div> */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}

          {/* Arrows */}
          <button
            className="prev absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="next absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl font-bold px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
            onClick={nextSlide}
          >
            ❯
          </button>

          {/* Caption */}
          <div className="caption-container text-center mt-4">
            <p id="caption">{images[slideIndex].alt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;
