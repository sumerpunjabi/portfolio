import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";

import web from "../assets/web.png";
import Github from "../assets/github.svg";

const Conteiner = styled(motion.div)`
  width: auto;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inconsolata", monospace;
  z-index: 99;
  overflow: hidden;
`;

export const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledProject = styled.div`
  width: 20rem;
  color: rgb(195, 195, 195);
  margin: 1.6rem;
`;

const Social = styled.img`
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin-top: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

const Projects = () => {
  return (
    <>
      <Conteiner
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {projects.map((exp, i) => {
          return (
            <ContainerSlideIn
              variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
              key={i}
            >
              <StyledProject style={{ marginBottom: 50 }}>
                <p style={{ fontSize: 11, fontWeight: 700, float: "right", marginTop: 10}}>
                  {exp.year}
                </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h3 style={{ fontWeight: 400 }}>• {exp.name}</h3>
                  <a href={exp.url} target="blank" style={{ marginLeft: 10 }}>
                    <Social src={Github} alt="Sumer's Github" />
                  </a>
                </div>
                <p style={{ fontWeight: 350 }}>{exp.projects}</p>
              </StyledProject>
            </ContainerSlideIn>
          );
        })}
      </Conteiner>
    </>
  );
};

export default Projects;
