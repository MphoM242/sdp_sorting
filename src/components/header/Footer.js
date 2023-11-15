import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                A Computer Science Portal for Geeks!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Credits
                        </FooterLink>
                        <FooterLink href="#">
                            References
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Learning
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Guides and Additional:</Heading>
                        <FooterLink href="#">
                            User Manual: Student
                        </FooterLink>
                        <FooterLink href="#">
                            Admin Manual: Educator
                        </FooterLink>
                        <FooterLink href="#">
                            Release Notes
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Lecturer: Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Course Coordinator: Ahemdabad
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;