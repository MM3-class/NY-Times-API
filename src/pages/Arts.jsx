import ArtsFootnote from "../features/artsFootnote/ArtsFootnote";
import ArtsTopStories from "../features/artsTopStories/ArtsTopStories.jsx";

function Arts() {
  return (
    <main className="home">
      <section className="feed-all">
        <article className="feeds">
          <ArtsTopStories />
        </article>
        <article className="footnote">
          <ArtsFootnote />
        </article>
      </section>
    </main>
  );
}

export default Arts;
