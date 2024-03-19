import heroImg from "./assets/hero.svg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Contentful is a headless content management system (CMS) that
            enables users to create, manage, and deliver digital content across
            various platforms and devices. Unlike traditional CMS platforms,
            Contentful decouples content creation and presentation, providing
            developers with a flexible API to deliver content anywhere it's
            needed.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
