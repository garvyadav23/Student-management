// src/components/StudentCard.jsx
import React from "react";

export default function StudentCard({ student,handle }) {
  return (
    <div className="bg-[#1b1b2f] rounded-2xl shadow-lg p-5 w-64 hover:scale-105 transition">
        <button onClick={() => handle(student.id)} className="absolute top-2 right-2 text-gray-400 hover:text-white">
            {student.status === "Active" ? "Deactivate" : "Activate"}
        </button>
      <img
        src={student.image}
        alt={student.firstName}
        className="rounded-xl h-40 w-full object-cover"
      />
      <h2 className="text-lg font-bold text-white mt-3">
        {student.firstName} {student.lastName}
      </h2>
      <p className="text-gray-400 text-sm">📚 {student.course}</p>
      <p className="text-gray-400 text-sm">🎓 {student.status}</p>
      <p className="text-purple-400 text-sm">ID: {student.id}</p>
    </div>
  );
}
