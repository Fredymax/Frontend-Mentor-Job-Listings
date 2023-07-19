import React from "react";
import Tag from "./Tag";

const defaultImage = "https://randomuser.me/api/portraits/men/78.jpg";

const CompanyCard = (props) => {
  return (
    <div className="company-card relative bg-white rounded-md p-5 pt-7 shadow-lg">
      <figure className="company-avatar absolute top-0 -translate-y-6">
        <img className="rounded-full" src={props.logo || defaultImage} alt="Photo" />
      </figure>
      <div>
        <div className="flex">
          <span className="text-sm font-bold text-desaturated-dark-cyan inline-block min-w-[93px]">
            {props.company || "Company Name"}
          </span>
          <div className="flex flex-wrap gap-[8px] items-center">
            {props.new && (
              <span className="text-xs h-[20px] leading-[23px] px-2 bg-desaturated-dark-cyan text-white uppercase rounded-full">
                New!
              </span>
            )}
            {props.featured && (
              <span className="text-xs h-[20px] leading-[23px] px-2 bg-very-dark-grayish text-white uppercase rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>
        <p className="text-xs font-bold py-[10px] text-very-dark-grayish">
          {props.position || "Job position"}
        </p>
        <div className="details text-dark-grayish-cyan flex gap-[10px]">
          <div>{props.postedAt || "Posted at"}</div>
          <div>{props.contract || "Contract"}</div>
          <div>{props.location || "Location"}</div>
        </div>
      </div>
      <hr className="divider  my-4" />
      <div className="company-tags flex-1 flex flex-wrap gap-4">
        <Tag tags={[props.role]} type="role" />
        <Tag tags={[props.level]} type="level" />
        <Tag tags={props.languages || []} type="languages" />
        <Tag tags={props.tools || []} type="tools" />
      </div>
    </div>
  );
};

export default CompanyCard;
