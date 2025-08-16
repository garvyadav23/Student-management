// src/components/AddStudentForm.jsx
import React, { useState } from "react";

export default function AddStudentForm({ onAdd }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    course: "",
    status: "Active",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now(), image: "https://i.pravatar.cc/150" });
    setForm({ firstName: "", lastName: "", course: "", status: "Active" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1b1b2f] p-6 rounded-2xl shadow-md max-w-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Add Student</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded-lg bg-[#0f0f1b] text-white"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded-lg bg-[#0f0f1b] text-white"
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded-lg bg-[#0f0f1b] text-white"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded-lg bg-[#0f0f1b] text-white"
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
      >
        Add Student
      </button>
    </form>
  );
}
