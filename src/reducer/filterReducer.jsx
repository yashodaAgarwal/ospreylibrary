const FilterReducer = (state, action) => {
    switch (action.type) {
      case "CATEGORY":
        return {
          ...state,
          byCategory: action.payload,
        };
      case "Clear_Filter":
        return {
          byCategory: null,
        };
      default:
        return state;
    }
  };
  
  export default FilterReducer;