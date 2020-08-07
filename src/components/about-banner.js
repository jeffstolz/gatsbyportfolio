import React from "react"
import styled from "styled-components"
import JeffStolz from "../images/jeff-stolz.png"
import { Colors, Spacing, Typography } from "../styles/variables"

const AboutBanner = () => (
  <Container>
    <TopRow>
      <HeadshotImage src={JeffStolz} alt="Jeff Stolz" />
      <LargeText>About Me</LargeText>
      <FancyText>My Style:</FancyText>
    </TopRow>
    <MiddleRow>
      <IntroText>
        I thrive in small, collaborative, multi-disciplinary teams that foster
        transparency and continuous improvement. I value strong opinions,
        loosely held. I believe in the value of designers writing frontend code
        alongside developers. While I have experience with a variety of roles, I
        especially enjoy the unique challenges of product design.
      </IntroText>
      <CalloutList>
        <Callout>Figma</Callout>
        <Callout>Jobs to be Done</Callout>
        <Callout>Atomic Design Systems</Callout>
        <Callout>GV Design Sprints</Callout>
        <Callout>React</Callout>
        <Callout>Ruby on Rails</Callout>
        <Callout>A11Y Project</Callout>
      </CalloutList>
    </MiddleRow>
    <BottomRow>
      <Divider />
    </BottomRow>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 37em;

  @media (max-width: ${Spacing.breakPoint}) {
    display: none;
  }
`

const HeadshotImage = styled.img`
  position: absolute;
  object-fit: contain;
  height: 30.8em;
  top: -11.7em;
  left: -14.2em;
  z-index: -1;
`

const TopRow = styled.div`
  display: flex;
  position: relative;
  width: 54em;
  margin-bottom: 1.55em;
`

const MiddleRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 52em;
`

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 52.8em;
`

const IntroText = styled.div`
  font-family: "georgia", serif;
  width: 23.7em;
  padding-right: ${Spacing.base};
`

const LargeText = styled.h1`
  font-size: ${Typography.largeFontSize};
  line-height: ${Typography.smallLineHeight};
  margin-bottom: 0;
  margin-right: 0.35em;
  text-transform: uppercase;
`

const CalloutList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const Callout = styled.li`
  text-transform: uppercase;
  font-weight: ${Typography.heavyFontWeight};
  font-size: ${Typography.mediumFontSize};
  color: ${Colors.gray};
  margin: 0;

  @media (max-width: ${Spacing.breakPoint}) {
    display: none;
  }
`

const FancyText = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${Colors.gray};
  font-style: italic;
  font-family: ${Typography.georgiaFont};
`

const Divider = styled.div`
  width: 43em;
  margin-top: 1.75em;
  border-bottom: 1pt solid ${Colors.black};
`

export default AboutBanner
