import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const sessionInit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={sessionInit} className="login-form">
        <label className="label-login">
          <input type="text" value={username} onChange={updateUsername} />
          <div className="label-text">Correo Electronico</div>
        </label>
        <label className="label-login">
          <input type="password" value={password} onChange={updatePassword} />
          <div className="label-text">Contraseña</div>
        </label>
        <button className="login-button" type="submit">
          Iniciar Sesión
        </button>
        <button className="sign-up-button" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};
export default Login;
