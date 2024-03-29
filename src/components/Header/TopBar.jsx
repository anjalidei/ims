import tw from 'tailwind.macro'
import styled from 'styled-components'
import React from 'react'

import SocialIcons from '../../elements/socialIcons'

const TopBarWrapper = styled.div`
  ${tw` lg:flex-row flex-col flex justify-between py-1`}
  background: #eabd00;
`

const Headline = styled.h4`
${tw ` px-1 lg:px-4 inline my-1 font-medium text-xs lg:text-sm font-robotoMedium`}
`

const Divider = styled.span`
  ${tw `px-1 lg:px-2`}
  border-right: 2px solid #000;
`

const TopBar = () => (
  <>
    <TopBarWrapper id="top-bar-section" className="">
      <div className="lg:my-auto lg:mx-0 flex flex-row  ml-2 flex-wrap lg:p-0">
        <div className="my-1 lg:m-0">
          <Headline>
            29 Years of Legacy
            <Divider />
          </Headline>
          <Headline>NAAC Accredited with Grade 'A' <Divider /> </Headline>
          <Headline>
            NBA Accredited Branches (BT, CSE & ME)
          </Headline>
        </div>
      </div>
      <div className="top-bar-social-icons hidden lg:flex">
        <SocialIcons/>
      </div>
    </TopBarWrapper>
  </>
);

export default TopBar
