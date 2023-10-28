import { FC } from "react";
import "./Work.scss";
import { WorkItem } from "../WorkItem/WorkItem";

import wallet from "../../assets/icons/wallet.svg";
import collection from "../../assets/icons/collection.svg";
import start from "../../assets/icons/start.svg";

export interface IdataWork {
  url: string;
  title: string;
  descr: string;
}

export const Work: FC = () => {
  const data: IdataWork[] = [
    {
      url: wallet,
      title: "Setup Your wallet",
      descr:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      url: collection,
      title: "Create Collection",
      descr:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      url: start,
      title: "Start Earning",
      descr:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="work">
      <div className="work__container">
        <h2 className="work__title title">How it works</h2>
        <div className="work__descr descr">Find out how to get started</div>
        <div className="work__wrapper">
          {data.map((item) => {
            return <WorkItem data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
