// src/App.jsx
import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.users.map((u, index) => ({
          id: u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          image: u.image,
          course: ["CS", "Math", "Physics", "IT"][index % 4],
          status: index % 2 === 0 ? "Active" : "Inactive",
        }));
        setStudents(transformed);
      });
  }, []);

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleActiveStatus = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status: student.status === "Active" ? "Inactive" : "Active" } : student
      )
    );
  };

  return (
    <div className="bg-[#0f0f1b] min-h-screen text-white w-screen">
      {/* Full-width dashboard */}
      <Dashboard count={students.length} />

      {/* Page content container */}
      <div className=" w-full  px-6">
        <AddStudentForm onAdd={handleAddStudent} />

        {/* Add spacing before search */}
        <div className="mt-10">
          <StudentList students={students} handle={handleActiveStatus}/>
        </div>
      </div>
    </div>
  );
}

export default App;
