import React, { useState, createContext, useEffect } from "react";
import SourceData from "../data.json";

const SourceDataNormalize = SourceData.map((c) => ({
  ...c,
  indexed: [c.role, c.level, ...c.languages, ...c.tools],
}));

export const AppContext = createContext(null);

const AppWrapper = ({ children }) => {
  const [companiesFiltered, setCompaniesFiltered] = useState([...SourceDataNormalize]);
  const [filters, setFilters] = useState([]);
  const [dynamicClass, setDynamicClass] = useState("");

  const updateFilters = (filter) => {
    setFilters((prev) => {
      const existsFilter = prev.some((value) => value.toLowerCase() == filter.toLowerCase());
      if (existsFilter) return prev;
      return [...prev, filter];
    });
  };

  const removeFilter = (tag) => {
    setFilters((prev) => prev.filter((c) => c !== tag));
  };

  const resetFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    setDynamicClass(() => (!!filters.length ? "-translate-y-[90px]" : ""));
    if (!!filters.length) {
      const _filtered = SourceDataNormalize.filter(
        (c) => !!c.indexed.filter((x) => filters.includes(x)).length
      );
      setCompaniesFiltered(_filtered);
    } else {
      setCompaniesFiltered([...SourceDataNormalize]);
    }
  }, [filters]);

  const value = {
    updateFilters,
    resetFilters,
    removeFilter,
    filters,
    dynamicClass,
    companiesFiltered,
  };

  return (
    <React.Fragment>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </React.Fragment>
  );
};

export default AppWrapper;
