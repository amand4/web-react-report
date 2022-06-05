import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.svg";
import "./styles.css";
import { useAuth } from "../../hooks/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    await signIn({ name, password })
      .then((response) => {
        toast.success("Logado com sucesso");
      })
      .catch((err) => {
        toast.error(
          "Usário ou senha inválida! Tente novamente com outras credênciais"
        );
      });
  }
  if (signIn) {
    localStorage.clear();
  }

  return (
    <div className="container-login text-center ">
      <img src={logo} id="logo-login" alt="Logo" />

      <form onSubmit={handleSubmit}>
        <div className="form-login">
          <label id="password">
            <input
              size={85}
              className="login"
              type="name"
              id="name"
              required
              placeholder="perito"
              onChange={(event) => setname(event.target.value)}
              value={name}
            />
          </label>
          <label>
            <input
              className="login"
              type="password"
              required
              id="password"
              placeholder="******"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </label>
          <div>
            {" "}
            <button className="btn btn-lg" type="submit">
              ENTRAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
