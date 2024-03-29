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
        mb: 0,
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
            "linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent)",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      ></Box>

      <Box sx={{ position: "relative" }} zIndices={50}>
        {/* <Alert>
          Beep boop, this is an alert!
          <Close ml="auto" mr={-2} />
        </Alert> */}

        <Nav/>
        <Container sx={{ color: "white", px: [3, 4, 4] }}>
          <Heading
            as="h1"
            sx={{
              fontSize: 36,
              letterSpacing: -1,
              wordWrap: "break-word",
              mt: [100,200],

              backgroundColor: "#0B2867",
              p: 2,
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
              // backgroundColor: "#0B2867",
              py: 3,
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


