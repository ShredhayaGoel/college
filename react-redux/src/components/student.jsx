import React, { useState, useEffect } from "react";

const Student = () => {
  useEffect(() => {
    console.log("Student component mounted");
    return () => {
      console.log("Student component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Student Component</h1>
    </div>
  );
};

export default Student;
