import { FC } from "react";

import "./Discover.scss";

import eye from "../../assets/icons/Eye.svg";
import { DiscoverItem } from "../DiscoverItem/DiscoverItem";

import galaxy from "../../assets/img/galaxy.png";
import galaxyLogo from "../../assets/img/galaxy__logo.png";
import life from "../../assets/img/life.png";
import lifeLogo from "../../assets/img/life__logo.png";
import astro from "../../assets/img/astro.png";
import astroLogo from "../../assets/img/astro__logo.png";

export interface IDataDiscover {
  bgSrc: string;
  logoSrc: string;
  name: string;
  user: string;
  price: string;
  highest: string;
}

export const Discover: FC = () => {
  const data: IDataDiscover[] = [
    {
      bgSrc: galaxy,
      logoSrc: galaxyLogo,
      name: "Distant Galaxy",
      user: "MoonDancer",
      price: "1.63 ETH",
      highest: "0.33 wETH",
    },
    {
      bgSrc: life,
      logoSrc: lifeLogo,
      name: "Life On Edena",
      user: "NebulaKid",
      price: "1.63 ETH",
      highest: "0.33 wETH",
    },
    {
      bgSrc: astro,
      logoSrc: astroLogo,
      name: "AstroFiction",
      user: "Spaceone",
      price: "1.63 ETH",
      highest: "0.33 wETH",
    },
  ];

  return (
    <div className="discover">
      <div className="discover__container">
        <header className="discover__header">
          <div className="discover__titles">
            <h2 className="discover__title title">Discover More NFTs</h2>
            <div className="discover__descr descr">
              Explore new trending NFTs
            </div>
          </div>
          <button className="discover__btn">
            <img src={eye} alt="" />
            See All
          </button>
        </header>
        <div className="discover__wrapper">
          {data.map((item) => {
            return <DiscoverItem data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
