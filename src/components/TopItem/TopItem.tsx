import { FC } from "react";

interface Idata {
  logo: string;
  name: string;
  total: string;
  index: number;
}

export const TopItem: FC<Idata> = ({ logo, name, total, index }) => {
  return (
    <div className="top__item">
      <div className="top__index">{index}</div>
      <div className="top__logo">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="top__name">{name}</h2>
      <div className="top__total">
        <span>Total Sales:</span> {total}
      </div>
    </div>
  );
};
