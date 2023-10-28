import { FC } from "react";

interface IDataProps {
  src: string;
  title: string;
  positionSrc: string;
}

export const CategoryItem: FC<IDataProps> = ({ title, src, positionSrc }) => {
  return (
    <div className="category__item">
      <img className="category__img" src={positionSrc} alt="item" />
      <div className="category__bg">
        <img src={src} alt="img" />
      </div>
      <div className="category__info">{title}</div>
    </div>
  );
};
