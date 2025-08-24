import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions about <span className="font-semibold">The Watch</span>?
        We’d love to hear from you! Get in touch with our team.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <div>
          <FaPhone className="text-secondary text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">+880 123 456 789</p>
        </div>
        <div>
          <FaEnvelope className="text-secondary text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">support@thewatch.com</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-secondary text-2xl mx-auto mb-2" />
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Write your message"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
