import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Detail({ closeModal, project }) {
  return (
    <DetailStyle>
      <div key={project.title} className="detail-container">
        <div className="close-container" onClick={closeModal}>
          <AiFillCloseCircle className="close-button" />
        </div>
        <div className="explain1-box">
          <div className="detail-img">
            <img src={project.img.props.src} alt={project.title} />
          </div>
          <div className="project-box">
            <DetailBox className="members-box">
              <p className="project">{project.project}</p>
              <div className="explain-members">{project.members}</div>
            </DetailBox>
            <DetailBox className="deploy-box">
              <p>Deploy</p>
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="explain-deploy">{project.deploy}</div>
              </a>
            </DetailBox>
            <DetailBox className="repository-box">
              <p>Repository</p>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="explain-repo">{project.repository}</div>
              </a>
            </DetailBox>
          </div>
        </div>

        <div className="explain-container">
          <div className="explain2-box">
            <DetailBox className="period-box">
              <p>기간</p>
              <div className="explain-period">{project.period}</div>
            </DetailBox>
            <DetailBox className="pr-box">
              <p>소개</p>
              <div className="explain-pr">{project.introduce}</div>
            </DetailBox>
            <DetailBox className="impl-box">
              <p>구현 기능</p>
              <ul className="explain-impl">
                {project.implement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </DetailBox>
            <DetailBox className="stacks-box">
              <p>스택</p>
              <div className="explain-stacks">{project.stacks}</div>
            </DetailBox>
          </div>
        </div>
      </div>
    </DetailStyle>
  );
}

const DetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  margin-top: 20px;
  z-index: 1;
  .detail-container {
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 2rem;
    height: 32rem;
    width: 750px;
  }
  .explain-container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .explain1-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 70%;
  }
  .explain2-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-left: 1.5rem;
  }
  img {
    width: 300px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  .close-button {
    font-size: 40px;
    position: absolute;
    background: none;
    border: none;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #9ce7eb;
  }
  @media (max-width: 900px) {
    padding-top: 2rem;
    .detail-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30rem;
      height: 600px;
      padding: 1rem;
    }
    .explain1-box {
      width: 100%;
    }
    img {
      display: none;
    }
    .explain-container {
      align-items: center;
      width: 100%;
    }
    .explain2-box {
      display: flex;
      flex-direction: column;
      margin: 0;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    .detail-container {
      width: 300px;
      height: 440px;
      margin-top: 10px;
    }
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: gray;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    background-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
    width: fit-content;
    margin-bottom: 15px;
  }
  &.members-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .explain-members {
    margin-left: 0.7rem;
    padding-top: 15px;
  }
  .explain-impl {
    margin: 0;
    padding-left: 1.8rem;
  }
  .project {
    font-size: 1.6rem;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    p {
      margin: 0.7rem;
    }
    .explain-members {
      margin: 0;
      padding: 0;
    }
    &.deploy-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .explain-deploy {
      padding-top: 0.5rem;
    }
    &.repository-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &.period-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .explain-pr {
      margin-left: 0.7rem;
    }
    .explain-stacks {
      margin-left: 0.7rem;
    }
    .explain-impl {
      margin-left: 0.5rem;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    font-size: 0.6rem;
    p {
      font-size: 0.8rem;
    }
    .explain-members {
      font-size: 0.8rem;
    }
    .project {
      font-size: 1.2rem;
    }
  }
`;
Detail.propTypes = {
  closeModal: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};
