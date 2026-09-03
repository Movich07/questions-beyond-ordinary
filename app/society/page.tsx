import Link from "next/link";

export default function SocietyPage() {
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
          <Link href="/people">People</Link>
          <a href="#" className="current">Society</a>
          <Link href="/universe">Universe</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <div className="wrap category-listing-head">
        <div className="section-label">Category</div>
        <h1>Society</h1>
        <p className="deck">Politics, culture, economics, communities, and the patterns that keep repeating.</p>
      </div>

      <section className="wrap category">
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1084/700/520" alt="" /></div>
            <div className="cat-tag">Society</div>
            <h4>Why crowds think differently from individuals</h4>
            <p>Put a hundred reasonable people in a room together and something strange happens to their reasoning.</p>
            <div className="card-foot">Kay Jefed · 7 min read</div>
          </div>
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