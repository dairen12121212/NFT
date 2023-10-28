import { FC } from "react";

import "./Promo.scss";

import Rocket from "../../assets/icons/RocketLaunch.svg";

import hero from "../../assets/img/hero.png";
import avatar from "../../assets/img/Avatar.png";

export const Promo: FC = () => {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Discover digital art & Collect NFTs</h1>
          <div className="promo__descr descr">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </div>
          <button className="promo__btn">
            <img src={Rocket} alt="rocket" />
            Get Started
          </button>
          <div className="promo__info">
            <div className="promo__item">
              240k+ <span>Total Sale</span>
            </div>
            <div className="promo__item">
              100k+<span>Auctions</span>
            </div>
            <div className="promo__item">
              240k+<span>Artists</span>
            </div>
          </div>
        </div>
        <div className="promo__preview">
          <img src={hero} alt="hero" />
          <div className="promo__bottom">
            <h2 className="promo__name">Space Walking</h2>
            <h2 className="promo__user">
              <img src={avatar} alt="avatar" />
              Animakid
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
