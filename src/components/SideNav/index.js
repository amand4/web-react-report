import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Spacer from "react-spacer";
import home from "../../assets/home.svg";
import novolaudo from "../../assets/nlaudo.svg";
import meuslaudos from "../../assets/mlaudo.svg";
import conta from "../../assets/conta.svg";
import logout from "../../assets/logout.svg";
import "./styles.css";
import { ReactComponent as IconLogout } from "../../assets/logout.svg";
import { useAuth } from "../../hooks//AuthContext";

export default function SideMenu() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
  }
  return (
    <>
      <SideNav id="sdb" onSelect={(selected) => {}}>
        {" "}
        <Spacer height="20" />
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <a href="./dashboard">
                <img src={home} alt="home-ico"></img>
              </a>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          {/* <NavItem eventKey="novo-laudo">
            <NavIcon>
              <a href="./form">
                {" "}
                <img src={novolaudo} alt="novo-ico"></img>
              </a>
            </NavIcon>
            <NavText>Novo Laudo</NavText>
          </NavItem>
          <NavItem eventKey="meu-laudo">
            <NavIcon>
              <a href="./dashboard">
                <img src={meuslaudos} alt="ml-ico"></img>
              </a>
            </NavIcon>
            <NavText>Meus Laudos</NavText>
          </NavItem>
          <NavItem eventKey="conta">
            <NavIcon>
              <a href="./">
                <img src={conta} alt="user-ico"></img>
              </a>
            </NavIcon>
            <NavText>Conta</NavText>
          </NavItem> */}
          <NavItem eventKey="logout">
            <NavIcon onClick={handleSignOut}>
              <button className="btn-veiculo-logout" onClick={handleSignOut}>
                <IconLogout className="iconLogout"></IconLogout>
              </button>
            </NavIcon>
            <NavText>Sair</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}
