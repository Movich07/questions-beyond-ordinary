import Link from "next/link";

export default function PeoplePage() {
  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-top">
          <Link href="/" className="brand">Questions Beyond <span>the Ordinary</span></Link>
          <div className="masthead-icons">
            <div className="icon-btn">⚲</div>
            <div className="icon-btn">◐</div>
            <div className="btn-primary" style={{ padding: "10px 20px" }}>Subscribe</div>
          </div>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/ideas">Ideas</Link>
          <a href="#" className="current">People</a>
          <Link href="/society">Society</Link>
          <Link href="/universe">Universe</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <div className="wrap category-listing-head">
        <div className="section-label">Category</div>
        <h1>People</h1>
        <p className="deck">Profiles and stories about extraordinary people, and what they understood that most of us miss.</p>
      </div>

      <section className="wrap category">
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1005/700/520" alt="" /></div>
            <div className="cat-tag">People</div>
            <h4>The people who changed the way we see the world</h4>
            <p>Some lives don&apos;t just leave a mark on history — they change the lens the rest of us look through.</p>
            <div className="card-foot">8 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1011/500/400" alt="" /></div>
            <div className="cat-tag">People</div>
            <h4>What great leaders understood about human nature</h4>
            <div className="card-foot">7 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1027/500/400" alt="" /></div>
            <div className="cat-tag">People</div>
            <h4>The quiet lives behind extraordinary achievements</h4>
            <div className="card-foot">6 min read</div>
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