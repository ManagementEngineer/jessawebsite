import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const Jobs = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Professional Development Plan</h2>

      <div>
        <h3 style={{ color: '#F3E600' }}>Goal 1</h3>
        <p>Complete RPN to RN Bridging Program</p>
        <br />

        <h4>Objective:</h4>

        <p>Become a Registered Nurse by July 2026.</p>

        <h4>Action Steps:</h4>
        <ul>
          <li>
            Enroll in an accredited RN bridging program by September 2023. – completed September 1,
            2023
          </li>
          <li>
            Attend classes regularly and actively participate in discussions and practical sessions.
          </li>
          <li>Allocate dedicated study time each day to ensure understanding of coursework.</li>
          <li>
            Seek assistance from professors or tutors when facing challenges in specific subjects.
          </li>
        </ul>

        <h4>Timeline:</h4>
        <p>Complete the RPN to RN bridging program by June 2026.</p>

        <h3 style={{ color: '#F3E600' }}>Goal 2</h3>
        <p>Explore interest in Nursing Informatics</p>
        <br />

        <h4>Objective:</h4>

        <p>
          Gain practical experience and exposure to nursing informatics principles and practices.
        </p>

        <h4>Action Steps:</h4>
        <ul>
          <li>
            Pursue internships or part-time positions in healthcare settings that offer exposure to
            nursing informatics by December 2024.
          </li>
          <li>
            Seek mentorship from RNs or professionals working in nursing informatics to gain
            insights and guidance.
          </li>
          <li>
            Attend workshops, webinars, and conferences related to nursing informatics to stay
            updated on industry trends and practices.
          </li>
          <li>
            Volunteer for projects or committees within healthcare institutions focusing on health
            information technology or informatics.
          </li>
        </ul>

        <h4>Timeline:</h4>
        <p>
          Obtain a position or internship in nursing informatics by December 2026 after completing
          the RN bridging program.
        </p>

        <h3 style={{ color: '#F3E600' }}>Goal 3</h3>
        <p>Obtain Health Informatics Postgrad Diploma</p>
        <br />

        <h4>Objective:</h4>

        <p>Enroll in Postgrad Health Informatics program at McMaster University</p>

        <h4>Action Steps:</h4>
        <ul>
          <li>Enroll in Health Informatics program by January 2027.</li>
          <li>
            Seek mentorship from RNs or professionals working in nursing informatics to gain
            insights and guidance.
          </li>
          <li>
            Prepare for the certification exam by utilizing study materials, online resources, and
            practice tests.
          </li>
          <li>
            Engage in self-assessment and continuous learning to fill knowledge gaps and strengthen
            areas of weakness.
          </li>
        </ul>

        <h4>Timeline:</h4>
        <p>
          Obtain diploma in Health Informatics by January 2029 after gaining practical experience in
          the field.
        </p>

        <h3>Conclusion:</h3>
        <p>
          This professional development plan outlines clear and achievable steps for an RPN
          transitioning to an RN program with a focus on nursing informatics. Regular
          self-assessment and adjustments to the plan based on progress and changes in career goals
          are encouraged. Networking with professionals in the field and staying updated on
          technological advancements will further facilitate growth in Health Informatics.
        </p>
        <br />

        {/* <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels> */}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
