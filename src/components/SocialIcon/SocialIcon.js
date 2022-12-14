import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 2.5rem;
    color: #151418;
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/Onkar271998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="mailto:Onkar271998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </li>
        <li className="item">
          <a
            href="tel:7498514749"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhoneCall />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
