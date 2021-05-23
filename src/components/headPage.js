/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'

import {
  Flex,
  Card,
  Button,
  Grid,
  Divider,
  Text,
  // Link,
  Container,
  Image,
  AspectImage,
  Paragraph,
  Box,
  Alert,
  Close,
  Heading,
  NavLink,
} from "theme-ui";

import Nav from "./nav";

export default function HeadPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        mb: 60,
        position: "relative",
        verticalAlign: "middle",
        backgroundImage: "url(static/kamion.jpg)",
        objectFit: "cover",
        objectPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",

      }}
    >
      <Box
        zIndices={0}
        sx={{
          // height: "100vh",
          position: "absolute",
          height: "100%",
          width: "100%",
          verticalAlign: "middle",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)",

          objectFit: "cover",
          objectPosition: "top center",
        }}
      ></Box>

      <Box sx={{ position: "relative" }} zIndices={50}>
        {/* <Alert>
          Beep boop, this is an alert!
          <Close ml="auto" mr={-2} />
        </Alert> */}
        <Nav />

        <Container p={4} sx={{ color: "white" }}>
          <Heading
            as="h1"
            sx={{
              fontSize: 38,
              letterSpacing: -1,
              wordWrap: "break-word",
              pt: 100,
              pb: 3,
            }}
          >
            Dank der detalierten Sendungsverfolgung
          </Heading>

          <Paragraph
            variant="subheading"
            sx={{ pb: 3, width: ["auto", "70%"] }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            exercitationem minima aspernatur perspiciatis ad odit, explicabo
            corporis quisquam eius praesentium corrupti.
          </Paragraph>
          <Button>Weiter Informationen</Button>
        </Container>
      </Box>
    </Box>
  );
}


