import React from 'react'
import tw from 'tailwind.macro'
import '../css/gobal.css'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Headings from '../components/utils/Heading'
import ImgWrapper from '../components/utils/ImageWrapper'
import MultipleItems from '../elements/carousel'

import {Parallax} from 'react-spring/renderprops-addons.cjs'

// Images
import HeaderImg from '../images/header/header3x.jpg'
import PromotionsIcon from '../images/promotions.svg'
import AchievementIcon from '../images/achievement.svg'
import ExcellenceImg from '../images/center_for_excellence.jpg'
import Student from '../images/student4x.jpg'
import EmployeeIcon from '../images/employee.svg'
import ImsCollegeImg from '../images/ims-engineering-college-imsec-ghaziabad@3x.jpg'
import ImsCeleb2 from '../images/IMSEC CELEB@3x.jpg'
import ImsCeleb1 from '../images/ImsCelebrities3x.jpg'
import Events1 from '../images/events1.jpg'
import Events2 from '../images/events2.jpg'
import Gallery1 from '../images/gallery1.jpg'
import Campus1 from '../images/campus-1.jpg'
import Campus2 from '../images/campus-2.jpg'
import Campus3 from '../images/campus-3.jpg'

import Layout from '../components/Layout'
import Button from '../components/utils/Button'
import MobileFooter from '../components/Footer/mobileFooter';
import Footer from "../components/Footer/footer";
import PrevNextButton from "../elements/PrevNextButton"

const PageRow = styled.div`
  ${tw`w-full h-auto relative`}
  top: 0;
  left: 0;
  
  @media screen and (min-width: 365px) and (max-width: 765px){
  .topHeader{
     width: 100vw;
     overflow:hidden;
    }
  }
`
const ImageWrapper = styled.div`
  ${tw`overflow-hidden w-full`}
  
`

const Image = styled.img`
  ${tw`lg:w-full h-full w-auto h-auto`}
`

const SectionWrapper = styled.section`
  ${tw`w-full pl-4 absolute pr-4`}
  top: 28vw;
  
  @media screen and (min-width: 320px) and (max-width: 775px) {
    top: 60vw;
  }
`
const ContentDiv = styled.div`
  ${tw`container w-full pl-6 pr-6 text-white`}
  
  @media screen and (min-width: 900px){
    .hide-on-large{
      display: none;
    }
  }
`

const Heading = styled.h1`
  ${tw`text-left font-raanana text-6xl lg:inline hidden`}
`

const CardParagraph = styled.p`
  ${tw`text-left font-robotoRegular text-xs m-0 pt-2`}
  
`

const CardContent = styled.div`
  ${tw`container w-full text-white pl-4 pr-4`}
`

const CardRow = styled.div`
  ${tw`flex lg:flex-row flex-col lg:justify-start justify-between w-full`}
`

const CardWrapper = styled.div`
  ${tw`flex w-full my-2 mr-4 p-4`}
  
  @media screen and (min-width: 775px){
    width:fit-content;
  }
  
  background-color: #0d266c;
`

const EventImgWrapper = styled.img``

export default class Home extends React.Component {


    render() {
        return (
            <>
                <Layout/>
                <PageRow className="homePage">
                    <div id="introImage" className="topHeader w-full">
                        <ImageWrapper>
                            <Image src={HeaderImg} alt="headerImage"/>
                        </ImageWrapper>
                        <SectionWrapper className="banner" id="introSection">
                            <ContentDiv>
                                <Heading>IMS Engineering College</Heading>
                                <CardRow>
                                    <CardWrapper>
                                        <ImgWrapper margin="auto 0" img={PromotionsIcon} width="6rem" mobileWidth="4rem"
                                                    altText="Promotions icon"/>
                                        <CardContent>
                                            <Headings
                                                margin="auto 0"
                                                width="20"
                                                color="white"
                                                font="font-rockwell"
                                                padding="0"
                                                tag="h3"
                                                content="Apply Now"
                                            />
                                            <CardParagraph>Last Date to apply is 30th June.</CardParagraph>
                                        </CardContent>
                                    </CardWrapper>
                                    <CardWrapper>
                                        <ImgWrapper margin="auto 0" img={AchievementIcon} width="6rem"
                                                    mobileWidth="4rem" altText="achievement icon"/>
                                        <CardContent>
                                            <Headings width="20" color="white" padding="0" tag="h3" content="Rankings"/>
                                            <CardParagraph>
                                                3rd Ranked in Uttar Pradesh
                                                among Private Engineering College
                                            </CardParagraph>
                                        </CardContent>
                                    </CardWrapper>
                                    <CardWrapper>
                                        <ImgWrapper margin="auto 0" img={EmployeeIcon} width="6rem" mobileWidth="4rem"
                                                    altText="Employee icon"/>
                                        <CardContent>
                                            <Headings width="100%" color="white" tag="h3" padding="0"
                                                      content="28 Years"/>
                                            <CardParagraph>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting industry.
                                            </CardParagraph>
                                        </CardContent>
                                    </CardWrapper>
                                </CardRow>
                            </ContentDiv>
                        </SectionWrapper>
                    </div>
                    <div id="parallaxContainer" className="secondIntroDiv overflow-hidden lg:overflow-auto">
                        <section id="aboutUs" className="secondIntro w-full p-6 flex lg:flex-row flex-col">
                            <div className="w-full h-auto pl-4 pr-4">
                                <Headings
                                    tag="h1"
                                    underlineColor="#eabe00"
                                    underlineTop="36px"
                                    color="#0d266c"
                                    content="ABOUT US"
                                />
                                <p className="font-robotoRegular pr-4 leading-normal text-grey-para text-lg text-lg break-all">
                                    IMS Engineering College is one of the premier technical institutes in India. The
                                    College is NAAC
                                    accredited with grade ‘A’ for maintaining world class quality in Education and
                                    Infrastructure.
                                    Computer Science & Engineering & Mechanical Engineering Programs got NBA
                                    accreditation in 2016 for
                                    three years, reflecting advancement and compatibility with latest technical trends.
                                    Ranked 4th Amongst
                                    “Outstanding Engineering Colleges of Excellence” in India and Ranked 2nd in Uttar
                                    Pradesh by CSR-GHRDC
                                    Engineering College Survey 2016. IMSEC is bestowed with “Excellence in Overall
                                    Performance” Award
                                    jointly by AICTE & UP Govt. (National UP Education Award 2013).
                                </p>
                                <Button
                                    color="#0d266c"
                                    content="Know More"
                                    padding="6px"
                                    borderColor="#0d266c"
                                    width="100px"
                                    height="26px"
                                />
                            </div>
                            <div className="lg:p-0 my-4">
                                <ImgWrapper img={ImsCollegeImg} width="30rem" mobileWidth="auto"
                                            twClass="m-auto ml-2 mr-2" altText="Employee icon"/>
                            </div>
                        </section>
                        <section id="noticeSection" className="noticeContainer flex lg:flex-row flex-col w-full">
                            <div id="noticeSection" className="notice p-6 lg:w-1/2 w-full">
                                <div className="flex justify-between">
                                    <Headings
                                        underlineColor="#0d266c"
                                        underlineTop="54px"
                                        padding="1rem 0"
                                        tag="h1"
                                        color="#0d266c"
                                        content="NOTICE"
                                    />
                                    <PrevNextButton/>
                                </div>
                                <div className="w-full notice-card-container">
                                    <ul className="">
                                        <li className="pb-4">
                                            <div className="flex">
                                                <div>
                                                    <Headings
                                                        padding="0"
                                                        tag="span"
                                                        color="#0d266c"
                                                        size="2rem"
                                                        font="Roboto-Black"
                                                        content="26"
                                                    />
                                                    <Headings
                                                        padding="1rem 0"
                                                        tag="span"
                                                        font="Roboto-Black"
                                                        color="#0d266c"
                                                        size="1rem"
                                                        content="JULY"
                                                    />
                                                </div>
                                                <div className="pl-6">
                                                    <Headings
                                                        wrapperClassName="pt-2 pb-2"
                                                        padding="0"
                                                        tag="span"
                                                        fontWeight="100"
                                                        color="#0d266c"
                                                        size=".9rem"
                                                        font="Roboto-Medium"
                                                        content="Importance notice for filling even sem regular & carry over examination form session 2018-19."
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pb-4">
                                            <div className="flex">
                                                <div>
                                                    <Headings
                                                        padding="0"
                                                        tag="span"
                                                        color="#0d266c"
                                                        size="2rem"
                                                        font="Roboto-Black"
                                                        content="26"
                                                    />
                                                    <Headings
                                                        padding="1rem 0"
                                                        tag="span"
                                                        color="#0d266c"
                                                        size="1rem"
                                                        font="Roboto-Black"
                                                        content="JULY"
                                                    />
                                                </div>
                                                <div className="pl-6">
                                                    <Headings
                                                        wrapperClassName="pt-2 pb-2"
                                                        padding="0"
                                                        tag="span"
                                                        fontWeight="100"
                                                        color="#0d266c"
                                                        size=".9rem"
                                                        font="Roboto-Medium"
                                                        content="Challenge Evaluation Form of Odd semester 2018-19."
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pb-4">
                                            <div className="flex">
                                                <div>
                                                    <Headings
                                                        padding="0"
                                                        tag="span"
                                                        color="#0d266c"
                                                        size="2rem"
                                                        font="Roboto-Black"
                                                        content="26"
                                                    />
                                                    <Headings
                                                        padding="1rem 0"
                                                        tag="span"
                                                        color="#0d266c"
                                                        size="1rem"
                                                        font="Roboto-Black"
                                                        content="JULY"
                                                    />
                                                </div>
                                                <div className="pl-6">
                                                    <Headings
                                                        wrapperClassName="pt-2 pb-2"
                                                        padding="0"
                                                        tag="span"
                                                        fontWeight="100"
                                                        color="#0d266c"
                                                        size=".9rem"
                                                        font="Roboto-Medium"
                                                        content="Notice Regarding Celebration of Scholarship distribution Day (From Samaj Kalyan) General & SC Students list Attach."
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="eventsSection" className="eventsContainer bg-blue-site p-6 lg:w-1/2 w-full">
                                <div className="flex justify-between">
                                    <Headings
                                        underlineColor="#253b79"
                                        underlineTop="54px"
                                        titleClassName=""
                                        padding="1rem 0"
                                        tag="h1"
                                        color="#fff"
                                        content="EVENTS"
                                    />
                                    <PrevNextButton/>
                                </div>
                                <ul>
                                    <li className="pb-8 lg:flex">
                                        <div className="flex">
                                            <ImgWrapper img={ImsCollegeImg} width="4vw" mobileWidth="15vw"
                                                        twClass="m-auto ml-2 mr-2" altText="Event Img"/>
                                            <Headings
                                                wrapperClassName="my-auto ml-4 lg:hidden"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                        </div>
                                        <div className="lg:flex-col lg:ml-4">
                                            <Headings
                                                wrapperClassName="hidden lg:block"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                            <p className="text-white p-0 mt-2 lg:text-xs">12 Aug 2019 | 8:00 AM - 5:00
                                                PM @ IMS Engineering College, Ghaziabad</p>
                                        </div>
                                    </li>
                                    <li className="pb-8 lg:flex">
                                        <div className="flex">
                                            <ImgWrapper img={ImsCollegeImg} width="4vw" mobileWidth="15vw"
                                                        twClass="m-auto ml-2 mr-2" altText="Event Img"/>
                                            <Headings
                                                wrapperClassName="my-auto ml-4 lg:hidden"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                        </div>
                                        <div className="lg:flex-col lg:ml-4">
                                            <Headings
                                                wrapperClassName="hidden lg:block"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                            <p className="text-white p-0 mt-2 lg:text-xs">12 Aug 2019 | 8:00 AM - 5:00
                                                PM @ IMS Engineering College, Ghaziabad</p>
                                        </div>
                                    </li>
                                    <li className="pb-8 lg:flex">
                                        <div className="flex">
                                            <ImgWrapper img={ImsCollegeImg} width="4vw" mobileWidth="15vw"
                                                        twClass="m-auto ml-2 mr-2" altText="Event Img"/>
                                            <Headings
                                                wrapperClassName="my-auto ml-4 lg:hidden"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                        </div>
                                        <div className="lg:flex-col lg:ml-4">
                                            <Headings
                                                wrapperClassName="hidden lg:block"
                                                padding="0"
                                                tag="span"
                                                font="Roboto-Medium"
                                                fontWeight="300"
                                                color="#fff"
                                                size=".9rem"
                                                content="International Conference"
                                            />
                                            <p className="text-white p-0 mt-2 lg:text-xs">12 Aug 2019 | 8:00 AM - 5:00
                                                PM @ IMS Engineering College, Ghaziabad</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="w-full flex lg:flex-row flex-col p-6">
                            <div className="w-60 pr-6">
                                <ImgWrapper
                                    img={ExcellenceImg}
                                    width="26rem"
                                    mobileWidth="auto"
                                    borderRadius="5px"
                                    twClass="m-auto ml-2 mr-2"
                                    altText="center for excellence image"
                                />
                            </div>
                            <div id="excellenceSection" className="w-full flex">
                                <div className="w-full h-auto px-4 p-0 my-6 lg:m-0">
                                    <Headings
                                        tag="h1"
                                        color="#0d266c"
                                        titleClassName="text-2xl"
                                        underlineColor="#eabe00"
                                        underlineTop="30px"
                                        mobileUnderlineTop="58px"
                                        content="CENTRE FOR EXCELLENCE"
                                    />
                                    <p className="font-robotoRegular pr-4 leading-normal text-sm py-2  text-grey-para lg:text-lg break-all">
                                        The main aim of this Centre of Excellence is to bridge the gap between the
                                        expectation of modern
                                        industries and the knowledge of our graduates. The centre will help to make the
                                        aspiring engineers
                                        acquainted with the conceptual as well as practical knowledge of the Industrial
                                        latest technologies.
                                    </p>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="mt-2 lg:my-4 lg:pr-6">
                                            <Headings
                                                tag="h4"
                                                color="#0d266c"
                                                padding="10px 15px 10px 0"
                                                content="ABB Industrial Automation Centre"
                                            />
                                            <Headings
                                                tag="h4"
                                                color="#0d266c"
                                                padding="10px 15px 10px 0"
                                                content="GeoSpatial Technology Centre"
                                            />
                                        </div>
                                        <div className="lg:my-4 mb-1 lg:pr-6">
                                            <Headings tag="h4" color="#0d266c" padding="10px 15px 10px 0"
                                                      content="Robotics and Automation"/>
                                            <Headings
                                                tag="h4"
                                                color="#0d266c"
                                                padding="10px 15px 10px 0"
                                                content="Texas Instruments Embedded Systems"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        color="#0d266c"
                                        content="Know More"
                                        padding="6px"
                                        borderColor="#0d266c"
                                        width="100px"
                                        height="26px"
                                    />
                                </div>
                            </div>
                        </section>
                        <section id="placements-section"
                                 className="w-full placements flex flex-col bg-yellow-texture p-6">
                            <div className="text-white">
                                <Headings
                                    underlineColor="#0d266c"
                                    underlineTop="30px"
                                    tag="h1"
                                    color="#0d266c"
                                    content="PLACEMENT 2016-19"
                                />
                                <Headings
                                    wrapperClassName="pt-4 pb-2"
                                    tag="span"
                                    color="#0d266c"
                                    fontWeight="400"
                                    font="Roboto-Regular"
                                    titleClassName="text-sm lg:text-sm"
                                    content="Till 30th April 2019"
                                />
                            </div>
                            <div className="flex lg:flex-row flex-col lg:m-6 m-0">
                                <div className="w-fit-content w-full lg:w-1/3 my-4 m-auto">
                                    <Headings
                                        wrapperClassName="centerText"
                                        width="fit-content"
                                        padding="0 10px"
                                        margin="0 auto"
                                        tag="span"
                                        size="3rem"
                                        color="#fff"
                                        font="Roboto-Bold"
                                        content="355"
                                    />
                                    <div className="font-sans text-lg text-center text-blue-site font-bold">Companies
                                        Visited
                                    </div>
                                </div>
                                <div className="w-fit-content my-4 w-full lg:w-1/3 m-auto">
                                    <Headings
                                        wrapperClassName="centerText"
                                        width="fit-content"
                                        padding="0 10px"
                                        tag="span"
                                        margin="0 auto"
                                        size="3rem"
                                        font="Roboto-Bold"
                                        color="#fff"
                                        content="1708"
                                    />
                                    <div className="font-robotoBold text-lg text-center text-blue-site font-bold">Total
                                        Offers
                                    </div>
                                </div>
                                <div className="w-fit-content my-4 w-full lg:w-1/3 m-auto">
                                    <Headings
                                        wrapperClassName="centerText"
                                        width="fit-content"
                                        padding="0 10px"
                                        tag="span"
                                        size="3rem"
                                        color="#fff"
                                        font="Roboto-Bold"
                                        margin="0 auto"
                                        content="1371"
                                    />
                                    <div className="font-robotoBold text-lg text-center text-blue-site font-bold">Total
                                        Placements
                                    </div>
                                </div>
                                <div className="w-fit-content my-4 w-full lg:w-1/3 m-auto">
                                    <Headings
                                        wrapperClassName="centerText"
                                        width="fit-content"
                                        padding="0 10px"
                                        tag="span"
                                        margin="0 auto"
                                        size="3rem"
                                        font="Roboto-Bold"
                                        color="#fff"
                                        content="70.63"
                                    />
                                    <div className="font-robotoBold text-lg text-blue-site font-bold text-center">
                                        Placement Percentage
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="majorRecruiters" className="major-recruiters  w-full bg-white p-6">
                            <Headings
                                underlineColor="#eac600"
                                underlineTop="54px"
                                padding="1rem 0"
                                tag="h1"
                                color="#0d266c"
                                content="MAJOR RECRUITERS"
                            />
                            <div className="recruiterCarousel w-full p-8" id="carouselRecruiter">
                                <MultipleItems width="7rem"/>
                            </div>
                        </section>
                        <section className="w-full flex lg:flex-row flex-col bg-grey-footer p-6">
                            <div className="w-60 pr-6">
                                <ImgWrapper
                                    img={ExcellenceImg}
                                    width="26rem"
                                    mobileWidth="auto"
                                    borderRadius="5px"
                                    twClass="m-auto ml-2 mr-2"
                                    altText="center for excellence image"
                                />
                            </div>
                            <div className="w-full flex">
                                <div className="w-full h-auto px-4 p-0 my-6 lg:m-0">
                                    <Headings
                                        tag="h1"
                                        color="#0d266c"
                                        titleClassName="text-2xl"
                                        underlineColor="#eabe00"
                                        underlineTop="30px"
                                        mobileUnderlineTop="30px"
                                        content="CAMPUS TOUR"
                                    />
                                    <p className="font-robotoRegular pr-4 leading-normal text-sm py-2  text-grey-para lg:text-lg break-all">
                                        IMSEC Ghaziabad is one of the top-notch Engineering college in North India,
                                        providing technical education and 100% employability prospects to its students.
                                        B.Tech Programmes (BT, CSE & ME) are accredited by National Board of
                                        Accreditation (NBA).
                                    </p>
                                    <Button
                                        color="#0d266c"
                                        content="Know More"
                                        padding="6px"
                                        borderColor="#0d266c"
                                        width="100px"
                                        height="26px"
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="studentsSpeakSection"
                            className="studentsSpeak w-full relative lg:p-6 p-0 flex flex-col">
                            <Headings
                                wrapperClassName="m-4 lg:my-0"
                                underlineColor="#0d266c"
                                underlineTop="40px"
                                width="20"
                                color="#0d266c"
                                padding="0.5rem 0 0 0"
                                tag="h2"
                                content="ALUMNI SPEAK"
                            />
                            <div className="w-full lg:p-16 p-2">
                                <Headings
                                    wrapperClassName="qoutesHeading"
                                    titleClassName="lg:text-xl text-sm"
                                    width="20"
                                    color="black"
                                    font="RobotoRegular"
                                    padding="0"
                                    tag="h4"
                                    margin="0 5rem"
                                    content="IMSEC played a vital role in preparing me for my career. Being exposed to such internationalism at University really helped me to understand people, which is an essential part of politics. "
                                />
                            </div>
                            <div className="w-full flex">
                                <ImgWrapper
                                    img={Student}
                                    borderRadius="50%"
                                    margin="auto"
                                    width="8rem"
                                    twClass="m-auto ml-2 mr-2"
                                    altText="Student"
                                />
                            </div>
                            <div className="mx-auto">
                                <Headings width="20" color="black" padding="0" tag="h4" margin="0 5rem"
                                          content="Anand Prakash"/>
                            </div>
                            <div className="mx-auto lg:flex">
                                <Headings
                                    wrapperClassName="lg:inline block"
                                    width="20"
                                    color="black"
                                    fontWeight="500"
                                    padding="0"
                                    tag="h4"
                                    margin="0 0.5rem"
                                    content="Biotechnology"
                                />
                                <Headings
                                    wrapperClassName="lg:inline block"
                                    width="20"
                                    color="black"
                                    fontWeight="500"
                                    padding="0"
                                    tag="h4"
                                    margin="0"
                                    content="(Batch 2009-13)"
                                />
                            </div>
                            <div className="mx-auto my-4">
                                <Button
                                    btnClass="mr-2"
                                    color="#fff"
                                    content="Alumni Connect"
                                    padding="6px"
                                    borderColor="#0d266c"
                                    width="130px"
                                    height="26px"
                                    bgColor="#0d266c"
                                />
                                <Button
                                    btnClass="ml-2"
                                    color="#fff"
                                    content="Talk Video"
                                    padding="6px"
                                    borderColor="#0d266c"
                                    width="100px"
                                    height="26px"
                                    bgColor="#0d266c"
                                />
                            </div>

                        </section>
                        <section id="Ims-institutions" className="w-full lg:flex lg:flex-col bg-blue-site p-6">
                            <Headings
                                mobileUnderlineTop="90px"
                                underlineColor="#eac600"
                                underlineTop="70px"
                                padding="2rem 0"
                                tag="h1"
                                color="#fff"
                                content="IMS GROUP OF INSTITUTIONS"
                            />
                            <div className="overflow-y-hidden">
                                <div className="flex-row overflow-y-scroll lg:overflow-auto flex w-fit">
                                    <div className="cardContainer inline lg:block lg:w-1/3 bg-white m-4">
                                        <ImgWrapper img={Campus1} width="100%" twClass="m-auto ml-2 mr-2"
                                                    altText="Employee icon"/>
                                        <div className="bg-white w-full p-2 lg:p-6">
                                            <Headings
                                                padding="1rem 0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="Campus - I"
                                            />
                                            <Headings
                                                padding="0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="Institute of Management Studies"
                                            />
                                            <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                                                IMS Ghaziabad has earned a reputation of academic excellence in
                                                providing practical and quality
                                                academic programmes in the field of Management Sciences,
                                            </p>
                                            <Button
                                                color="#0d266c"
                                                content="Know More"
                                                padding="6px"
                                                borderColor="#0d266c"
                                                width="100px"
                                                height="26px"
                                            />
                                        </div>
                                    </div>
                                    <div className="cardContainer inline lg:block  lg:w-1/3 bg-white m-4">
                                        <ImgWrapper img={Campus2} width="100%" twClass="m-auto ml-2 mr-2"
                                                    altText="Employee icon"/>
                                        <div className="bg-white w-full p-2 lg:p-6">
                                            <Headings
                                                padding="1rem 0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="Campus - II"
                                            />
                                            <Headings
                                                padding="0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="IMS Engineering College"
                                            />
                                            <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                                                IMSEC Ghaziabad is one of the top-notch Engineering college in North
                                                India, providing technical
                                                education
                                            </p>
                                            <Button
                                                color="#0d266c"
                                                content="Know More"
                                                padding="6px"
                                                borderColor="#0d266c"
                                                width="100px"
                                                height="26px"
                                            />
                                        </div>
                                    </div>
                                    <div className="cardContainer  inline lg:block lg:w-1/3 bg-white m-4">
                                        <ImgWrapper img={Campus3} width="100%" twClass="m-auto ml-2 mr-2"
                                                    altText="Employee icon"/>
                                        <div className="bg-white w-full p-2 lg:p-6">
                                            <Headings
                                                padding="1rem 0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="Campus - III"
                                            />
                                            <Headings
                                                padding="0"
                                                tag="h1"
                                                color="#020202"
                                                size="1.3rem"
                                                font="Roboto-Medium"
                                                fontWeight="500"
                                                content="IMS Ghaziabad "
                                            />
                                            <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry’s standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of
                                                type and scrambled it to make a type specimen book.
                                            </p>
                                            <Button
                                                color="#0d266c"
                                                content="Know More"
                                                padding="6px"
                                                borderColor="#0d266c"
                                                width="100px"
                                                height="26px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section id="events-gallery-section" className="w-full hidden lg:block events-gallery p-8">
                            <Headings
                                underlineColor="#eac600"
                                underlineTop="70px"
                                padding="2rem 0"
                                tag="h1"
                                color="#0d266c"
                                titleClassName="text-lg"
                                size="2rem"
                                content="EVENTS GALLERY"/>
                            <div className="flex events-gallery-container pb-4">
                                <div id="event-image-container-1"
                                     className="event-image-container-1 overflow-hidden h-full bg-yellow">
                                    <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                </div>
                                <div id="event-image-container-2" className="h-full bg-grey event-image-container-2">
                                    <div id="event-image-inner-2-1"
                                         className="event-image-inner-2-1  overflow-hidden w-full bg-purple">
                                        <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                    </div>
                                    <div id="event-image-inner-2-2"
                                         className="event-image-inner-2-2 w-full overflow-hidden bg-blue">
                                        <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                    </div>
                                </div>
                                <div id="event-image-container-3" className="h-full bg-orange event-image-container-3">
                                    <div id="event-image-inner-3-1"
                                         className="event-image-inner-3-1  w-full overflow-hidden bg-blue">
                                        <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                    </div>
                                    <div id="event-image-inner-3-2"
                                         className="event-image-inner-3-2 w-full overflow-hidden bg-purple">
                                        <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                    </div>
                                </div>
                                <div id="event-image-container-4" className="h-full bg-green event-image-container-4">
                                    <div id="event-image-inner-4-1"
                                         className="event-image-inner-4-1 flex w-full bg-yellow">
                                        <div
                                            id="event-image-inner-inside-1"
                                            className="event-image-inner-inside-1 inline overflow-hidden  h-full bg-yellow"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                        <div
                                            id="event-image-inner-inside-2"
                                            className="event-image-inner-inside-2 inline h-full overflow-hidden bg-red"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                        <div
                                            id="event-image-inner-inside-3"
                                            className="event-image-inner-inside-3 inline h-full overflow-hidden bg-grey"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                    </div>
                                    <div id="event-image-inner-4-2"
                                         className="event-image-inner-4-2 flex w-full bg-green">
                                        <div
                                            id="event-image-inner-inside-4"
                                            className="event-image-inner-inside-4 inline  h-full overflow-hidden red"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                        <div
                                            id="event-image-inner-inside-5"
                                            className="event-image-inner-inside-5 inline h-full overflow-hidden bg-yellow"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                        <div
                                            id="event-image-inner-inside-6"
                                            className="event-image-inner-inside-6 inline h-full overflow-hidden bg-purple"
                                        >
                                            <EventImgWrapper src={Gallery1} altText="Employee icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                color="#0d266c"
                                content="View All"
                                padding="6px"
                                borderColor="#0d266c"
                                width="100px"
                                height="26px"
                            />
                        </section>
                        <section id="celebritiesSection" className="w-full celebrities p-6">
                            <Headings
                                tag="h1"
                                color="#0d266c"
                                underlineColor="#0d266c"
                                underlineTop="54px"
                                padding="1rem 0"
                                mobileUnderlineTop="42px"
                                titleClassName="lg:text-2xl"
                                content="CELEBRITIES @ IMSEC"
                            />
                            <div className="flex lg:flex-row flex-col pt-4 pb-4">
                                <div id="celebretiesIms" className="w-full">
                                    <ImgWrapper
                                        img={ImsCeleb2}
                                        borderRadius="5px"
                                        width="40vw"
                                        mobileWidth="100%"
                                        twClass="m-auto ml-2 mr-2"
                                        altText="Employee icon"
                                    />
                                </div>
                                <div className="w-full">
                                    <ImgWrapper
                                        wrapperClassName="my-4 lg:my-0"
                                        img={ImsCeleb1}
                                        borderRadius="5px"
                                        width="40vw"
                                        mobileWidth="100%"
                                        twClass="m-auto ml-2 mr-2"
                                        altText="Employee icon"
                                    />
                                </div>
                            </div>
                            <Button
                                color="#0d266c"
                                content="View All"
                                padding="6px"
                                borderColor="#0d266c"
                                width="100px"
                                height="26px"
                            />
                        </section>
                        <Footer/>
                        <MobileFooter/>
                    </div>
                </PageRow>
            </>
        )
    }
}
