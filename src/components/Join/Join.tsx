import { FC } from "react";
import "./Join.scss";

import astro from "../../assets/img/astronaut.png";
import letter from "../../assets/icons/letter.svg";

export const Join: FC = () => {
  return (
    <div className="join">
      <div className="join__container">
        <div className="join__img">
          <img src={astro} alt="astronaut" />
        </div>
        <div className="join__content">
          <h2 className="join__title title ">Join our weekly digest</h2>
          <div className="join__descr descr">
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <form className="join__form" action="#">
            <input
              className="join__input"
              type="text"
              placeholder="Enter your email here"
            />
            <button className="join__btn">
              <img src={letter} alt="letter" /> subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
