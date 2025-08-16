// src/components/StudentList.jsx
import React, { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentList({ students,handle }) {
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    (s.firstName + " " + s.lastName).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* search input with spacing */}
      <input
        type="text"
        placeholder="Search students..."
        className="w-full max-w-lg p-3 rounded-xl bg-[#1b1b2f] text-white border border-gray-700 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid of students */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {filtered.map((student) => (
          <StudentCard key={student.id} student={student} handle={handle} />
        ))}
      </div>
    </div>
  );
}
