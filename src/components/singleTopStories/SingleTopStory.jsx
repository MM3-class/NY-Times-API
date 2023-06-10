import "./singleTopStory.css";
const SingleTopStory = ({ topStory }) => {
  const { uri, multimedia, title, abstract, section, byline, updated_date } =
    topStory;
  return (
    <aside className="single-feed">
      <div className="feed-img-contain" key={uri}>
        <figure className="feed-img">
          <img src={multimedia && multimedia[0].url} alt="avatar" />
        </figure>
        <figcaption className="article-title">{title}</figcaption>
      </div>
      <div className="feed-description">
        <p className="article-details">{abstract}</p>
        <small className="category">
          Section: <span>{section}</span> <br />
          <span>{byline}</span>
          <br />
          <span>{`created date: ${updated_date.slice(0, 10)}`}</span>
        </small>
      </div>
    </aside>
  );
};

export default SingleTopStory;
