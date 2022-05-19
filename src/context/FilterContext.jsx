import { createContext, useReducer, useContext } from "react";
import { FilterReducer } from "../reducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [FilterState, FilterDispatch] = useReducer(FilterReducer, {
    byCategory: []
  });
  return (
    <FilterContext.Provider value={{ FilterState, FilterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };