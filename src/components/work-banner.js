import React from "react"
import styled from "styled-components"

import { Colors, Spacing, Typography } from "../styles/variables"

const WorkBanner = () => (
  <Container>
    <Intro>
      <Divider />
      <IntroText>
        <Greeting>Hi, I’m Jeff.</Greeting> I work with teams from the ground up
        to ideate, design, and implement software. My favorite tools are Ruby on
        Rails and Figma. I’m a big fan of design sprints, design systems, and
        end user testing.
      </IntroText>
      <IntroText>
        I’m always interested in geeking out about travel, science fiction, and
        D&D.
      </IntroText>
      <Divider />
    </Intro>
    <div>
      <LargeText>
        Product, <br />
        Experience,
        <br />
        Visual,
        <br />
        Designer
      </LargeText>
    </div>
  </Container>
)

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34em;
`
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14.5em;
  height: 20.75em;
  margin-right: ${Spacing.base};

  @media (max-width: 950px) {
    width: 25em;
    padding-left: ${Spacing.base};
    padding-right: ${Spacing.base};
    margin-top: ${Spacing.base};
    margin-right: 0;
  }
`

const IntroText = styled.div`
  font-family: ${Typography.georgiaFont};
`

const Greeting = styled.span`
  font-weight: ${Typography.heavyFontWeight};
  font-style: italic;
`

const LargeText = styled.h1`
  font-size: ${Typography.largeFontSize};
  line-height: ${Typography.smallLineHeight};
  margin-bottom: 0;
  text-transform: uppercase;

  @media (max-width: 950px) {
    display: none;
  }
`

const Divider = styled.div`
  border-bottom: 1px solid ${Colors.black};
`

export default WorkBanner
