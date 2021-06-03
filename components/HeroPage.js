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

import Nav from "./Nav";

// backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",

export default function HeroPage() {
  return (
    <Box
      sx={{
        height: "100vh",

        mb: 60,
        position: "relative",
        verticalAlign: "middle",
        backgroundImage: `url(${"static/maci.JPG"})`,
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
            "linear-gradient(to top, rgba(11, 61, 145, 0.75), transparent)",

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
              mt: 100,
              mb: 3,
              backgroundColor: "#0B3D91",
              p: 3,
              display: "inline-block",
            }}
          >
            Transport im Bayern
          </Heading>

          <Paragraph
            variant="subheading"
            sx={{
              pb: 3,
              width: ["auto", "70%"],
              backgroundColor: "#0B3D91",
              p: 3,
            }}
          >
            Wir agieren über die Grenzen Bayerns und Deutschlands hinaus, sind
            auch in Europa vielseitiger Komplettanbieter für Transport und
            Logistik.
            {/* Durch diese Vielfalt, gepaart mit der
            Erfahrung in unserem mittelständischen Familienunternehmen, bieten
            wir unseren Kunden wahre Mehrwerte wie Flexibilität, Zuverlässigkeit
            und Sicherheit. */}
          </Paragraph>
          <Button>Weiter Informationen</Button>
        </Container>
      </Box>
    </Box>
  );
}


