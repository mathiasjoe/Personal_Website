import { Link } from "react-scroll";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Mathias Jørgensen</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">MSc. Student</span>{" "}
              <br />
              Digital Infrastructure and CyberSecurity
            </h1>
            <p className="hero--section-description">
              My name is Mathias Jørgensen and I am a MSc. student in Digital Infrastructure and CyberSecurity at NTNU.
              <br /> I am passionate about technology and I am always looking for new opportunities to learn and grow. I am currently looking for a student job or internship in the IT industry.
            </p>
          </div>

          <Link spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact">
          <button className="btn btn-primary">Get In Touch</button>
          </Link>       
        </div>
        <div className="hero--section--img">
          <img src="./img/mathias_jørgensen.png" alt="Hero Section" />
        </div>
      </section>
    );
  }