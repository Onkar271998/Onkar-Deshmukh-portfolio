import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-top:-20px;

  @media (min-width: 576px) {
    max-width: 540px;
     
    

  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap:5%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
// border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h2{
    font-size: 2.2rem;
    color: black;
    opacity: 0.98;
    font-weight: 500;

  }
  h1 {
    font-size: 3.2rem;
    color: black;
    opacity: 0.98;
    font-weight: 500;

    webkit-animation-duration: 1s;
    animation-duration: 1s;
    webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    webkit-backface-visibility: visible!important;
    backface-visibility: visible!important;
    webkit-animation-name: flipInY;
    animation-name: flipInY;
  }

 

  h5 {
    font-size: 2.0rem;
    color: black;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: black;
    opacity: 0.85;
  }
 

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-top:-30px
  }
`;

export const HeroRight = styled.div`
//  border: 1px solid red;
  flex: 1;
  justify-content: center;
  display: flex;
  margin-top:50px;
`;

export const Image = styled.img`
  height: 350px;
  width: auto;
  border-radius:50%;
  
  
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: black;
 
  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
