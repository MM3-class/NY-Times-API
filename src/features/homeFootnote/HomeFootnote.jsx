import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFootnoteData,
  selectFootnoteData,
  selectFootnoteIsLoading,
} from "./homeFootnote";
import Spinner from "../../components/spinner/Spinner";
import SingleFootnote from "../../components/singleFootnote/SingleFootnote";
import { Link } from "react-router-dom";

const HomeFootnote = () => {
  const footnotes = useSelector(selectFootnoteData);
  const isLoading = useSelector(selectFootnoteIsLoading);
  const dispatch = useDispatch();
  console.log("FOOTNOTES...", footnotes.results);
  useEffect(() => {
    dispatch(loadFootnoteData());
  }, [dispatch]);
  return (
    <aside className="footnote-container">
      <h3>Most Popular</h3>
      {isLoading && <Spinner />}
      {footnotes.results?.map((footnote) => (
        <Link to={footnote.url} key={footnote.uri} target="_blank">
          <SingleFootnote footnote={footnote} />
        </Link>
      ))}
    </aside>
  );
};

export default HomeFootnote;
