import { FC } from "react";

interface ITrendItem {
  name: string;
  user: string;
  src: string;
  count: number;
  avatar: string;
}

export const TrendItem: FC<ITrendItem> = ({
  name,
  user,
  src,
  count,
  avatar,
}) => {
  return (
    <div className="trend__item">
      <div className="trend__imgs">
        <div className="trend__img trend__img_main">
          <img src={src} alt="dog" />
        </div>
        <div className="trend__img ">
          <img src={src} alt="dog" />
        </div>
        <div className="trend__img ">
          <img src={src} alt="dog" />
        </div>
        <div className="trend__more">{count}+</div>
      </div>
      <div className="trend__info">
        <h3 className="trend__name">{name}</h3>
        <div className="trend__user">
          <img src={avatar} alt="avatar" />
          {user}
        </div>
      </div>
    </div>
  );
};
