import React from "react";

const blogs = [
  {
    id: 1,
    title: "Why GPS Tracking in Watches is a Game-Changer",
    date: "August 20, 2025",
    author: "Admin",
    image: "https://i.ibb.co.com/Q75FrQw2/bvrbcjp.jpg",
    excerpt:
      "Smartwatches with GPS technology are revolutionizing how we navigate, track fitness, and ensure safety...",
  },
  {
    id: 2,
    title: "The Future of Heartbeat Analysis in Wearables",
    date: "August 15, 2025",
    author: "Md. Tushar",
    image: "https://i.ibb.co.com/0V1Jgm5b/image-10.jpg",
    excerpt:
      "Heartbeat monitoring isn’t just for fitness enthusiasts anymore—it’s a key feature in health tracking and medical alerts...",
  },
  {
    id: 3,
    title: "Security First: How Smartwatches Protect You",
    date: "August 10, 2025",
    author: "Team The Watch",
    image: "https://i.ibb.co.com/wNdZbHhy/images.jpg",
    excerpt:
      "Modern watches come with SOS alerts, GPS sharing, and emergency call features—making them more than just accessories...",
  },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Our Latest Blogs</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay updated with the latest insights, trends, and innovations in the
        world of smartwatches. Discover how{" "}
        <span className="font-semibold">The Watch</span> is shaping the future.
      </p>

      {/* Blogs Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="text-sm text-gray-500">
                {blog.date} • {blog.author}
              </p>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <div className="card-actions justify-end mt-4">
                {/* <button className="btn btn-secondary btn-sm">Read More</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
