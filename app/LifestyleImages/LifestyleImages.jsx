"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lifestyleImages = [
  "https://i.ibb.co.com/DPR2hGdf/images-4.jpg",
  "https://i.ibb.co.com/TJShsZh/images-5.jpg",
  "https://i.ibb.co.com/wNdZbHhy/images.jpg",
  "https://i.ibb.co.com/1YBntFfz/The-Galaxy-Watch-8-perfect-companion-to-your-Galaxy-phone-perfect-guide-for-a-new-lifestyle.jpg",
  "https://i.ibb.co.com/SwJgFYXK/beaaa.jpg",
  "https://i.ibb.co.com/k6yL2JNW/61n0a-VXta7-L-UY1000.jpg",
];

export default function LifestyleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-base-100 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          See The Watch in Action
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how <span className="font-semibold">The Watch</span> fits
          perfectly in your daily life—fitness, travel, work, and leisure.
        </p>

        <Slider {...settings} className="mx-auto">
          {lifestyleImages?.map((img, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
                <img
                  src={img}
                  alt={`Lifestyle ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
