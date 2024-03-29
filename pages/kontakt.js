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
          Hier haben Sie möglichkeit uns zu erreichen.
        </h2>
        <Text sx={{ variant: "styles.text.textbody" }}>
          Habichtring 29 <br />
          84539 Ampfing <br />
          Deutschland <br />
          <br />
          <div>
            tel:{" "}
            <Link href="tel:+4915203468634">
              <a href="tel:+4915203468634" sx={{ variant: "styles.navlink" }}>
                +4915203468634
              </a>
            </Link>
          </div>
          <div>
            fax:{" "}
            <Link href="tel:+4915203468634">
              <a href="tel:+4915203468634" sx={{ variant: "styles.navlink" }}>
                +4915203468634
              </a>
            </Link>
          </div>
          <div>
            mail:{" "}
            <Link href="mailto:info@karajic.de">
              <a
                href="mailto:info@karajic.de"
                sx={{ variant: "styles.navlink" }}
              >
                izet@karajic.de
              </a>
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
