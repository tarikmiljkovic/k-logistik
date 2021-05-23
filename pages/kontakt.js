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
  NavLink,
} from "theme-ui";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Feature from "../src/components/Feature";
import Service from "../src/components/Service";

export default function Home() {
  return (
    <Box>
      <Nav/>
      <Container px={4}>
        <Feature />
        <Service />
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
