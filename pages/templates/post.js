import Head from 'next/head'
import Link from 'next/link'

import Logo from "../../components/Logo";
import Nav from '../../components/Nav';

import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";


import {Container} from 'theme-ui';

export default function Post({children,frontMatter}){

    let { primaryNav, setPrimaryNav } = useContext(MainContext);

    console.log(primaryNav);


  return (
    <main>
      <Nav />
      <Container px={4}>
        <h1>{frontMatter.title}</h1>
        <div>{children}</div>
        <p>
          <Link href="/">
            <a>Back</a>
          </Link>
        </p>
      </Container>
    </main>
  );
}