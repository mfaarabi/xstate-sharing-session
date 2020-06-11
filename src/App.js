import React, { useState } from "react";
import loginService from "./login-service";
import "./styles.css";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginService(data).then(alert);
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          required
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          onChange={handleInputChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default App;
