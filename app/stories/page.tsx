import Link from "next/link";

export default function StoriesPage() {
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
          <Link href="/society">Society</Link>
          <Link href="/universe">Universe</Link>
          <a href="#" className="current">Stories</a>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <div className="wrap category-listing-head">
        <div className="section-label">Category</div>
        <h1>Stories</h1>
        <p className="deck">Original fiction and thought experiments — using invented worlds to ask real questions.</p>
      </div>

      <section className="wrap category">
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1060/700/520" alt="" /></div>
            <div className="cat-tag">Stories</div>
            <h4>The last person on earth receives a message</h4>
            <p>The message contains only three words: &quot;You were expected.&quot;</p>
            <div className="card-foot">6 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1039/500/400" alt="" /></div>
            <div className="cat-tag">Stories</div>
            <h4>Can artificial intelligence understand meaning?</h4>
            <div className="card-foot">7 min read</div>
          </div>
          <div className="card">
            <div className="card-image"><img src="https://picsum.photos/id/1080/500/400" alt="" /></div>
            <div className="cat-tag">Stories</div>
            <h4>Why history keeps repeating itself</h4>
            <div className="card-foot">5 min read</div>
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