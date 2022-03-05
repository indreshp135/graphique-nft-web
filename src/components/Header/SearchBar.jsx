import React from "react";
import classes from "./Searchbar.module.css";

const SearchBar = ({dark}) => {
  return (
    <div className={classes.searchBar}>
      <svg
        className={classes.searchImg}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.7666"
          cy="9.76657"
          r="8.98856"
          stroke={dark?"#ffffff":"#24252D"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.0183 16.4851L19.5423 20"
          stroke="#24252D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input placeholder="Search Item here"/>
    </div>
  );
};

export default SearchBar;
