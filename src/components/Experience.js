import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const resumeData = [
    {
      id: 1,
      logoSrc: "/static/img/thumbs/uwindsor.png",
      title: "Teaching Assistant",
      company: (
        <a
          href="https://www.uwindsor.ca/science/computerscience/"
          target="_blank"
        >
          UWindsor, School of Computer Science
        </a>
      ),
      location: "Windsor, ON",
      date: "Sep 2023 - Dec 2023",
      time: "Part Time",
      description: (
        <>
          <ul>
            <li>
              <b>Mentored 100+ students</b> in <b>Software Engineering</b> Computer Science
              courses.
            </li>
            <li>
              Provided study guides, proctored exams, and addressed student
              queries.
            </li>
            <li>
              <b>Conducted</b> engaging <b>workshops</b> for over{" "}
              <b>200+ students</b> on programming tools such as <b>Prometheus</b>,{" "}
              <b>SQL</b>, <b>Operating Systems</b> and{" "}
              <b>Software Engineering</b> concepts.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      logoSrc: "/static/img/thumbs/cartrade.png",
      title: "Software Engineer Intern",
      company: (
        <a href="https://www.cartrade.com/" target="_blank">
          CarTrade.com
        </a>
      ),
      location: "Mumbai, India",
      date: "Jun 2023 - Aug 2023",
      time: "Full Time",
      description: (
        <>
          <ul>
            <li>
              Developed <b>Groovy</b> scripts to convert <b>Jenkins</b> freestyle jobs into
              pipelines using <b>XML configurations</b>
            </li>
            <li>
              Created <b>Python</b> scripts to backup Atlassian Data to AWS 
              using web-scraping and API’s
            </li>
            <li>
              Employed <b>C#, JavaScript,</b> and <b>HTML</b> to optimize the performance of 
              multiple micro-services by <b>45%</b>
            </li>
            <li>
              Developed a <b>Database Microservice</b> to view, store, filter 
              and retrieve data. Used by <b>100+</b> employees
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      logoSrc: "/static/img/thumbs/superblanks.png",
      title: "Full-stack Developer Intern",
      company: (
        <a href="https://www.superblanks.com/" target="_blank">
          Superblanks
        </a>
      ),
      location: "Windsor, ON",
      date: "May 2022 - Aug 2022",
      time: "Full Time",
      description: (
        <>
          <ul>
            <li>
              Designed and developed a real-time dashboard using <b>React.js</b> 
              and <b>Redux</b> to display website metrics
            </li>
            <li>
              Integrated <b>ML models</b> into a <b>recommendation system</b> for an 
              e-commerce platform using <b>TensorFlow</b>
            </li>
            <li>
              Developed <b>advanced SQL queries</b> and indexing strategies to speed up 
              data retrieval operations by <b>60%</b>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      logoSrc: "/static/img/thumbs/cartrade.png",
      title: "Software Engineer Intern",
      company: (
        <a href="https://www.cartrade.com/" target="_blank">
          CarTrade.com
        </a>
      ),
      location: "Mumbai, India",
      date: "Jun 2021 - Apr 2022",
      time: "Full Time",
      description: (
        <>
          <ul>
            <li>
              Developed custom <b>JWT</b> authorization and authentication <b>.NET micro-service </b> 
              using <b>C#</b>
            </li>
            <li>
              Created and deployed a service to upload data concurrently to <b>Prometheus </b>
              using <b>Go</b> and <b>Jenkins</b>
            </li>
            <li>
              Developed and employed a <b>custom unit testing</b> framework to thoroughly test 
              various micro-services
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [resumeCount, setResumeCount] = useState(3);
  const [hiddenExperiences, setHiddenExperiences] = useState(
    resumeData.length - resumeCount
  );

  const handleLoadMore = () => {
    const remainingExperiences = resumeData.length - resumeCount;
    const increment = Math.min(1, remainingExperiences);
    setResumeCount(resumeCount + increment);
    setHiddenExperiences(remainingExperiences - increment);
  };

  return (
    <>
      <section
        id="experience"
        data-nav-tooltip="Experience"
        className="pp-section pp-scrollable section counter pb-5"
      >
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeData.slice(0, resumeCount).map((experience) => (
              <div className="resume-row" key={experience.id}>
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xl-2">
                    <div className="rb-left">
                      <Image
                        src={experience.logoSrc}
                        alt="logo"
                        width={350}
                        height={350}
                      />
                    </div>
                  </div>
                  <div className="col-sm-9 col-md-9 col-xl-10">
                    <div className="rb-right">
                      <h6>{experience.title}</h6>
                      <label>
                        {experience.company} | {experience.location} |{" "}
                        {experience.date}
                      </label>
                      <div className="rb-time">{experience.time}</div>
                      {experience.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {hiddenExperiences > 0 && (
              <button
                id="text-btn"
                className="px-btn px-btn-outline load-more-btn"
                onClick={handleLoadMore}
              >
                <>
                  <i className="ti-angle-down"></i> Load More (
                  {hiddenExperiences})
                </>
              </button>
            )}
          </div>
        </div>
        <div className="pb-5"></div>
      </section>
    </>
  );
};

export default Experience;
