import { FC } from "react";
import "./Top.scss";

import rocket from "../../assets/icons/RocketLaunch_purple.svg";
import logo1 from "../../assets/img/top__1.png";
import logo2 from "../../assets/img/top__2.png";
import logo3 from "../../assets/img/top__3.png";
import logo4 from "../../assets/img/top__4.png";
import logo5 from "../../assets/img/top__5.png";
import logo6 from "../../assets/img/top__6.png";
import logo7 from "../../assets/img/top__7.png";
import logo8 from "../../assets/img/top__8.png";
import logo9 from "../../assets/img/top__9.png";
import logo10 from "../../assets/img/top__10.png";
import logo11 from "../../assets/img/top__11.png";
import logo12 from "../../assets/img/top__12.png";

import { TopItem } from "../TopItem/TopItem";

interface ITopData {
  logo: string;
  name: string;
  total: string;
}

export const Top: FC = () => {
  const data: ITopData[] = [
    { logo: logo1, name: "Keepitreal", total: "34.53 ETH" },
    { logo: logo2, name: "DigiLab", total: "34.53 ETH" },
    { logo: logo3, name: "GravityOne", total: "34.53 ETH" },
    { logo: logo4, name: "Juanie", total: "34.53 ETH" },
    { logo: logo5, name: "BlueWhale", total: "34.53 ETH" },
    { logo: logo6, name: "mr fox", total: "34.53 ETH" },
    { logo: logo7, name: "Shroomie", total: "34.53 ETH" },
    { logo: logo8, name: "robotica", total: "34.53 ETH" },
    { logo: logo9, name: "RustyRobot", total: "34.53 ETH" },
    { logo: logo10, name: "animakid", total: "34.53 ETH" },
    { logo: logo11, name: "Dotgu", total: "34.53 ETH" },
    { logo: logo12, name: "Ghiblier", total: "34.53 ETH" },
  ];

  return (
    <div className="top">
      <div className="top__container">
        <header className="top__header">
          <div className="top__titles">
            <h2 className="top__title title">View Rankings</h2>
            <div className="top__descr descr">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
          <button className="top__button">
            <img src={rocket} alt="rocket" /> View Rankings
          </button>
        </header>

        <div className="top__wrapper">
          {data.map((item, i) => {
            return (
              <TopItem
                logo={item.logo}
                name={item.name}
                total={item.total}
                index={i + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
