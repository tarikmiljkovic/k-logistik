/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from 'next/link'
// import Image from 'next/image'


import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";

// import { useContext } from "react";
// import { MainContext } from "../contexts/MainContext";

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


import {useEffect, useContext} from 'react';
import { MainContext } from "../contexts/MainContext";

import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import Feature from '../components/Feature';
import News from "../components/News";
import Service from "../components/Service";

export default function Home({ leistungen }) {

    let { primaryNav, setPrimaryNav } = useContext(MainContext);

    useEffect(() => {
      setPrimaryNav(true);
    });

  return (
    <Box>
      <Head>
        <title>Karajic</title>
      </Head>
      <HeroPage />
      <Container sx={{ px: [3,4,4]}}>
        <Feature />
        <News leistungen={leistungen} />
        <Service leistungen={leistungen} />
        <Footer />
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const leistungenDirectory = path.join(process.cwd(), "pages/leistungen");

  const filenames = await fs.readdir(leistungenDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(leistungenDirectory, filename);

      const content = await fs.readFile(filePath, "utf8");

      const matter = grayMatter(content);


      return {
        filename,
        matter,
      };
    })
  );

  const leistungen = files.map((file) => {
    return {
      path: `/leistungen/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      desc: file.matter.data.desc,
      image: file.matter.data.image,
    };
  });

  console.log(typeof leistungen);

  return {
    props: {
      leistungen,
    },
  };
}
