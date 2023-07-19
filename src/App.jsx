import React, { useContext } from "react";
import Filters from "@/Filters";
import CompanyCard from "@/CompanyCard";
import { AppContext } from "@/context/AppContext";

const App = () => {
  const { companiesFiltered, dynamicClass } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className="min-h-[calc(100vh-156px)] relative w-full top-[156px] py-14 px-6 bg-light-grayish-cyan">
        <div
          className={`transition-transform flex gap-14 flex-col max-w-[1110px] m-auto ${dynamicClass}`}
        >
          {dynamicClass && <Filters />}
          {companiesFiltered.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
