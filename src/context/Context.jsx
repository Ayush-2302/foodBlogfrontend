import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const contextFun = createContext();

function Context(props) {
  const initialize = [];
  const [users, setUsers] = useState(initialize);
  const port = "https://foodblogbackend.onrender.com";

  const addUser = async (name, location, email, password) => {
    try {
      const response = await fetch(`${port}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location, email, password }),
      });
      const user = await response.json();
      console.log("user created", user);
    } catch (error) {
      console.log("error occured in backend");
    }
  };

  const login = async (email, password) => {
    try {
      console.log({ email, password });
      const response = await fetch(`${port}/api/auth/login `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        alert("loged In successfully");
      } else {
        alert("Invalid Details");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const f_data = async () => {
  
  };

  return (
    <contextFun.Provider value={{ users, addUser, login, f_data }}>
      {props.children}
    </contextFun.Provider>
  );
}
export default Context;
export { contextFun };
