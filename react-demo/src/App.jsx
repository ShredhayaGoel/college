import "./App.css";
import Count from "./components/counter/count";
import Student from "./components/student";

function App() {
  return (
    <>
      <h1>Student Registration</h1>
      <Student
        name="Shredhaya Goel"
        roll={101}
        course="B.Tech"
        branch="CSE"
        year="4th"
        email="shredhayagoel@gmail.com"
        course={{
          degree: "B.Tech",
          semester: 7,
          college: "MIET",
        }}
        marks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
      />
    </>
  );
}

export default App;
