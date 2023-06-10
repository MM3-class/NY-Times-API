import { Link } from "react-router-dom";
import "./singleSearchArticle.css";

const SingleSearchArticle = ({ searchField }) => {
  const {
    web_url,
    headline,
    abstract,
    source,
    byline,
    section_name,
    pub_date,
  } = searchField;
  return (
    <section className="search-field">
      <div className="search-content">
        <Link to={web_url} target="_blank">
          <div className="search-description">
            <h3 className="search-title">{headline.main}</h3>
            <p className="search-details">{abstract}</p>
            <div className="category">
              Source: <span>{source}</span> <br />
              Section: <span>{section_name}</span> <br />
              <span>{byline.original}</span>
              <br />
              <span>{pub_date.slice(0, 10)}</span>
            </div>
          </div>
        </Link>
        <hr />
      </div>
    </section>
  );
};

export default SingleSearchArticle;
/*        <div className="feed-img">
        <img src={multimedia && multimedia[2].url} alt="avatar" />
      </div> */
