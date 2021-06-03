

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
          <Container sx={{ pt: [4, 4, 4] }}>
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
                  p: 0,
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
                          primaryNav == true ? `/logo.svg` : `/logo.svg`
                        }`}
                        variant="avatar"
                        sx={{ height: ["60px", "60px", "60px"] }}
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
              <Link href="/unternehmen">
                <ThemeLink
                  onClick={() => {
                    props.setPrimaryNav(false);
                  }}
                  sx={{
                    variant: "styles.headnavlink",
                    color: `${props.primaryNav == true ? "white" : "#0B2867"}`,
                  }}
                >
                  Das Unternehmen
                </ThemeLink>
              </Link>
              <Link href="/kontakt">
                <ThemeLink
                  onClick={() => {
                    props.setPrimaryNav(false);
                  }}
                  sx={{
                    variant: "styles.headnavlink",
                    color: `${props.primaryNav == true ? "white" : "#0B2867"}`,
                  }}
                >
                  Kontakt
                </ThemeLink>
              </Link>
            </header>
          </Container>
        </div>
      )}
    </MainContext.Consumer>
  );}