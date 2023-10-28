import { FC } from "react";

import "./Category.scss";
import { CategoryItem } from "../CategoryItem/CategoryItem";

import art from "../../assets/icons/art.svg";
import collectibles from "../../assets/icons/collectibles.svg";
import music from "../../assets/icons/music.svg";
import photo from "../../assets/icons/photo.svg";
import video from "../../assets/icons/video.svg";
import utility from "../../assets/icons/utility.svg";
import sport from "../../assets/icons/sport.svg";
import virtual from "../../assets/icons/virtual.svg";

import brash from "../../assets/icons/PaintBrush.svg";
import swatches from "../../assets/icons/Swatches.svg";
import musicNotes from "../../assets/icons/MusicNotes.svg";
import camera from "../../assets/icons/Camera.svg";
import videoCamera from "../../assets/icons/VideoCamera.svg";
import magic from "../../assets/icons/MagicWand.svg";
import basketball from "../../assets/icons/Basketball.svg";
import planet from "../../assets/icons/Planet.svg";

interface IData {
  src: string;
  positionSrc: string;
  title: string;
}

export const Category: FC = () => {
  const data: IData[] = [
    { src: art, title: "Art", positionSrc: brash },
    { src: collectibles, title: "Collectibles", positionSrc: swatches },
    { src: music, title: "Music", positionSrc: musicNotes },
    { src: photo, title: "Photography", positionSrc: camera },
    { src: video, title: "Video", positionSrc: videoCamera },
    { src: utility, title: "Utility", positionSrc: magic },
    { src: sport, title: "Sport", positionSrc: basketball },
    { src: virtual, title: "Virtual Worlds", positionSrc: planet },
  ];
  return (
    <div className="category">
      <div className="category__container">
        <h2 className="category__title title">Browse Categories</h2>
        <div className="category__wrapper">
          {data.map((item) => {
            return (
              <CategoryItem
                title={item.title}
                src={item.src}
                positionSrc={item.positionSrc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
