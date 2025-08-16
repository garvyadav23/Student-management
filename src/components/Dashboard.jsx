// src/components/Dashboard.jsx
import React from "react";

export default function Dashboard({ count }) {
  return (
    <div className="w-full py-16 text-center bg-gradient-to-b from-[#0f0f1b] to-[#1b1b2f]">
      <h1 className="text-5xl font-bold text-white">
        Welcome to <span className="text-purple-400">Student Portal</span>
      </h1>
      <p className="text-gray-400 mt-3 text-lg">Total Students: {count}</p>
    </div>
  );
}
