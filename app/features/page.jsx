import React from "react";
import {
  FaMapMarkedAlt,
  FaHeartbeat,
  FaShieldAlt,
  FaLightbulb,
  FaBell,
  FaWalking,
  FaBatteryFull,
  FaWifi,
} from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "GPS Tracking",
    description:
      "Stay on track with real-time GPS navigation, route history, and emergency location sharing.",
    icon: <FaMapMarkedAlt className="text-secondary text-4xl" />,
  },
  {
    id: 2,
    title: "Heartbeat Analysis",
    description:
      "Monitor your heart health with advanced sensors that give accurate and real-time data.",
    icon: <FaHeartbeat className="text-red-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Security First",
    description:
      "Enhanced data encryption and SOS emergency features keep you and your information safe.",
    icon: <FaShieldAlt className="text-primary text-4xl" />,
  },
  {
    id: 4,
    title: "Innovative Idea",
    description:
      "Built with cutting-edge technology, designed to give you a seamless experience.",
    icon: <FaLightbulb className="text-accent text-4xl" />,
  },
  {
    id: 5,
    title: "Smart Notifications",
    description:
      "Receive call, message, and app alerts directly on your wrist without touching your phone.",
    icon: <FaBell className="text-yellow-500 text-4xl" />,
  },
  {
    id: 6,
    title: "Fitness Tracking",
    description:
      "Track steps, calories, and workouts to stay fit and motivated every day.",
    icon: <FaWalking className="text-green-600 text-4xl" />,
  },
  {
    id: 7,
    title: "Long Battery Life",
    description:
      "Powerful battery that lasts for days on a single charge, keeping you connected longer.",
    icon: <FaBatteryFull className="text-indigo-500 text-4xl" />,
  },
  {
    id: 8,
    title: "Seamless Connectivity",
    description:
      "Connect easily with Bluetooth, Wi-Fi, and other smart devices for a smooth experience.",
    icon: <FaWifi className="text-blue-500 text-4xl" />,
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 my-16">
      <h1 className="text-3xl font-bold text-center mb-10">Our Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="card bg-base-100 shadow-md border hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
