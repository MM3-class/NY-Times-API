import { useDispatch, useSelector } from "react-redux";
import "../searchTerm/searchTerm.css";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm } from "./searchTerm";
import { loadSearchField } from "../searchField/searchField";

const SearchTerm = () => {
  const navigate = useNavigate();
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
    console.log(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      dispatch(setSearchTerm("world"));
    } else {
      dispatch(loadSearchField(searchTerm) || loadSearchField("world"));
      navigate("/search");
      dispatch(setSearchTerm(""));
      console.log("searchTerm", searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleChange}
          className="search-term"
          placeholder="Search for Topics, Sources and Articles"
        />
      </form>
    </div>
  );
};

export default SearchTerm;
