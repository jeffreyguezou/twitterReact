import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const SearchComponent = () => {
  const [searchStyles, setSearchstyles] = useState("searchComponent");
  const searchFocusHandler = () => {
    setSearchstyles("searchComponent searchHighlighted");
  };
  const searchRemoveFocushandler = () => {
    setSearchstyles("searchComponent");
  };
  return (
    <div className={searchStyles}>
      <BsSearch />
      <input
        onFocus={searchFocusHandler}
        onBlur={searchRemoveFocushandler}
        className="searchInputBox"
        type="text"
      ></input>
    </div>
  );
};
export default SearchComponent;
