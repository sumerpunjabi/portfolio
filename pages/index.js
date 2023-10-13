import Image from "next/image";
import Layout from "@/layouts/Layout";
import ParticlesBackground from "@/components/ParticlesBackground";
import TypingAnimation from "@/components/TypingAnimation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h1 className="font-alt">Sumer Punjabi</h1>
                  <p className="lead">
                    {" "}
                    <span>
                      <TypingAnimation />
                    </span>
                  </p>
                  <p className="desc">
                    Upcoming Software Engineering Grad and dynamic Computer Science enthusiast
                    from the University of Windsor, with a flair for developing efficient and 
                    innovative software solutions. Skilled in a wide array of languages from Python to Groovy.
                  </p>
                  <div className="btn-bar">
                    <a
                      id="text-btn"
                      className="px-btn px-btn-theme"
                      href="/static/Sumer_Punjabi_Resume.pdf"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img d-flex">
                  <Image
                    className="mx-auto my-auto"
                    width={600}
                    height={800}
                    src="/static/img/feature-image.jpg"
                    title="Me"
                    alt="Sumer Punjabi"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Gallery />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Index;
