import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";

const HomeCrud = () => {
  return (
    <section id={style.nav}>
      <Link className={style.links} to="/createusers">
        CREATE-USERS
      </Link>
      <Link className={style.links} to="/users">
        USERS
      </Link>
    </section>
  );
};

export default HomeCrud;
