import { useEffect, useState } from "react";
import SourceData from "../data.json";

const useApp = () => {
  const [companiesFiltered, setCompaniesFiltered] = useState([...SourceData]);
  const [filters, setFilters] = useState([]);
  const [dynamicClass, setDynamicClass] = useState("");

  const updateFilters = (filter) => {
    console.log("Update filters");
    // console.log(filter);
    setFilters(filter);
  };

  // useEffect(() => {
  //   const newClass = filters.length ? "-translate-y-[90px]" : "";
  //   setDynamicClass(newClass);
  // }, [filters]);

  return {
    setCompaniesFiltered,
    updateFilters,
    setFilters,
    setDynamicClass,
    companiesFiltered,
    filters,
    dynamicClass,
  };
};

export default useApp;
