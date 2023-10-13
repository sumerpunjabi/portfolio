const Contact = () => {
  return (
    <section
      id="contact"
      data-nav-tooltip="Contact"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contact me</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info d-flex">
              <div className="mx-auto">
                <h4>Let's connect.</h4>
                <p>
                From discussing the intricacies of tech to exchanging the latest memes, 
                I'm always up for a chat.
                </p>
                <ul>
                  <li className="media">
                    <i className="ti-map-alt" />
                    <span className="media-body">Ontario, Canada</span>
                  </li>
                  <li className="media">
                    <i className="ti-email" />
                    <span className="media-body">
                      <a href="mailto:sumerpunjabi1@gmail.com">sumerpunjabi1@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <div className="contact-icons justify-content-center social-icons">
                      <a href="https://github.com/sumerpunjabi" target="_blank">
                        <i className="fab fa-github" />
                      </a>
                      <a
                        href="https://www.instagram.com/sumerpunjabi/"
                        target="_blank"
                      >
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
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form d-flex">
              <div>
                <h4>Reach out!</h4>
                <p>
                Every missed opportunity starts with a conversation that never happened. 
                So, don't hesitate – reach out to me! Whether you're curious, have a 
                project in mind, or simply want to connect, I'm all ears. Let's start a dialogue!
                </p>
                <div className="btn-bar contact-cta d-flex">
                  <a
                    className="px-btn px-btn-theme"
                    href="mailto:sumerpunjabi1@gmail.com"
                  >
                    Send me an Email <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
