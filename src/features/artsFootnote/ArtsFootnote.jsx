import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadArtsFootnote,
  selectArtsFootnote,
  selectArtsFootnoteIsLoading,
} from "./artsFootnoteSlice";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import SingleFootnote from "../../components/singleFootnote/SingleFootnote";

function ArtsFootnote() {
  const isLoading = useSelector(selectArtsFootnoteIsLoading);
  const artsFootnote = useSelector(selectArtsFootnote);
  const dispatch = useDispatch();
  console.log("ARTS_FOOTNOTE", artsFootnote);

  useEffect(() => {
    dispatch(loadArtsFootnote());
  }, [dispatch]);
  return (
    <aside className="footnote-container">
      <h3>Pick up for you</h3>
      {isLoading && <Spinner />}
      {artsFootnote.results?.map((footnote) => (
        <Link to={footnote.url} key={footnote.uri} target="_blank">
          <SingleFootnote footnote={footnote} />
        </Link>
      ))}
    </aside>
  );
}

export default ArtsFootnote;
