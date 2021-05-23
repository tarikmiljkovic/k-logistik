

/** @jsxImportSource theme-ui */

// import Link from 'next/link'
// import Image from 'next/image'

import {
  Container,
  Box,
  Image,
  Link,
  MenuButton,
} from "theme-ui";
import Logo from './logo'

export default function Nav() {
  return (
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
          <Box
            sx={{

            }}
          >
            <Link href="#">
              <Image
                src="logo-white.svg"
                variant="avatar"
                sx={{ height: ["30px", "30px", "30px"] }}
              />
            </Link>
          </Box>
          {/* <Logo /> */}
        </div>
        <div sx={{ mx: "auto" }} />
        {/* <MenuButton
          aria-label="Toggle Menu"
          sx={{ color: "white", alignSelf: "center" }}
        /> */}
        <Link
          href="#"
          sx={{
            variant: "styles.headnavlink",
            p: 2,
          }}
        >
          Das Unternehmen
        </Link>
        <Link
          href="#"
          sx={{
            variant: "styles.headnavlink",
            p: 2,
          }}
        >
          Kontakt
        </Link>
      </header>
    </Container>
  );}