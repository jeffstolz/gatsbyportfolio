import React from "react"
import styled from "styled-components"

import DefaultLayout from "../layouts/default-layout"
import CaseStudyHeader from "../components/case-study-header"
import Label from "../components/label"

import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const AirxosPage = () => (
  <DefaultLayout>
    <CaseStudyHeader
      title={"GE AiRXOS"}
    >
      <Label
        borderColor={Colors.blue}
        label={"Product Design"}
      />
      <Label
        borderColor={Colors.orange}
        label={"UX Design"}
      />
    </CaseStudyHeader>
    <p>
      For a six month engagement, I and two thoughtbot developers consulted for AiRXOS, a GE Venture. AiRXOS is focused on developing software associated with safe and efficient drone operations for first responder pilots and their support teams. I was brought on to lead the design of an application that helps pilots view and submit authorizations to fly in restricted airspaces. In an industry heavily regulated by the FAA, I was tasked with making the interface as intuitive as possible while still adhearing to their strict requirements. Extra care was taken to the increased cognitive load of the users, as they will often be doing so in distracting & stressful physical environments. After extensive interviews with flight operation teams, we worked with GE to build an MVP mobile application in React Native.
    </p>
      <ImageRow>
        <SolutionImage
          src={Images.GeAirspace}
          alt="AiRXOS Airspace"
        />
        <SolutionImage
          src={Images.GeSearch}
          alt="AiRXOS Search"
        />
      </ImageRow>
      <ImageRow>
        <SolutionImage
          src={Images.GeLayers}
          alt="AiRXOS Layers"
        />
        <SolutionImage
          src={Images.GeTooltip}
          alt="AiRXOS Tooltip"
        />
      </ImageRow>
      <ImageRow>
        <SolutionImage
          src={Images.GeWeather}
          alt="AiRXOS Weather"
        />
        <SolutionImage
          src={Images.GeAuth}
          alt="AiRXOS Authorization"
        />
      </ImageRow>
      <ImageRow>
        <SolutionImage
          src={Images.GeCollapsed}
          alt="AiRXOS Collapsed Airspace"
        />
        <SolutionImage
          src={Images.GeRequests}
          alt="AiRXOS Requests"
        />
      </ImageRow>
      <ImageRow>
        <SolutionImage
          src={Images.GeCompliance}
          alt="AiRXOS Compliance"
        />
        <SolutionImage
          src={Images.GeDraw}
          alt="AiRXOS Draw Airspace"
        />
      </ImageRow>
  </DefaultLayout>
)

const SolutionImage = styled.img`
  width: 24em;
  object-fit: contain;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.large};
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Spacing.large};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`

export default AirxosPage
