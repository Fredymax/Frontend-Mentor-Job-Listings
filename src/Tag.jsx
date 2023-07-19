import React, { useContext } from "react";
import useApp from "./hooks/useApp";
import { AppContext } from "@/context/AppContext";

const Tag = ({ tags = [], type }) => {
  if (tags.filter((c) => Boolean(c)).length === 0) return;
  const { updateFilters } = useContext(AppContext);

  return (
    <React.Fragment>
      {tags.map((tagName, index) => (
        <span
          key={index}
          className="bg-light-grayish-cyan inline-block px-[9px] py-[2px] font-bold text-desaturated-dark-cyan rounded-sm cursor-pointer select-none"
          onClick={() => updateFilters(tagName)}
        >
          {tagName}
        </span>
      ))}
    </React.Fragment>
  );
};

export default Tag;
