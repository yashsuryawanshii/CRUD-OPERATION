import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import style from "./createUser.module.css";
import { useNavigate } from "react-router-dom";

const EditUser = () => {

  const navigate = useNavigate()

  const [name, setName] = React.useState("");
  const [salary, setSalry] = React.useState("");
  const [compnay, setCompnay] = React.useState("");

  let { id } = useParams(); // this is used in url 
  React.useEffect(() => {
    /* axios is third party library used to handel async operations  */
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setSalry(res.data.salary);
        setCompnay(res.data.compnay);
      })
      .catch((err) => {
        console.error(`Some error has occurd ${err}`);
      });
  }, []);

  
  const formSubmit = () => {
    const payLoad = { name, salary, compnay };
    axios
      .put(`http://localhost:3000/users/${id}` , payLoad)
      .then(() => {
        console.log(`Data has been updated`);
      })
      .catch(() => {
        console.error(`Data is not updated`);
      });
      navigate("/users");
  };

  return (
    <div className={style.main}>
      <article className={style.form}>
        <h1>Edit User Data</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          placeholder="Enter your salary"
          name="salary"
          value={salary}
          onChange={(e) => setSalry(e.target.value)}
        />
        <label htmlFor="compnay">Compnay:</label>
        <input
          type="text"
          placeholder="Enter your compnay"
          name="compnay"
          value={compnay}
          onChange={(e) => setCompnay(e.target.value)}
        />
        <button type="submit" onClick={formSubmit}>
          Submit
        </button>
      </article>
    </div>
  );
};

export default EditUser;
