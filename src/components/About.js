import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image
                    src="/static/img/about-me.jpg"
                    width={500}
                    height={500}
                    title="An image collage showing some recent photos i've clicked"
                    alt="An image collage showing some recent photos i've clicked"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me</h3>
              </div>
              <div className="about-text">
                <p>
                  As a committed Computer Science enthusiast, I've cultivated a diverse skill set 
                  that encompasses a variety of programming languages such as Python, Java, and Groovy,
                  to name a few. My proficiency extends to modern frameworks including React, Tensorflow,
                  and FastAPI. I'm adept at utilizing technologies like Git, Docker, and Jenkins to 
                  streamline processes and enhance performance. My experience ranges from backend 
                  development, employing databases like PostgreSQL and MySQL, to frontend endeavors, 
                  where I craft intuitive user experiences. Additionally, my time as a Teaching Assistant 
                  has honed my abilities in effective communication and mentoring. Outside of the professional realm, 
                  I'm an avid follower of football, a keen F1 racing enthusiast, and an engaged gamer, 
                  enriching my perspective and approach in the tech landscape.
                </p>
                <div className="about-icons justify-content-center social-icons">
                  <a href="https://github.com/sumerpunjabi" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.instagram.com/sumerpunjabi/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sumerpunjabi/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="mailto:sumerpunjabi1@gmail.com">
                    <i className="fa fa-envelope" />
                  </a>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#contact">
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separated" />
    </section>
  );
};
export default About;
