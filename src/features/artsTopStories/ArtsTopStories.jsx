import { useSelector, useDispatch } from "react-redux";
import {
  loadArtsTopStories,
  selectArts,
  selectIsLoading,
} from "./artsTopStories";
import Spinner from "../../components/spinner/Spinner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SingleTopStory from "../../components/singleTopStories/SingleTopStory";

const ArtsTopStories = () => {
  const dispatch = useDispatch();
  const arts = useSelector(selectArts);
  const isLoading = useSelector(selectIsLoading);
  console.log("ART's...", arts);
  
  useEffect(() => {
    dispatch(loadArtsTopStories());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="header-home">
        <h2 className="briefing">{arts.section}</h2>
      </div>
      <section className="feed-all">
      <article className="feeds">
          {arts.results?.map((topStory) => (
            <Link key={topStory.url} to={topStory.url}>
                <SingleTopStory topStory={topStory}/>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default ArtsTopStories;
