import { FC } from "react";

import logo from "../../assets/icons/logo.svg";
import DS from "../../assets/icons/DiscordLogo.svg";
import YT from "../../assets/icons/YoutubeLogo.svg";
import TW from "../../assets/icons/TwitterLogo.svg";
import INST from "../../assets/icons/InstagramLogo.svg";

import "./Footer.scss";
export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <h2 className="footer__logo footer__title">
            <img src={logo} alt="logo" />
          </h2>
          <div className="footer__descr ">
            NFT marketplace UI created with Anima for Figma.
          </div>
          <div className="footer__descr ">Join our community</div>
          <div className="footer__social">
            <img src={DS} alt="DiscordLogo" className="footer__img" />
            <img src={YT} alt="YoutubeLogo" className="footer__img" />
            <img src={TW} alt="TwitterLogo" className="footer__img" />
            <img src={INST} alt="InstagramLogo" className="footer__img" />
          </div>
        </div>
        <div className="footer__item">
          <h2 className="footer__title">Explore</h2>
          <a className="footer__descr" href="#">
            Marketplace
          </a>
          <a className="footer__descr" href="#">
            Rankings
          </a>
          <a className="footer__descr" href="#">
            Connect a wallet
          </a>
        </div>
        <div className="footer__email">
          <h2 className="footer__title">Join our weekly digest</h2>
          <div className="footer__descr">
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <form className="footer__form" action="#">
            <input
              placeholder="Enter your email here"
              className="footer__input"
              type="text"
            />
            <button className="footer__btn">Subscribe</button>
          </form>
        </div>
        <div className="footer__copy">
          &copy; NFT Market. Use this template freely.
        </div>
      </div>
    </footer>
  );
};
