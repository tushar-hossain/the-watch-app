import { ShieldCheck, HeartPulse, MapPinned, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <MapPinned className="w-10 h-10 text-secondary" />,
      title: "Advanced GPS Tracking",
      description:
        "Navigate with confidence using real-time GPS and route history. Perfect for travel and adventure.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-secondary" />,
      title: "Health Monitoring",
      description:
        "Stay on top of your health with heartbeat analysis, activity tracking, and wellness reminders.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      title: "Security First",
      description:
        "Emergency location sharing and safety alerts keep you and your loved ones protected at all times.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-secondary" />,
      title: "Innovative Design",
      description:
        "Combining style with cutting-edge technology for a watch that fits every lifestyle.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          Discover what makes <span className="font-semibold">The Watch</span>{" "}
          your perfect companion for everyday life and adventures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
