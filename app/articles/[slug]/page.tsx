export default function ArticlePage() {
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
          <a href="/">Home</a>
          <a href="#" className="current">Ideas</a>
          <a href="#">People</a>
          <a href="#">Society</a>
          <a href="#">Universe</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
        </nav>
      </header>

      <div className="read article-header">
        <div className="breadcrumb"><a href="#">Ideas</a> / Is this real?</div>
        <h1>Is this real?</h1>
        <p className="deck">On the dream we keep pedaling, the rhythm we were born into, and the one we&apos;re quietly breaking.</p>
        <div className="byline-row">
          <div className="avatar">KJ</div>
          <div className="byline-text">
            <div className="name">Kay Jefed</div>
            <div className="byline-meta">
              <span>Ideas</span><span>3 min read</span><span>Aug 30, 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="https://picsum.photos/id/1018/1400/700" alt="" />
      </div>
      <div className="hero-caption">Photograph — a river, still keeping its own time.</div>

      <div className="read body-copy">
        <p className="lede">How crazy a dream can we pedal. Can you make it happen with the least effort on the part of the consumer — a question that sounds like it belongs to marketing, until you realize it&apos;s the question underneath most of what we build, want, and chase.</p>
        <p>We are all so totally different, and yet we are the same. The blood that flows through our veins is pumped by our heart, fed by oxygen, hydrated by clean water, loved by a mother and a father.</p>
        <blockquote>We hide from the stars. We celebrate the returning patterns of season, and yet we are disrupting it.</blockquote>
        <p>Long ago, mankind did not have the power to disrupt the cyclic nature of the earth within the cosmos. But now we totter on the edge of destroying the rhythm of life itself.</p>
        <p className="closing-line">Is this real?</p>
      </div>
    </>
  );
}