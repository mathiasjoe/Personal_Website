export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
        <img src="./img/bilde1.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            My name is Mathias Jørgensen, and I am a dedicated and curious 25-year-old from Hammerfest.
            </p>
            <p className="hero--section-description">
            Currently, I am pursuing a Master’s in Digital Infrastructure and Cybersecurity at the Norwegian
            University of Science and Technology (NTNU) in Trondheim. Previously, I earned a Bachelor’s
            degree in Computer Science from NTNU in Ålesund, focusing on application development (full
            stack).
            <br />
            <br />
            In my spare time, I enjoy playing golf and football. 
            </p>
          </div>
        </div>
      </section>
    );
  }