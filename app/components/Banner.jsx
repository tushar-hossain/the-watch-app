import React from "react";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary text-white rounded-md">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co.com/tT65Mn18/smart-watch3.jpg"
          alt="Smartwatch Banner"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Banner Content */}
      <div className="relative container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Future on Your Wrist
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Experience innovation like never before with{" "}
          <span className="font-semibold">The Watch</span>. GPS tracking,
          heartbeat analysis, and security features—all in one stylish device.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-accent px-8">Shop Now</button>
          <button className="btn btn-outline text-white border-white px-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
