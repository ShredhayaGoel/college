/*
export default function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>

      <input
        type="text"
        value={53545}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h3>Name : {name}</h3>
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import Audioplayer from "./audio";
import Student from "./components/student";

function App() {
  const [employees, setEmployees] = useState([]);

  /*const getEmployees = async () => {
    try {
      const response = await axios.get(
        "https://api.webroot.net.in/employees.php",
      );

      console.log(response.data);

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);*/
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://api.webroot.net.in/employees.php",
        );

        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmployees();
  }, []);
  const [view, setView] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setView(!view)}> Toggle </button>
      {view ? <h1>Student Information</h1> : null}
      <h1>Employees List</h1>

      <div className="cards">
        {employees.map((emp) => (
          <div className="card" key={emp.eid}>
            <img
              src={`https://api.webroot.net.in/images/${emp.photo}`}
              alt={emp.name}
            />

            <h2>{emp.name}</h2>

            <p>
              <strong>ID:</strong> {emp.eid}
            </p>

            <p>
              <strong>Designation:</strong> {emp.designation}
            </p>

            <p>
              <strong>Salary:</strong> ₹{emp.salary}
            </p>

            <p>
              <strong>Joining:</strong> {emp.doa}
            </p>

            <p>
              <strong>Mobile:</strong> {emp.mobile}
            </p>
          </div>
        ))}
      </div>
      <Audioplayer />
      <Student />
    </div>
  );
}

export default App;
