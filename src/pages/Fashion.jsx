import FashionTopStories from "../features/fashionTopStories/FashionTopStories";
import FashionFootnote from "../features/fashionFootnote/FashionFootnote.jsx";
const Fashion = () => {
  return (
    <main className="home">
      <section className="feed-all">
        <article className="feeds">
          <FashionTopStories />
        </article>
        <article className="footnote">
            <FashionFootnote />
        </article>
      </section>
    </main>
  );
};

export default Fashion;
