import UsFootnote from "../features/usFootnote/UsFootnote";
import UsTopStories from "../features/usTopStories/UsTopStories";
const Us = () => {
  return (
    <main className="home">
      <section className="feed-all">
        <article className="feeds">
          <UsTopStories />
        </article>
        <article className="footnote">
          <UsFootnote />
        </article>
      </section>
    </main>
  );
};

export default Us;
