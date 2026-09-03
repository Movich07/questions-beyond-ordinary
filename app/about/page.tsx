import Link from "next/link";

export default function About() {
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
          <Link href="/stories">Stories</Link>
          <a href="#" className="current">About</a>
        </nav>
      </header>

      <div className="read about-body">
        <div className="section-label">About the journal</div>
        <h1>Questions Beyond the Ordinary</h1>
        <p className="deck">Question what you know. Explore what you don&apos;t.</p>

        <p>Questions Beyond the Ordinary exists for people who are still curious.</p>
        <p>We explore the questions hiding underneath everyday life — from why civilizations rise and fall to whether humanity is alone in the universe.</p>
        <p>We don&apos;t promise simple answers.</p>
        <p className="closing-line">We ask better questions.</p>
      </div>

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