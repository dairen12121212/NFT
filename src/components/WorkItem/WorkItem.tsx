import { FC } from "react";
import { IdataWork } from "../Work/Work";

interface WorkProps {
  data: IdataWork;
}

export const WorkItem: FC<WorkProps> = ({ data }) => {
  return (
    <div className="work__item">
      <div className="work__img">
        <img src={data.url} alt="logo" />
      </div>
      <h3 className="work__item-title">{data.title}</h3>
      <div className="work__item-descr">{data.descr}</div>
    </div>
  );
};
