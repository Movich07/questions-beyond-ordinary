import Link from "next/link";

export default function UniversePage() {
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
          <a href="#" className="current">Ideas</a>
          <Link href="/people">People</Link>
          <Link href="/society">Society</Link>
          <Link href="/universe">Universe</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <div className="wrap category-listing-head">
        <div className="section-label">Category</div>
        <h1>Universe</h1>
        <p className="deck">Science, astronomy, extraterrestrial life, and the questions the cosmos hasn&apos;t answered yet.</p>
      </div>

      <section className="wrap category">
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1069/700/520" alt="" /></div>
            <div className="cat-tag">Universe</div>
            <h4>What if we are not the first civilization to look at the stars?</h4>
            <p>For as long as we&apos;ve had names for the constellations, we&apos;ve assumed we were the first to give them one.</p>
            <div className="card-foot">Amara Osei · 9 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1043/500/400" alt="" /></div>
            <div className="cat-tag">Universe</div>
            <h4>Are we alone in the universe?</h4>
            <div className="card-foot">7 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1054/500/400" alt="" /></div>
            <div className="cat-tag">Universe</div>
            <h4>The strange problem of the great silence</h4>
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