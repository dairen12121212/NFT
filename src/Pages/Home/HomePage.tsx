import { FC } from "react";
import { Header } from "../../components/Header/Header";
import { Promo } from "../../components/Promo/Promo";
import { Trend } from "../../components/Trend/Trend";
import { Top } from "../../components/Top/Top";
import { Category } from "../../components/Category/Category";
import { Discover } from "../../components/Discover/Discover";
import { Magic } from "../../components/Magic/Magic";
import { Work } from "../../components/Work/Work";
import { Join } from "../../components/Join/Join";
import { Footer } from "../../components/Footer/Footer";
export const HomePage: FC = () => {
  return (
    <div className="Home">
      <Header />
      <Promo />
      <Trend />
      <Top />
      <Category />
      <Discover />
      <Magic />
      <Work />
      <Join />
      <Footer />
    </div>
  );
};
