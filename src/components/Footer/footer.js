import React from 'react'
import Headings from '../utils/Heading';
import SocialIcons from '../../elements/socialIcons';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import ImgWrapper from "../utils/ImageWrapper";
import IMSLOGO from "../../images/logo/logo3x.png";
import ContactIcon from "../../images/contact-icon.svg";
import MailIcon from "../../images/mail-icon.svg";

export default function Footer(props) {

    const Divider = styled.span`
  ${tw`pl-2 pr-2 sm:hidden lg:inline`}
  border-right: 2px solid #0d266c;
`

    const HorizontalDivider = styled.div`
  background-color: #0d266c;
  width: 32rem;
  height: 4px;
  @media screen and (min-width: 1800px) {
    width: 74rem;
  }
  @media screen and (min-width: 1600px) {
    width: 74rem;
  }
  @media screen and (min-width: 1400px) and (max-width: 1600px) {
    width: 54rem;
  }
`
    const Headline = styled.h3`
  ${tw` inline text-left pl-2 pr-2 font-robotoRegular`}
  color: #0d266c;
  width: 5rem;
  font-weight: 300;
  font-size: 1rem;
`

    return(
        <footer className="w-full bg-grey-footer">
            <div id="courses" className="w-full p-6">
                <div className="w-full mt-2 mb-6 md:pr-6 lg:pr-2 flex-row flex-wrap flex">
                    <div className="fit-content my-2">
                        <Headline>
                            Master of Business Administration
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Civil Engineering
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Computer Science & Engineering
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Electrical & Electronics Engineering
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Electronics & Communication Engineering
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Information Technology
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Mechanical Engineering
                            <Divider />
                        </Headline>
                    </div>
                    <div className="fit-content my-2">
                        <Headline>
                            Biotechnology
                            <Divider />
                        </Headline>
                    </div>
                </div>
            </div>
            <div className="w-full flex footer-btm-row">
                <div className="footer-logo-container lg:block">
                    <div className="footer-logo px-6  flex">
                        <ImgWrapper img={IMSLOGO} width="4rem" twClass="m-auto ml-2 mr-2" altText="IMS LOGO" />
                        <Headings
                            wrapperClassName="flex my-auto mx-0"
                            width="20"
                            color="#0d266c"
                            fontWeight="500"
                            padding="0"
                            tag="h3"
                            margin="0 1rem"
                            content="IMSEC"
                        />
                    </div>
                    <div className="mx-auto footer-contact-section">
                        <div className="flex">
                            <ImgWrapper
                                img={ContactIcon}
                                margin="auto 0"
                                width="6px"
                                twClass="m-auto ml-2 mr-2"
                                altText="Contact Icon"
                            />
                            <Headings
                                width="20"
                                color="#0d266c"
                                fontWeight="400"
                                font="Roboto-Regular"
                                padding="0"
                                tag="h3"
                                margin="0 1.5rem"
                                content="18001028393"
                            />
                        </div>
                        <div className="flex py-4">
                            <ImgWrapper
                                img={MailIcon}
                                margin="auto 0"
                                width="18px"
                                twClass="m-auto ml-2 mr-2"
                                altText="Mail Icon"
                            />
                            <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="400"
                                padding="0"
                                tag="h3"
                                margin="0 1rem"
                                content="enquiry@imsec.ac.in"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer-links-container flex-col">
                    <div className="footer-quickLinks flex">
                        <Headings
                            wrapperClassName="my-auto"
                            width="20"
                            color="#0d266c"
                            fontWeight="600"
                            padding="0 1rem"
                            tag="h3"
                            margin="0 0 0 1rem"
                            content="Quick Links" />
                        <div className="lg:flex m-auto">
                            <HorizontalDivider />
                        </div>
                        <Headings
                            wrapperClassName="float-right"
                            width="20"
                            color="#0d266c"
                            fontWeight="600"
                            padding="0 1rem"
                            tag="h3"
                            margin="0"
                            content="Guidelines for Anti Ragging"
                        />
                    </div>
                    <div className="footer-links flex flex-row justify-between">
                        <div className="footer-link-list">
                            <ul>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="About IMS Society"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Chairman’s Message"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Director’s Message"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Photo Gallery"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Online Payment"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Mandatory Disclosure"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-list">
                            <ul>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Balance Sheet & Audit Report"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Media"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Vivechan International Journal"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Byte (E-magazine)"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Library"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Grievance"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-list">
                            <ul>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Anti Ragging"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Ruling of Supreme Court"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="Order of Supreme Court"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="UGC Regulation"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="AICTE Notification"
                                    />
                                </li>
                                <li>
                                    <Headings
                                        width="20"
                                        color="#0d266c"
                                        font="Roboto-Regular"
                                        fontWeight="500"
                                        padding="0.5rem 1rem"
                                        tag="h4"
                                        margin="0 1rem"
                                        content="NIRF-2019"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar justify-between px-6 py-2 flex bg-grey-footer-btm">
                <div className="bottom-bar-left my-auto mx-0">
                    <Headline>Privacy</Headline>
                    <Headline>Term</Headline>
                    <Headline>Sitemap</Headline>
                    <Headline>Purchase</Headline>
                </div>
                <div className="bottom-footer-social-icons">
                    <SocialIcons />
                </div>
            </div>
        </footer>
    )
}