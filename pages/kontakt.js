/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'
import {useEffect} from 'react';
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

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
  Heading,
  Alert,
  Close,
  NavLink,
} from "theme-ui";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Service from "../components/Service";

export default function Kontakt() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  useEffect(() => {
    setPrimaryNav(false);
  });

  console.log(primaryNav);

  // useEffect(() => {
  //   setItems(mycontext.users);
  // }, [mycontext.users]);

  primaryNav = false;
  return (
    <Box>
      <Nav />
      <Container sx={{ px: [4,4,4]}}>
        <h1 sx={{ variant: "styles.text.postheading" }}>
          Sendungsverfolgungsleistungen
        </h1>
        <h2
          sx={{
            variant: "styles.text.leistungenubheading",
            fontWeight: "300",
          }}
        >
          Stellen Sie günstig gelegene Zustellorte zur Verfügung, um Ihre
          Umsätze zu steigern.
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis non
          nostrum quibusdam exercitationem eum tempora molestias, placeat quo
          cumque ad aut voluptatem expedita, consequuntur labore enim magnam
          quas accusamus quam!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Omnis non nostrum quibusdam exercitationem eum
          tempora molestias, placeat quo cumque ad aut voluptatem expedita,
          consequuntur labore enim magnam quas accusamus quam! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Omnis non nostrum
          quibusdam exercitationem eum tempora molestias, placeat quo cumque ad
          aut voluptatem expedita, consequuntur labore enim magnam quas
          accusamus quam! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Omnis non nostrum quibusdam exercitationem eum tempora
          molestias, placeat quo cumque ad aut voluptatem expedita, consequuntur
          labore enim magnam quas accusamus quam! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Omnis non nostrum quibusdam
          exercitationem eum tempora molestias, placeat quo cumque ad aut
          voluptatem expedita, consequuntur labore enim magnam quas accusamus
          quam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          non nostrum quibusdam exercitationem eum tempora molestias, placeat
          quo cumque ad aut voluptatem expedita, consequuntur labore enim magnam
          quas accusamus quam! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Omnis non nostrum quibusdam exercitationem eum
          tempora molestias, placeat quo cumque ad aut voluptatem expedita,
          consequuntur labore enim magnam quas accusamus quam! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Omnis non nostrum
          quibusdam exercitationem eum tempora molestias, placeat quo cumque ad
          aut voluptatem expedita, consequuntur labore enim magnam quas
          accusamus quam!
        </Paragraph>
        <Service />
        {/* leistungen={leistungen} */}
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
