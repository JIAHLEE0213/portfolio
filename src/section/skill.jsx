import React, { useState } from 'react';
import { Frontend, Library, Etc } from '../constants/skills';
import styled from 'styled-components';
import Button from '../components/button';
import PropTypes from 'prop-types';

export default function Skill({ nextClick }) {
  const stacks = {
    Frontend: Frontend,
    Library: Library,
    ETC: Etc,
  };
  const [selectedStack, setSelectedStack] = useState('Frontend');

  const handleStackButtonClick = (stack) => {
    setSelectedStack(stack);
  };

  const DisplaySkills = stacks[selectedStack];

  return (
    <SkillStyle>
      <div className="skill-container">
        <div className="stack-box">
          {Object.keys(stacks).map((stack) => (
            <button
              key={stack}
              onClick={() => handleStackButtonClick(stack)}
              className="stack-button"
            >
              {stack}
            </button>
          ))}
        </div>
        <div className="skills-list">
          {DisplaySkills.map((skill, index) => (
            <ListStyle key={index} className="skills-box">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </ListStyle>
          ))}
        </div>
      </div>
      <Button onClick={nextClick} />
    </SkillStyle>
  );
}

const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .skill-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 45vw;
  }
  .stack-box {
    display: flex;
    flex-direction: column;
  }
  .stack-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: linear-gradient(50deg, #ffffff, #43c6ac, #f8ffae);
    border: none;
    cursor: pointer;
    margin: 2rem;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .stack-button:hover {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
  }
  .skills-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    .skill-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
    }
    .stack-box {
      flex-direction: row;
      margin-bottom: 20px;
    }
    .stack-button {
      width: 100px;
      height: 100px;
      margin: 1.5rem;
      font-size: 1rem;
    }
    .skills-list {
      height: auto;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    .stack-button {
      width: 80px;
      height: 80px;
      font-size: 13px;
    }
  }
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 110px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(149, 160, 165, 0.5) 0px 8px 24px;
  .skill-icon {
    display: flex;
    align-items: center;
    padding: 0px 13px;
    font-size: 3rem;
  }
  .skill-name {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    width: 100px;
    height: 60px;
    .skill-icon {
      font-size: 1.5rem;
    }
    .skill-name {
      font-size: 1rem;
      margin: 10px 0px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    font-size: 0.7rem;
    width: 80px;
    height: 50px;
    .skill-icon {
      font-size: 1.3rem;
    }
    .skill-name {
      font-size: 0.8rem;
    }
  }
`;

Skill.propTypes = { nextClick: PropTypes.func.isRequired };
