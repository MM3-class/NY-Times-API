import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsData, selectUsData, selectUsIsLoading } from './usTopStoriesSlice'
import Spinner from "../../components/spinner/Spinner"
import SingleTopStory from '../../components/singleTopStories/SingleTopStory'
import { Link } from 'react-router-dom'
const UsTopStories = () => {
    const isLoading = useSelector(selectUsIsLoading);
    const usTopStories = useSelector(selectUsData);
    const dispatch = useDispatch();
    console.log("US...", usTopStories)
    useEffect(() => {
        dispatch(loadUsData())
    }, [dispatch])
  return (
    <>
    {isLoading && <Spinner />}
    <div className="header-home">
      <h2 className="briefing">{`${usTopStories.section}`}</h2>
    </div>
    <section className="feed-all">
      <article className="feeds">
        {usTopStories.results?.map((topStory) => (
          <Link to={topStory.url} key={topStory.uri}>
            <SingleTopStory topStory={topStory} />
          </Link>
        ))}
      </article>
    </section>
  </>
  )
}

export default UsTopStories