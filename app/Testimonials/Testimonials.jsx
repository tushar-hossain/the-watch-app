export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      feedback:
        "The Watch has completely changed the way I track my workouts. The GPS and heartbeat analysis are super accurate!",
      image: "https://i.ibb.co.com/hp6tTkW/images-1.jpg",
    },
    {
      name: "Michael Smith",
      role: "Traveler",
      feedback:
        "I love the security features! I can share my location with family when I hike. It gives me peace of mind.",
      image: "https://i.ibb.co.com/0VWSYn1Q/images-2.jpg",
    },
    {
      name: "Emily Carter",
      role: "Tech Enthusiast",
      feedback:
        "Stylish, smart, and reliable! The innovative design makes it more than just a watch—it's my daily companion.",
      image: "https://i.ibb.co.com/S48Bq4rW/images-3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-neutral rounded-md">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Don’t just take our word for it—see how{" "}
          <span className="font-semibold">The Watch</span> is making an impact.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-secondary"
                />
                <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="mt-4 text-gray-600 italic">“{t.feedback}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
