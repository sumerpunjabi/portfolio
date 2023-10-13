const Skills = () => {
  return (
    <>
      <section className="pp-section pp-scrollable section counter" id="education">
        <div className="container skills">
          <div className="title">
            <h3>Education &amp; Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="education-box">
                <li>
                  <span>2021 - 2023</span>
                  <h6>Bachelor in Computer Science Honor's</h6>
                  <p>University of Windsor</p>
                </li>
                <li>
                  <span>2019 - 2021</span>
                  <h6>Bachelor of Science in Computer Science Honor's</h6>
                  <p>University of Toronto</p>
                </li>
                <li>
                  <span>2017-2019</span>
                  <h6>International Baccalaureate</h6>
                  <p>The Cathedral Vidya School</p>
                </li>
                <li>
                  <span>2007-2017</span>
                  <h6>Indian Certificate of Secondary Education</h6>
                  <p>Campion School</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <h3>My skills</h3>
                <p>
                  I possess a diverse and robust skill set cultivated from academic pursuits 
                  and real-world experiences in the tech landscape. With a strong foundation 
                  in both theoretical knowledge and practical application, I'm equipped to 
                  tackle challenges across various facets of software development. My abilities
                  extend beyond coding, encompassing effective communication, collaboration, 
                  and innovative problem-solving. Additionally, my eclectic interests outside 
                  of tech infuse creativity and a unique perspective into my work.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Languages</h5>
                    <ul>
                      <li>Python</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>C#</li>
                      <li>Go</li>
                    </ul>
                    <h5>Tools</h5>
                    <ul>
                      <li>Git</li>
                      <li>CI/CD</li>
                      <li>RESTful APIs</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Frameworks</h5>
                    <ul>
                      <li>React</li>
                      <li>Tensorflow</li>
                      <li>Node</li>
                      <li>Flask</li>
                      <li>Pytorch</li>
                    </ul>
                    <h5>Technologies</h5>
                    <ul>
                      <li>Docker</li>
                      <li>Jira</li>
                      <li>Postman</li>
                      <li>Unity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </section>
    </>
  );
};

export default Skills;
