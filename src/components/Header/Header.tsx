import { FC } from "react";

import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/User.svg";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__links">
          <a className="header__link" href="#">
            Marketplace
          </a>
          <a className="header__link" href="#">
            Rankings
          </a>
          <a className="header__link" href="#">
            Connect a wallet
          </a>
          <button className="header__btn">
            <img src={user} alt="user" />
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
