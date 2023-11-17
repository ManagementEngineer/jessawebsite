import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--cyber_light);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--cyber_yellow);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--cyber_dark);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--cyber_yellow);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['PowerBI', 'Python', 'SQL', 'VBA', 'Pandas', 'Scikit-learn', 'Tensorflow', 'Pytorch'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            I have a genuine interest in data analysis and engineering. 
            The blend of my technical skills and passion for using data to make informed decisions naturally brings me to this space. 
            I find the process of extracting valuable insights and setting up reliable data pipelines not just professionally intriguing but personally captivating. 
            I'm dedicated to expanding my knowledge in these areas, always exploring new tools and staying updated with industry trends to make meaningful contributions to data-driven initiatives.
            </p>

            <p>
              Since my first co-op, and I’ve had the privilege of working at{' '}
              <a href="https://clearbridgemobile.com//">a mobile app development company</a>,{' '}
              <a href="https://www.loblaw.ca/">the largest supply chain in Canada</a>,{' '}
              <a href="https://www.york.ca/">a thriving municipality</a>, {' '}
              <a href="https://www.toyota.com/usa/operations/">the largest car manufacturer in the world</a>, {' '}
              <a href="https://www.ttc.ca/">one of the busiest transportation in NA</a>, {' '}
              <a href="https://www.amazon.com/">a huge company</a>, {' '}
              and{' '}
              <a href="https://www.jcelectrofields.biz/AboutUs/CompanyProfile">a company that is dear to me</a>. Currently, my main focus is on enhancing my data analytics and machine learning skills at <a href="https://www.georgebrown.ca/programs/applied-ai-solutions-development-program-postgraduate-t431">George Brown</a> seeking a job at a company that aligns with my strengths.
            </p>

            <p>
              I also {' '}
              <a href="https://www.fantasyleaguelottery.com/">
                launched a website
              </a>{' '}
              that helps fantasy league commissioners to conduct unbiased lotteries for their draft.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
