import React from "react";
import Carousel from "../components/Carousel";
import CopyEmail from "../components/CopyEmail";
import projectImgOne from "../images/AnywhereElseSS.png";
import projectImgTwo from "../images/triptych-thumbnail.png";
import projectImgThree from "../images/whatsapp-clone-thumbnail.png";

export default function Landing() {
  return (
    <div className="top-container">
      {/* Background Image */}
      <div className="background-image parallax bg1">
        <div className="greeting-wrapper">
          <div className="deconstructed">
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
            <div>BRENDAN HOWE</div>
          </div>
          <h2 className="subheading">Full Stack Web Developer</h2>
        </div>
      </div>
      {/* Content */}
      <section className="s2">
        <div className="main-container">
          <div id="about" className="about-wrapper">
            <div className="panel">
              <h2 style={{ textAlign: "center" }}>About Me</h2>
              <p className="about-text">
                Hello there, I'm Brendan. Experienced in gathering, analyzing
                and{" "}
                <strong>
                  compiling information from disparate resources into engaging
                  products
                </strong>
                . My background in the service industry, education and nonprofit
                radio informs my problem-solving approach of{" "}
                <strong>doing more with less</strong>.
              </p>
              <br />
              <p className="about-text">
                My interests have shifted into <strong>green technology</strong>
                . I am most interested in working with organizations actively
                involved in projects to{" "}
                <strong>make societies sustainable and equitable</strong>.
              </p>
              <br />
              <p className="about-text">
                I write, conduct, record, and produce interviews with innovators
                in business technology and the arts. I also play folk rock and
                go bouldering.
              </p>
              <h3 style={{ textAlign: "center" }}>Skills and Experience</h3>
              <p
                className="navigation"
                style={{ textAlign: "center", marginRight: "0" }}
              >
                <a
                  style={{ justifyContent: "center" }}
                  className="btn see-more"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/e/2PACX-1vQW8-BZqQHcBqGfEZSRdvBGjPKByURqKj2CvMGzb_u7NegpiE2wbXpIkRtgeETmWxseDX114jQ1p00M/pub"
                >
                  View Resume
                </a>
              </p>

              <div id="skills">
                <ul>
                  <li>Django</li>
                  <li>Python</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>HTML/CSS</li>
                </ul>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Postgres</li>
                  <li>SQL</li>
                  <li>Google Maps API</li>
                  <li>Google Analytics</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s1">
        <div id="projects" className="panel">
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <div className="post-wrapper">
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src={projectImgOne}
                  alt="project one"
                />
                <div className="post-preview">
                  <h4 className="post-title">Anywhere Else</h4>
                  <p className="post-intro">
                    A Django travel app with Three.js designed to get you
                    anywhere else.
                  </p>
                  <a
                    className="btn see-more"
                    href="https://anywhere-else-app.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src={projectImgTwo}
                  alt="project two"
                />
                <div className="post-preview">
                  <h4 className="post-title">Triptych</h4>
                  <p className="post-intro">
                    A full MERN stack customizable art gallery.
                  </p>
                  <a
                    className="btn see-more"
                    target="_blank"
                    rel="noreferrer"
                    href="https://react-triptych-ii.herokuapp.com/"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img
                  className="thumbnail"
                  src={projectImgThree}
                  alt="project three"
                />
                <div className="post-preview">
                  <h4 className="post-title">WhatsAppAgain</h4>
                  <p className="post-intro">
                    A full MERN stack WhatsApp clone utilizing Pusher for
                    simultaneous front-end updates of back-end info.
                  </p>
                  <a
                    className="btn see-more"
                    target="_blank"
                    rel="noreferrer"
                    href="https://6047c0ec433a710539ca1548--whatsapp-mern-frontend.netlify.app/"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="navigation">
                <a
                  className="btn see-more"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bhowe111"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="publications" className="s2">
          <h2 style={{ textAlign: "center" }}>Publications</h2>
          <Carousel />
        </section>
      </div>
      <section className="s1">
        <ul className="navigation" style={{ textAlign: "right" }}>
          <li>
            <a
              className="btn test-btn"
              href="https://www.linkedin.com/in/brendan-howe/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a className="btn test-btn" href="https://github.com/bhowe111">
              <i className="fab fa-github"></i>
            </a>
          </li>
          {/* <li>
            <CopyEmail />
          </li> */}
          <li>
            <p
              style={{
                textAlign: "center",
                fontSize: "small",
              }}
            >
              © Brendan Howe 2021
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
