import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import style from "./user.module.css";

const Users = () => {
  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
      })
      .catch(() => {
        console.log(`Something went wrong`);
      });
  }, []);

  const onDelet = (value) => {
    axios.delete(`http://localhost:3000/users/${value}`);
    window.location.assign("/users");
  };

  return (
    <div className={style.main}>
      {content.map((x) => {
        return (
          <div key={x.id} className={style.display}>
            <h1>User : {x.id}</h1>
            <h1>Name : {x.name}</h1>
            <h1>Salary : {x.salary}</h1>
            <h1>Compnay : {x.compnay}</h1>
            <Link to={`/edit/${x.id}`}>Edit</Link>
            <button
              onClick={() => {
                onDelet(x.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
