import React from "react";

const lifestyleImages = [
  "https://i.ibb.co/7Y9w6Qn/lifestyle1.jpg",
  "https://i.ibb.co/N9rQYQG/lifestyle2.jpg",
  "https://i.ibb.co/9rQv7xK/lifestyle3.jpg",
  "https://i.ibb.co/hY1f5nP/lifestyle4.jpg",
  "https://i.ibb.co/2q9vHhF/lifestyle5.jpg",
  "https://i.ibb.co/3f7F9YB/lifestyle6.jpg",
];

export default function LifestyleImages() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          See The Watch in Action
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how <span className="font-semibold">The Watch</span> fits
          perfectly in your daily life—fitness, travel, work, and leisure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lifestyleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={`Lifestyle ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
