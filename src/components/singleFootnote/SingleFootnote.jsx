import "./singleFootnote.css";

const SingleFootnote = ({ footnote }) => {
  const { title, published_date, source, section, abstract } = footnote;
  return (
    <div className="footnote">
      <div className="footnote-content">
        <small>{source}</small>
        <h4 className="title">{title}</h4>
        <p className="subtitle">{abstract}</p>
        <div className="details">
          <small>{published_date}</small>
          <br />
          <small>{section}</small>
        </div>
      </div>
    </div>
  );
};

export default SingleFootnote;
