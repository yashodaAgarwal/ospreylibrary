import { useFilter, useServer } from "../../context";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

function CategoryList() {
  const { state, dispatch } = useServer();
  const { FilterDispatch } = useFilter();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");

        dispatch({ type: "savedata", payload: response.data.categories });
      } catch (error) {
        <div class="alert-items alert-danger ">
          <i class="fas fa-exclamation-triangle alert-icon"></i>
          Could Not Load Data
        </div>;
      }
    })();
  }, [dispatch]);
  return (
    <div className="categoryName">
      <Link
        to="/videos"
        onClick={() => FilterDispatch({ type: "Clear_Filter" })}
      >
        <div className="itemName">All</div>
      </Link>
      {state.categorydata.map((item) => {
        return (
          <Link
            to="/videos"
            onClick={() =>
              FilterDispatch({ type: "CATEGORY", payload: item.category })
            }
          >
            <div className="itemName" key={item._id}>{item.category}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryList;
