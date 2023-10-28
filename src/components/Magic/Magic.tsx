import { FC, useState, useEffect } from "react";
import "./Magic.scss";

import logo from "../../assets/img/top__7.png";
import eye from "../../assets/icons/Eye.svg";
export const Magic: FC = () => {
  const initialTime: number = 60 * 60 * 60; // 60 часов в секундах
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const hours: number = Math.floor(timeLeft / 3600);
  const minutes: number = Math.floor((timeLeft % 3600) / 60);
  const seconds: number = timeLeft % 60;

  return (
    <div className="magic">
      <div className="magic__container">
        <div className="magic__content">
          <div className="magic__user">
            <img src={logo} alt="logo" />
            Shroomie
          </div>
          <h2 className="magic__title">Magic Mashrooms</h2>
          <button className="magic__btn">
            <img src={eye} alt="eye" />
            See NFT
          </button>
        </div>
        <div className="magic__timer">
          <h3 className="magic__timer-title">Auction ends in:</h3>
          <div className="magic__timer-time">
            <span>{hours.toString().padStart(2, "0")}</span>:
            <span>{minutes.toString().padStart(2, "0")}</span>:
            <span>{seconds.toString().padStart(2, "0")}</span>
          </div>
          <div className="magic__timer-title">
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
