import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import image0 from "@/assets/image0.jpeg";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";
import image8 from "@/assets/image8.jpeg";
import image9 from "@/assets/image9.jpeg";
import image11 from "@/assets/image11.jpeg";

// Replace these with your actual image imports
const images = [
  { src: image0, alt: "A field of sunflowers!", caption: "1/11" },
  { src:image1, alt: "An intentional moment with the sunset sky", caption: "2/11" },
  { src:image2, alt: "A good mountain view, overlooking a cliff", caption: "3/11" },
  { src: image3, alt: "A layered sunset of bliss", caption: "4/11" },
  { src: image4, alt: "Me with a beaming smile against a mountainous background!", caption: "5/11" },
  { src: image5, alt: "The winding river underneath a red sunset...", caption: "6/11" },
  { src: image6, alt: "Floating with clouds above the sky, like air", caption: "7/11" },
  { src: image7, alt: "Admiring a high altitude sunset with whips of clouds", caption: "8/11" },
  { src: image8, alt: "Watching a layered sunset with flattened clouds", caption: "9/11" },
  { src: image9, alt: "Standing at a riverbank and with my foot firmly planted on the ground, ready to embark on a new adventure!", caption: "10/11" },
  { src: image11, alt: "A moment of peace at a still pond", caption: "11/11" },
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
    }, 10000); // change every 10 seconds
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Slideshow
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>

        <div className="slideshow-container arrows relative max-w-4xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slides photo-image-center ${
                index === slideIndex ? "block" : "hidden"
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
            className="prev absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="next absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl font-bold"
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
