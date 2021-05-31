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


import HeadPage from "../components/HeadPage";
import Footer from "../components/Footer";
import Feature from '../components/Feature'
import Service from "../components/Service";

export default function Home({ posts }) {

  // let { siteObject, setSiteObject } = useContext(MainContext);
  // setSiteObject(posts);
  // console.log(posts);

  // console.log('posts',posts);
  return (
    <Box>
      <HeadPage />
      <Container px={4}>
        <Feature />
        <Service posts={posts} />
        <Footer />
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");

  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);

      const content = await fs.readFile(filePath, "utf8");

      const matter = grayMatter(content);


      return {
        filename,
        matter,
      };
    })
  );
    // console.log(JSON.parse(JSON.stringify(files)));



    // files = JSON.parse(JSON.stringify(files));
  // title: file.matter.data.title

  const posts = files.map((file) => {
    return {
      path: `/posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      desc: file.matter.data.desc,
    };
  });

  console.log(typeof posts);

  return {
    props: {
      posts,
    },
  };
}
