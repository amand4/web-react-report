import React from "react";
import logo from "../../assets/Logo.svg";
import "./styles.css";
import { useAuth } from "../../hooks//AuthContext";
import { ReactComponent as IconLogout } from "../../assets/logout.svg";

export default function Header() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
  }
  return (
    <div className="header-bar">
      <div className="content">
      <a href="./dashboard/">
        <img src={logo} id="logo-header" alt="Logo" />
      </a>
      <button className="btn-veiculo-logout" onClick={handleSignOut}>
        <IconLogout className="iconLogout"></IconLogout>
        sair
      </button>
    </div>
    </div>
  );
}
