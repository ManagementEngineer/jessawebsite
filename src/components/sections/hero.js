import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Jessa Batuigas.</h2>;
  const three = (
    <>
      {/* <p>
      I'm a Registered Practical Nurse at {' '}
      <a href="https://www.uhn.ca/Medicine/About/General_Internal_Medicine" target="_blank" rel="noreferrer">
           Toronto General Hospital's
        </a>
      
      {' '} General Internal Medicine unit, committed to delivering comprehensive patient care since May 2022. 
      My role involves collaborating with a diverse healthcare team, conducting thorough assessments, and proficiently managing medical procedures. Prioritizing patient and colleague safety, 
      I excel in de-escalation techniques and possess the ability to think critically, predicting changes in patient status. Alongside my clinical work, 
      I contribute to nursing education by precepting students and demonstrate proficiency in Epic Systems documentation.    
      </p> */}
      <p>
      Welcome to my professional hub! I'm a dedicated Registered Practical Nurse passionate about delivering top-notch patient care at the bedside while exploring the world of nursing informatics. My journey is shaped by hands-on experience at <a href="https://www.uhn.ca/Medicine/About/General_Internal_Medicine" target="_blank" rel="noreferrer">
           Toronto General Hospital
        </a>, providing comprehensive care to medical and surgical patients, and facilitating smooth transitions in reactivation care at <a href="https://www.nygh.on.ca/RCC" target="_blank" rel="noreferrer">North York General Hospital</a>. 
      </p>
      
      <p>
      Currently enrolled in George Brown College's <a href="https://www.georgebrown.ca/programs/rpn-bridge-to-bscn-program-postgraduate-s442" target="_blank" rel="noreferrer">RPN to RN Bridging Program</a>, my commitment to ongoing learning and growth is intrinsic to my professional ethos. Driven by evidence-based practice and a fervor for improvement, I invite you to explore my dedication to evidence- based patient care and professional development plan. Thank you for visiting!
      </p>
    </>
  );
  const four = (
    <a
      className="email-link"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer">
      Check out my resume!
    </a>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
