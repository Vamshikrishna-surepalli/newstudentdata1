import React, { useState } from "react";
import StudentList from "./StudentList";

const NewStudent = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [totalData, setTotalData] = useState([]);

  function submit() {
    var courses = JSON.parse(localStorage.getItem("courses") || "[]");

    var course = {
      name: name,
      email: email,
      date: date,
    };

    courses.push(course);

    localStorage.setItem("courses", JSON.stringify(courses));
    let a = JSON.parse(localStorage.getItem("courses"));
    setTotalData(a);
  }

  return (
    <div className="App ">
      <center>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="dd/mm/yyyy"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <br />
        <button onClick={submit}>submit</button>
      </center>
      <StudentList data={totalData} />
    </div>
  );
};

export default NewStudent;
