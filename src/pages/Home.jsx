import HomeTopStories from '../features/homeTopStories/HomeTopStories'
import HomeFootnote from '../features/homeFootnote/HomeFootnote.jsx'

const Home = () => {
  return (
    <main className="home">
      <div className="header-home">
        <h2 className="briefing">Your briefing</h2>
      </div>
      <section className="feed-all">
        <article className="feeds">
          <HomeTopStories />
        </article>
        <article className="footnote">
          <HomeFootnote />
        </article>
      </section>
    </main>
  )
}

export default Home