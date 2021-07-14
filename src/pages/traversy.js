import * as React from "react"
import TestVid from "../videos/miami.mp4"
import "@fontsource/montserrat"
import "../css/typography.css"
import styled from "styled-components"

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
`

const Showcase = styled.div`
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
  z-index;
`

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h2`
  font-family: Ailerons;
  font-size: 1.44em;
  font-weight: 600;
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
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12, 12, 14, 0.4);
  will-change: opacity;
  mix-blend-mode: overlay;
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
`

const Subtitle = styled.div`
  font-size: 4em;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
  font-family: Ailerons;
  letter-spacing: -0.07em;
`

const Paragraph = styled.div`
  margin: 20px 0;
  font-weight: 500;
`

const Menu = styled.div``

export default function Traversy() {
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
          <a href="#">Explore</a>
        </Text>
        <ul className="social">
          <li>
            <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
          </li>
          <li>
            <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
          </li>
          <li>
            <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="" />
          </li>
        </ul>
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
