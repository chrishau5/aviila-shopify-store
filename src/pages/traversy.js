import React, { useState } from "react"
import TestVid from "../videos/miami.mp4"
import "@fontsource/montserrat"
import "../css/typography.css"
import styled, { createGlobalStyle } from "styled-components"

const COLORS = {
  colorText: "#f6ebeb",
  colorBackground: "rgba(12, 12, 14, 0.4)",
  colorLinkHover: "#ddfc74",
}

const MEDIA = {
  test: "798px",
}

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
  font-size: 18px;
`

const Showcase = styled.section`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  color: #fff;
  z-index: 2;
  &.active {
    right: 300px;
  }

  @media (max-width: ${MEDIA.test}) {
    padding: 40px;
  } ;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${MEDIA.test}) {
    padding: 40px;
  } ;
`

const Logo = styled.h2`
  font-family: Ailerons;
  font-size: 1.44em;
  font-weight: 600;
  cursor: pointer;
`

const Toggle = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background: url("https://i.ibb.co/HrfVRcx/menu.png");
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  cursor: pointer;
  &.active {
    background: url("https://i.ibb.co/rt3HybH/close.png");
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center;
    cursor: pointer;
  }
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  will-change: opacity;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12, 12, 14, 0.4);
  will-change: opacity;
  /* mix-blend-mode: overlay; */
`

const Text = styled.div`
  position: relative;
  z-index: 10;
`

const Title = styled.div`
  font-size: 5em;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;
  font-family: Ailerons;
  letter-spacing: -0.05em;

  @media (max-width: ${MEDIA.test}) {
    font-size: 3em;
  } ;
`

const Subtitle = styled.div`
  font-size: 4em;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
  font-family: Ailerons;
  letter-spacing: -0.07em;

  @media (max-width: ${MEDIA.test}) {
    font-size: 2em;
  } ;
`

const Paragraph = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 1.1em;
  max-width: 700px;

  @media (max-width: ${MEDIA.test}) {
    font-size: 0.9em;
    line-height: 1.5em;
  } ;
`

const ExploreButton = styled.div`
  display: inline-block;
  font-size: 1em;
  background: white;
  padding: 10px 30px;
  text-decoration: none;
  color: black;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.2s;
  &:hover {
    letter-spacing: 6px;
  }
`

const Social = styled.ul`
  position: absolute;
  bottom: 30px;
  z-index: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    list-style: none;
    & a {
      display: inline-block;
      filter: invert(1);
      margin-right: 50px;
      transform: scale(1.2);
      transition: 0.5s;
      &:hover {
        transform: scale(1.2) translateY(-15px);
      }
    }
  }
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* right: 1%; */
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(12, 12, 14, 1);
  /* backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18); */

  & ul {
    position: relative;
    & li {
      list-style: none;
      padding-right: 52.36px;
      text-align: right;
      margin-bottom: 20px;
      & a {
        text-decoration: none;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
        color: ${COLORS.colorText};
        padding: 1px;
        border-bottom: 1px solid ${COLORS.colorText};

        &: hover {
          color: ${COLORS.colorLinkHover};
          border-bottom: 3px solid ${COLORS.colorLinkHover};
          font-weight: 900;
        }
      }
    }
  }
`

// const menuToggle = document.querySelector(".toggle")
// const showcase = document.querySelector(".showcase")

// menuToggle.addEventListener("click", () => {
//   menuToggle.classList.toggle("active")
//   showcase.classList.toggle("active")
// })

export default function Traversy({ children }) {
  // const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Showcase>
        <Header>
          <Logo>Aviila</Logo>
          <Toggle></Toggle>
        </Header>
        <Video src={TestVid} autoPlay muted loop playsInline></Video>
        <Overlay />
        <Text className="text">
          <Title>Oppulence</Title>
          <Subtitle>Meets Comfort</Subtitle>
          <Paragraph>
            Nostrud dolor aute ut Lorem deserunt dolor quis esse officia culpa
            ut eu magna quis. Elit cupidatat cillum enim aliquip cupidatat sunt
            magna deserunt elit sunt. Deserunt adipisicing enim reprehenderit
            veniam amet qui officia cupidatat sit Lorem non nulla duis.
          </Paragraph>
          <ExploreButton href="#">Explore</ExploreButton>
        </Text>
        <Social className="social">
          <li>
            <a href="https://www.instagram.com/aviila_apparel/">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AviilaApparel/">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aviila_apparel">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="" />
            </a>
          </li>
        </Social>
      </Showcase>
      <Menu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shorts</a>
          </li>
          <li>
            <a href="#">Shirts</a>
          </li>
          <li>
            <a href="#">Joggers</a>
          </li>
          <li>
            <a href="#">Pullovers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Menu>
    </Wrapper>
  )
}
