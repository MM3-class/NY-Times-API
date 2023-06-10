import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../components/spinner/Spinner";
import {
  selectFashionFootnote,
  selectFashionFootnoteIsLoading,
  loadFashionFootnote,
} from "./fashionFootnoteSlice";
import { Link } from "react-router-dom";
import SingleFootnote from "../../components/singleFootnote/SingleFootnote";
const FashionFootnote = () => {
  const fashionFootnote = useSelector(selectFashionFootnote);
  const isLoading = useSelector(selectFashionFootnoteIsLoading);
  const dispatch = useDispatch();
  console.log("FASHION_FOOTNOTE...", fashionFootnote);

  useEffect(() => {
    dispatch(loadFashionFootnote());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Spinner />}
      {fashionFootnote.results?.map((footnote) => (
        <Link to={footnote.url} key={footnote.url}>
          <SingleFootnote footnote={footnote} />
        </Link>
      ))}
    </>
  );
};

export default FashionFootnote;
