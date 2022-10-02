import React from "react";
import {
  FaAddressBook,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMarker,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Text } from "../../components";
import {
  FooterCentre,
  FooterContainer,
  FooterLeft,
  FooterLink,
  FooterLogo,
  FooterMenu,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#f9f9f9" }}>
      <FooterContainer>
        <FooterLeft>
          <FooterLogo>React Blog</FooterLogo>

          <FooterMenu>
            <FooterLink>Home</FooterLink>

            <FooterLink>Blog</FooterLink>

            <FooterLink>Pricing</FooterLink>

            <FooterLink>About</FooterLink>

            <FooterLink>Faq</FooterLink>
          </FooterMenu>

          <Text className={`title`}>Company Name © 2015</Text>
        </FooterLeft>

        <FooterCentre>
          <Text>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </Text>

          <Text>+1.555.555.5555</Text>

          <FooterLink>support@company.com</FooterLink>
        </FooterCentre>

        <FooterCentre>
          <Text>
            <Text className={`title`}>About the company</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </Text>
          </Text>

          <FooterMenu>
            <FaFacebook style={{ margin: "10px" }} />
            <FaTwitter style={{ margin: "10px" }} />
            <FaLinkedin style={{ margin: "10px" }} />
            <FaGithub style={{ margin: "10px" }} />
          </FooterMenu>
        </FooterCentre>
      </FooterContainer>
    </IconContext.Provider>
  );
};
