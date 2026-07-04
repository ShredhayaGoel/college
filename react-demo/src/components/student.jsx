import React from "react";

const Student = ({ name, roll, course, branch, year, email, marks }) => {
  return (
    <div>
      <h2>{name}</h2>

      <p>Roll: {roll}</p>

      <p>Branch: {branch}</p>

      <p>Year: {year}</p>

      <p>Email: {email}</p>

      <h3>Course Details</h3>

      <p>Degree: {course.degree}</p>
      <p>Semester: {course.semester}</p>
      <p>College: {course.college}</p>

      <h3>Marks</h3>

      {marks.map((mark, index) => (
        <p key={index}>
          Subject {index + 1}: {mark}
        </p>
      ))}
    </div>
  );
};

export default Student;
