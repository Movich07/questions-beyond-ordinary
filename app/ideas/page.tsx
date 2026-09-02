import Link from "next/link";

export default function IdeasPage() {
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
          <a href="#">People</a>
          <a href="#">Society</a>
          <a href="#">Universe</a>
          <a href="#">Stories</a>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <div className="wrap category-listing-head">
        <div className="section-label">Category</div>
        <h1>Ideas</h1>
        <p className="deck">Philosophy, beliefs, consciousness, morality, and the questions underneath human nature.</p>
      </div>

      <section className="wrap category">
        <div className="category-grid">
          <div className="card lead">
            <div className="card-image"><img src="https://picsum.photos/id/1025/700/520" alt="" /></div>
            <div className="cat-tag">Ideas</div>
            <h4><Link href="/articles/is-this-real">Is this real?</Link></h4>
            <p>On the dream we keep pedaling, the rhythm we were born into, and the one we&apos;re quietly breaking.</p>
            <div className="card-foot">Kay Jefed · 3 min read</div>
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