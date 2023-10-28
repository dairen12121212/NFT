import { FC } from "react";
import "./Trend.scss";
import { TrendItem } from "../TrendItem/TrendItem";

import dog from "../../assets/img/dog.png";
import mushroom from "../../assets/img/mushroom.png";
import hero from "../../assets/img/hero__trend.png";
import avatar from "../../assets/img/Avatar.png";

interface IdataItem {
  name: string;
  user: string;
  src: string;
  count: number;
  avatar: string;
}

export const Trend: FC = () => {
  const data: IdataItem[] = [
    {
      name: "DSGN Animals",
      user: "MrFox",
      src: dog,
      count: 1025,
      avatar: avatar,
    },
    {
      name: "DSGN Animals",
      user: "MrFox",
      src: mushroom,
      count: 1025,
      avatar: avatar,
    },
    {
      name: "DSGN Animals",
      user: "MrFox",
      src: hero,
      count: 1025,
      avatar: avatar,
    },
  ];

  return (
    <div className="trend">
      <div className="trend__container">
        <h2 className="trend__title title">Trending Collection</h2>
        <div className="trend__descr descr">
          Checkout our weekly updated trending collection.
        </div>
        <div className="trend__wrapper">
          {data.map((item) => {
            return (
              <TrendItem
                name={item.name}
                user={item.user}
                src={item.src}
                count={item.count}
                avatar={item.avatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
