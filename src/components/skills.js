import React from "react"
import styled, { css } from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../styles/variables"

const Skills = () => (
  <OuterContainer id="skills">
    <Container>
      <Column>
        <Fade>
          <Heading>How I Work</Heading>
          <DesignHeading>Methods</DesignHeading>
          <Description>
            Jobs-To-Be-Done, GV Design Sprints (read about my geeky{" "}
            <LinkText href="https://thoughtbot.com/blog/how-dnd-made-me-better-at-facilitating-design-sprints">
              thoughts on facilitation
            </LinkText>
            ), Atomic Design Systems, Lean UX Canvas, HEART, Agile, Styled
            Components, BEM, ITCSS.
          </Description>
          <DesignHeading>Tools & Technologies</DesignHeading>
          <Description>
            Figma, Miro, UserZoom, React, React Native, Ruby on Rails, HTML5,
            CSS3, SCSS, Git, Gatsby, Middleman.
          </Description>
          <DesignHeading>Influences & Resources</DesignHeading>
          <Description>
            UX Planet, Smashing Magazine, UX Collective, UXmatters, NNGroup,
            Brad Frost, Alla Kholmatova, Erika Hall, Jared Spool, Chris Messina,
            Sarah Doody.
          </Description>
        </Fade>
      </Column>
      <Column>
        <Fade>
          <Heading>What I Value</Heading>
          <DevelopHeading>Cross-Functional Teams</DevelopHeading>
          <Description>
            I do my best work when embedded in multi-disciplinary teams. I rely
            on the expertise of my teammates through an inclusive and
            collaborative design process.
          </Description>
          <DevelopHeading>Validating Assumptions</DevelopHeading>
          <Description>
            It's important to track assumptions early & often. I embrace being
            wrong when it's proven by measurable user research.
          </Description>
          <DevelopHeading>Rapid Delivery & Iteration</DevelopHeading>
          <Description>
            Value now is more important than perfect later. I am deeply focused
            on getting functional software into the hands of users so we can
            respond to their feedback and refine.
          </Description>
        </Fade>
      </Column>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: ${Colors.black};
  padding: 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: 0 ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 65em;

  @media (max-width: ${Spacing.largeBreakPoint}) {
    flex-direction: column;
    margin-top: ${Spacing.xHuge};
    max-width: 27em;
  }
`

const Column = styled.div`
  width: 45%;

  @media (max-width: ${Spacing.largeBreakPoint}) {
    width: 100%;
    margin-bottom: ${Spacing.xHuge};
  }
`

const Heading = styled.h2`
  color: ${Colors.white};
  margin-bottom: ${Spacing.small};
`

const subheading = css`
  font-weight: ${Typography.lightFontWeight};
  margin-bottom: ${Spacing.xSmall};
`

const DesignHeading = styled.h3`
  ${subheading};
  color: ${Colors.red};
`

const DevelopHeading = styled.h3`
  ${subheading};
  color: ${Colors.blue};
`

const Description = styled.p`
  color: ${Colors.gray2};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.smallFontSize};
  }
`

const LinkText = styled.a`
  color: ${Colors.white};

  &:hover {
    color: ${Colors.gray1};
  }
`

export default Skills
