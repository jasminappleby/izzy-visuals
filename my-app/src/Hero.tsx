import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

    {/* Background image */}
    <div className="hero-bg"></div>

    {/* Glass overlay (THIS is the new one) */}
    <div className="hero-glass-overlay"></div>

    {/* Giant glass text */}
    <div className="hero-glass-text">
        IZZY<br/>VISUALS
    </div>

    {/* Player cutout overlay */}
    <img
        src="/images/sports/rugby/test2.png"
        alt="Player"
        className="hero-player"
    />

    {/* Bottom label */}
    <div className="hero-label">
        Photographer • Sports • Portraits
    </div>

    </section>

  );
}
