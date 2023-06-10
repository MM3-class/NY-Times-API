import { useSelector } from "react-redux";
import { selectIsLoadingSearch, selectSearchData } from "./searchField";
import Spinner from "../../components/spinner/Spinner";
import SingleSearchArticle from "../../components/singleSearchArticle/SingleSearchArticle";

const SearchField = () => {
  const searchField = useSelector(selectSearchData);
  const isLoading = useSelector(selectIsLoadingSearch);
console.log("SEARCH_FIELD", searchField)
  return (
    <section className="feed">
      {isLoading ? (
        <Spinner />
      ) : (
        searchField.response.docs?.map((article, index) => (
          <SingleSearchArticle key={index} searchField={article} />
        ))
      )}
    </section>
  );
};

export default SearchField;
/* 
<div className="feed-img" key={doc.uri}>
        <img src={doc.multimedia && doc.multimedia[0].url} alt="avatar" />
      </div>
*/
