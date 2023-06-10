import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import SingleTopStory from "../../components/singleTopStories/SingleTopStory";
import {
  selectFetchData,
  selectIsLoading,
  loadHomeTopStories,
} from "./homeTopStoriesSlice";

const HomeTopStories = () => {
  const homeTopStories = useSelector(selectFetchData);
  const isLoadingTopStories = useSelector(selectIsLoading);
  console.log("HOME...", homeTopStories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHomeTopStories());
  }, [dispatch]);
  return (
    <>
      {isLoadingTopStories && <Spinner />}
      {homeTopStories.results?.map((topStory) => (
        <Link to={topStory.url} key={topStory.uri}>
          <SingleTopStory topStory={topStory} />
        </Link>
      ))}
    </>
  );
};

export default HomeTopStories;

/* <section className="feed-all">
        <article className="feeds">
          
        </article>
        <article className="footnote">
          <HomeFootnote />
        </article>
      </section> */
