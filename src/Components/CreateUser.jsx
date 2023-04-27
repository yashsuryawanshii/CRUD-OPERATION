import React from "react";
import style from "./createUser.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = React.useState("");
  const [salary, setSalry] = React.useState("");
  const [compnay, setCompnay] = React.useState("");

  const navigate = useNavigate();

  const nameData = (e) => {
    setName(e.target.value);
  };

  const salaryData = (e) => {
    setSalry(e.target.value);
  };

  const compnayData = (e) => {
    setCompnay(e.target.value);
  };

  const submitData = () => {
    const payLoad = { name, salary, compnay };
    axios
      .post(`http://localhost:3000/users`, payLoad)
      .then(() => {
        console.log("data has uploaded");
      })
      .catch(() => {
        console.log("Something went Wrong");
      });

    navigate("/users");
  };

  return (
    <div className={style.main}>
      <article className={style.form}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={nameData}
        />
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          placeholder="Enter your salary"
          name="salary"
          value={salary}
          onChange={salaryData}
        />
        <label htmlFor="compnay">Compnay:</label>
        <input
          type="text"
          placeholder="Enter your compnay"
          name="compnay"
          value={compnay}
          onChange={compnayData}
        />
        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </article>
    </div>
  );
};

export default CreateUser;
