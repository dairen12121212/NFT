import { FC } from "react";

import { IDataDiscover } from "../Discover/Discover";

interface IDiscoverItem {
  data: IDataDiscover;
}

export const DiscoverItem: FC<IDiscoverItem> = ({ data }) => {
  return (
    <div className="discover__item">
      <div className="discover__bg">
        <img src={data.bgSrc} alt="bg" />
      </div>
      <div className="discover__info">
        <h3 className="discover__name">{data.name}</h3>
        <div className="discover__user">
          <img src={data.logoSrc} alt="avatar" />
          {data.user}
        </div>

        <div className="discover__price">
          <div className="discover__price-header">
            <span>Price</span> <span>Highest Bid</span>
          </div>
          <div className="discover__price-footer">
            <span>{data.price}</span> <span>{data.highest}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
