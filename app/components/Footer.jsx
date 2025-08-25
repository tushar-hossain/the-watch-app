import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <footer className="w-11/12 mx-auto py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">The Watch</h2>
            <p className="text-gray-300">
              Innovative smartwatches that combine style, technology, and
              security. Stay connected, fit, and safe every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-accent cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-accent cursor-pointer">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="hover:text-accent cursor-pointer">
                <Link href={"/features"}>Features</Link>
              </li>
              <li className="hover:text-accent cursor-pointer">
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li className="hover:text-accent cursor-pointer">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          {/* <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-accent cursor-pointer">Help Center</li>
            <li className="hover:text-accent cursor-pointer">FAQ</li>
            <li className="hover:text-accent cursor-pointer">Shipping</li>
            <li className="hover:text-accent cursor-pointer">Returns</li>
          </ul>
        </div> */}

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-300">
              <FaFacebookF className="hover:text-accent cursor-pointer w-5 h-5" />
              <FaTwitter className="hover:text-accent cursor-pointer w-5 h-5" />
              <FaInstagram className="hover:text-accent cursor-pointer w-5 h-5" />
              <FaYoutube className="hover:text-accent cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} The Watch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
