import "../css/styles.css";
import photo from "../images/female.jpg";

export function Intro() {
  return (
    <div>
      <section className="intro" id="about">
        <img src={photo} alt="female" loading="lazy" class="hero-img" />

        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">Welcome!</h2>
          <p className="bio-text">
            This is my personal website. You can visit the links
            above to learn more about me and my work. Happy navigation!
          </p>
        </div>
      </section>
    </div>
  );
}
