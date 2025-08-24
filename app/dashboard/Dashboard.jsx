import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaClock,
  FaBell,
} from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: 1250,
      icon: <FaUsers className="text-primary w-6 h-6" />,
    },
    {
      title: "Orders",
      value: 320,
      icon: <FaShoppingCart className="text-secondary w-6 h-6" />,
    },
    {
      title: "Revenue",
      value: "$24,500",
      icon: <FaDollarSign className="text-accent w-6 h-6" />,
    },
    {
      title: "Pending Tasks",
      value: 12,
      icon: <FaClock className="text-yellow-500 w-6 h-6" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-accent cursor-pointer">Home</li>
          <li className="hover:text-accent cursor-pointer">Users</li>
          <li className="hover:text-accent cursor-pointer">Orders</li>
          <li className="hover:text-accent cursor-pointer">Products</li>
          <li className="hover:text-accent cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <button className="btn btn-secondary flex items-center gap-2">
            <FaBell /> Notifications
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition"
            >
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
              <div className="p-4 bg-base-200 rounded-full">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Example Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>User</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>The Watch GPS Pro</td>
                <td>Sarah J.</td>
                <td className="text-green-500">Completed</td>
                <td>$199</td>
              </tr>
              <tr>
                <td>#002</td>
                <td>The Watch Heartbeat</td>
                <td>Michael S.</td>
                <td className="text-yellow-500">Pending</td>
                <td>$149</td>
              </tr>
              <tr>
                <td>#003</td>
                <td>The Watch Ultra</td>
                <td>Emily C.</td>
                <td className="text-red-500">Canceled</td>
                <td>$249</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
