import { useSelector, useDispatch } from "react-redux";
import "../../app/App.css";
import {
  loadFashionTopStories,
  selectFashionData,
  selectIsLoading,
} from "./fashionTopStoriesSlice";
import { Link } from "react-router-dom";
import SingleTopStory from "../../components/singleTopStories/SingleTopStory";
import Spinner from "../../components/spinner/Spinner";
import { useEffect } from "react";

const FashionTopStories = () => {
  const dispatch = useDispatch();
  const fashionsTopStories = useSelector(selectFashionData);
  const isLoadingFashionTopStories = useSelector(selectIsLoading);
  console.log("FASHION...", fashionsTopStories);

  useEffect(() => {
    dispatch(loadFashionTopStories());
  }, [dispatch]);

  return (
    <>
      {isLoadingFashionTopStories && <Spinner />}
      <div className="header-home">
        <h2 className="briefing">{fashionsTopStories.section}</h2>
      </div>
      <section className="feed-all">
        <article className="feeds">
          {fashionsTopStories.results?.map((topStory) => (
            <Link to={topStory.url} key={topStory.url}>
              <SingleTopStory topStory={topStory} />
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default FashionTopStories;
