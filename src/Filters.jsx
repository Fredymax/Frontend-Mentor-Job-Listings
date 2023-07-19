import React, { useEffect, useContext } from "react";
import IconClose from "./Icons/Close";
import { AppContext } from "@/context/AppContext";

const Filters = () => {
  const { filters, resetFilters, removeFilter } = useContext(AppContext);

  return (
    <div className="flex bg-white rounded-md p-5 shadow-lg">
      <div className="bg-white flex-1 flex flex-wrap gap-4">
        {filters.map((tag, index) => (
          <div key={index} className="bg-light-grayish-cyan rounded-sm flex items-center">
            <span className="inline-block px-1 font-medium text-desaturated-dark-cyan">{tag}</span>
            <button
              className="p-1.5 bg-desaturated-dark-cyan rounded-r-sm h-6"
              onClick={() => removeFilter(tag)}
            >
              <IconClose />
            </button>
          </div>
        ))}
      </div>
      <div className="w-[50px]">
        <button
          className="filter-close w-max h-full px-2 font-medium text-dark-grayish-cyan"
          onClick={resetFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
