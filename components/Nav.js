

/** @jsxImportSource theme-ui */

import Link from 'next/link'
// import Image from 'next/image'
import React from "react";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import {
  Container,
  Link as ThemeLink,
  Box,
  Image,
  // Link,
  MenuButton,
} from "theme-ui";
import Logo from './Logo'

export default function Nav() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);
  console.log(primaryNav);

  return (
    <MainContext.Consumer>
      {(props) => (
        <div>
          <Container p={4}>
            <header
              sx={{
                background: "transparent",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "stretch",
                flexWrap: ["wrap", "wrap", "wrap"],
              }}
            >
              <div
                sx={{
                  // variant: "styles.headnavlink",
                  p: 2,
                }}
              >
                <Box sx={{}}>
                  <Link href="/">
                    <a
                      onClick={() => {
                        props.setPrimaryNav(true);
                      }}
                    >
                      <Image
                        src={`${
                          primaryNav == true ? `logo-white.svg` : `logo.svg`
                        }`}
                        variant="avatar"
                        sx={{ height: ["30px", "30px", "30px"] }}
                      />
                    </a>
                  </Link>
                </Box>
                {/* <Logo /> */}
              </div>
              <div sx={{ mx: "auto" }} />
              {/* <MenuButton
          aria-label="Toggle Menu"
          sx={{ color: "white", alignSelf: "center" }}
        /> */}
              <Link href="/kontakt">
                <ThemeLink
                  sx={{
                    variant: "styles.headnavlink",
                    color: `${props.primaryNav == true ? "white" : "black"}`,
                  }}
                >
                  <a
                    onClick={() => {
                      props.setPrimaryNav(false);
                    }}
                  >
                    Das Unternehmen
                  </a>
                </ThemeLink>
              </Link>
              <Link href="kontakt">
                <ThemeLink
                  sx={{
                    variant: "styles.headnavlink",
                    color: `${props.primaryNav == true ? "white" : "black"}`,
                  }}
                >
                  <a
                    onClick={() => {
                      props.setPrimaryNav(false);
                    }}
                  >
                    Kontakt
                  </a>
                </ThemeLink>
              </Link>
            </header>
          </Container>
        </div>
      )}
    </MainContext.Consumer>
  );}