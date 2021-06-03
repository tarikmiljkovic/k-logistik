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
      <Container sx={{ px: [4, 4, 4] }}>
        <h1 sx={{ variant: "styles.text.postheading" }}>Kontakt</h1>
        <h2
          sx={{
            variant: "styles.text.leistungenubheading",
            fontWeight: "300",
          }}
        >
          Hier haben Sie moglichkeit uns zu erreichen.
        </h2>
        <Text sx={{ variant: "styles.text.textbody" }}>
          Freisinger Landstrassse Munchen
          <div>
            tel:{" "}
            <Link href="tel:">
              <a>+496705558220</a>
            </Link>
          </div>
          <div>
            fax:{" "}
            <Link href="">
              <a>+496705558220</a>
            </Link>
          </div>
          <div>
            mail:{" "}
            <Link href="mailto:izet@karajic.de">
              <a>izet@karajic.de</a>
            </Link>
          </div>
        </Text>
        <Service />
        {/* leistungen={leistungen} */}
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
