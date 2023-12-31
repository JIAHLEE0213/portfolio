import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/button';
import { Contact } from '../constants/contact';
import 'animate.css';
import 'hover.css/css/hover-min.css';
import PropTypes from 'prop-types';

export default function About({ nextClick }) {
  return (
    <ProfileBox>
      <div className="about-box">
        <ul>
          <li>
            <span className="underline">
              <span className="strong">가독성</span>
              {` 높은 코드`}
            </span>
            {`에 대한 연구와  `}
            <br />
            {`협업 중에 발생하는 `}
            <span className="underline">
              <span className="strong">문제의 해결</span>
              {`을 즐기는 개발자로, `}
            </span>
          </li>
          <li>
            {` 팀 내에서 `}
            <span className="underline">
              <span className="strong">긍정적인 영향</span>
              {`과 `}
              <span className="strong">생산성 향상</span>
            </span>
            {`에 기여합니다.`}
          </li>
        </ul>
        <div className="contact-container">
          {Contact.map(({ icon, type, content, link }) => (
            <ContentBox
              className="content-box"
              key={type}
              onClick={() => {
                if (link) {
                  window.open(link, '_blank');
                }
              }}
            >
              <div className="icon">{icon}</div>
              <div className="text-box">
                <p className="text">{type}</p>
                <p className="content">{content}</p>
              </div>
            </ContentBox>
          ))}
        </div>
      </div>
      <Button onClick={nextClick} />
    </ProfileBox>
  );
}

const ProfileBox = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      ul {
        margin: 0.7rem 0;
      }
      li {
        width: 80vw;
        margin: auto;
        text-align: center;
        font-size: 1.2rem;
      }
      .strong {
        font-size: 1.3rem;
      }
    }
    @media screen and (min-width: 375px) and (max-width: 440px) {
      ul {
        margin: 1.8rem 0rem;
      }
      .strong {
        font-size: 1rem;
      }
      li {
        margin: 0;
        font-size: 0.8rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }
  li {
    width: 30vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 5rem;
    list-style: none;
  }
  .strong {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .underline {
    background-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .card-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ContentBox = styled.div`
  width: 270px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.5) 0px 8px 24px;
  cursor: pointer;

  &:hover {
    animation: ${pulse} 1s; /* pulse 애니메이션 적용 */
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    margin: 0px 21px;
  }
  .text-box {
  }
  .text {
    font-weight: 500;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
  }
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    width: 170px;
    height: 55px;
    .icon {
      font-size: 1.3rem;
    }
    .text {
      font-size: 0.8rem;
    }
    .content {
      font-size: 0.6rem;
    }
  }
`;

About.propTypes = { nextClick: PropTypes.func.isRequired };
