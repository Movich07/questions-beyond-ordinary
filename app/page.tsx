import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-top">
          <div className="brand">Questions Beyond <span>the Ordinary</span></div>
          <div className="masthead-icons">
            <div className="icon-btn">⚲</div>
            <div className="icon-btn">◐</div>
            <div className="btn-primary" style={{ padding: "10px 20px" }}>Subscribe</div>
          </div>
        </div>
        <nav>
          <a href="#" className="current">Home</a>
          <Link href="/ideas">Ideas</Link>
          <Link href="/people">People</Link>
          <Link href="/society">Society</Link>
          <Link href="/universe">Universe</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
      </nav>
      </header>

      <section className="wrap hero">
        <div>
          <div className="hero-eyebrow">A journal for the still-curious</div>
          <h1>Some questions are worth more than their answers.</h1>
          <p>We explore ideas about humanity, society, history, science, and the universe — and the strange possibilities that live just beyond what we already know.</p>
          <div className="hero-ctas">
            <div className="btn-primary">Explore the journal</div>
            <div className="btn-secondary">Read the latest</div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://picsum.photos/id/1039/900/1100" alt="" />
          <div className="hero-visual-caption">Photograph — an unnamed observatory, somewhere north</div>
        </div>
      </section>

      <section className="wrap featured">
        <div className="section-label">Featured — the universe</div>
        <div className="featured-grid">
          <div className="featured-image">
            <img src="https://picsum.photos/id/1069/900/620" alt="" />
          </div>
          <div>
            <div className="featured-meta">
              <span>The Universe</span><span className="dot">·</span>
              <span>9 min read</span><span className="dot">·</span>
              <span>Aug 27, 2026</span>
            </div>
            <h2>What if we are not the first civilization to look at the stars?</h2>
            <p>For as long as we&apos;ve had names for the constellations, we&apos;ve assumed we were the first to give them one. But the universe is old — old enough that the silence we hear may not be emptiness. It may be aftermath.</p>
            <div className="featured-byline">By Amara Osei</div>
            <Link href="/articles/is-this-real" className="featured-read">Read the article</Link>
          </div>
        </div>
      </section>
            <section className="wrap category">
        <div className="category-head">
          <h3>Ideas</h3>
          <a href="#">All ideas</a>
        </div>
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1025/700/520" alt="" /></div>
            <div className="cat-tag">Ideas</div>
            <h4>Why humans need something to believe in</h4>
            <p>Belief isn&apos;t a failure of reason. For most of history, it&apos;s been the thing reason was built on top of.</p>
            <div className="card-foot">Tomiwa Bello · 7 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1015/500/400" alt="" /></div>
            <div className="cat-tag">Ideas</div>
            <h4>Are we actually free to make our own choices?</h4>
            <div className="card-foot">6 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1003/500/400" alt="" /></div>
            <div className="cat-tag">Ideas</div>
            <h4>What happens when nobody is watching?</h4>
            <div className="card-foot">5 min read</div>
          </div>
        </div>
      </section>

      <section className="wrap category">
        <div className="category-head">
          <h3>Society</h3>
          <a href="#">All society</a>
        </div>
        <div className="category-grid">
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1048/500/400" alt="" /></div>
            <div className="cat-tag">Society</div>
            <h4>Why societies repeat the mistakes they swore they&apos;d never make</h4>
            <div className="card-foot">8 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1074/500/400" alt="" /></div>
            <div className="cat-tag">Society</div>
            <h4>When does a government lose the trust of its people?</h4>
            <div className="card-foot">6 min read</div>
          </div>
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1084/700/520" alt="" /></div>
            <div className="cat-tag">Society</div>
            <h4>Why crowds think differently from individuals</h4>
            <p>Put a hundred reasonable people in a room together and something strange happens to their reasoning.</p>
            <div className="card-foot">Kay Jefed · 7 min read</div>
          </div>
        </div>
      </section>

      <section className="stories">
        <div className="wrap stories-grid">
          <div>
            <div className="section-label">From the stories desk</div>
            <h3>The last person on earth receives a message.</h3>
            <div className="stories-quote">&quot;You were expected.&quot;</div>
            <p className="desc">Original fiction and thought experiments — using invented worlds to ask real questions about the one we&apos;re already living in.</p>
            <div className="hero-ctas" style={{ marginTop: "28px" }}>
              <div className="btn-secondary" style={{ borderColor: "var(--ivory)" }}>Read the story</div>
            </div>
          </div>
          <div className="stories-image">
            <img src="https://picsum.photos/id/1060/700/540" alt="" />
          </div>
        </div>
      </section>

      <section className="wrap newsletter">
        <div className="kicker">Stay curious</div>
        <h3>One thoughtful question, delivered to your inbox every week.</h3>
        <p>No noise, no endless notifications — just ideas worth thinking about.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </section>

      <footer>
        <div className="wrap footer-bottom">
          <div>© 2026 Questions Beyond the Ordinary. All rights reserved.</div>
          <div className="footer-social">
            <span>Instagram</span><span>X</span><span>Facebook</span><span>YouTube</span>
          </div>
        </div>
      </footer>
    </>
  );
}