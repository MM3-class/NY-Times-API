import { useSelector, useDispatch } from "react-redux";
import {
  loadUsFootnote,
  selectUsFootnote,
  selectUsFootnoteIsLoading,
} from "./usFootnoteSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import SingleFootnote from "../../components/singleFootnote/SingleFootnote";

const UsFootnote = () => {
  const isLoading = useSelector(selectUsFootnoteIsLoading);
  const usFootnote = useSelector(selectUsFootnote);
  const dispatch = useDispatch();
  console.log("US_FOOTNOTE", usFootnote);

  useEffect(() => {
    dispatch(loadUsFootnote());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Spinner />}
      {usFootnote.results?.map((footnote) => (
        <Link to={footnote.url} key={footnote.url}>
          <SingleFootnote footnote={footnote} />
        </Link>
      ))}
    </>
  );
};

export default UsFootnote;
