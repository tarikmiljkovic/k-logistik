/** @jsxImportSource theme-ui */

import Link from "next/link";

import {
  Flex,
  Container,
  Box,
  Alert,
} from "theme-ui";

import { MdPhone, MdMailOutline } from "react-icons/md";

export default function MyAlert() {

  return (
    <>
      <Alert>
        <Container sx={{ px: [0, 4, 4] }}>
          <Flex
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              flexItems: "center",
            }}
          >
            <Flex sx={{ flex: "0 1 auto" }}>
              <MdPhone sx={{ height: "100%" }} />
              <Link href="tel:+4915203468634">
                <a
                  href="tel:+4915203468634"
                  sx={{ variant: "styles.alertnavlink" }}
                >
                  +49 15203468634
                </a>
              </Link>
            </Flex>
            <Flex>
              <MdMailOutline sx={{ height: "100%" }} />
              <Link href="mailto:info@karajic.de">
                <a
                  href="mailto:info@karajic.de"
                  sx={{ variant: "styles.alertnavlink" }}
                >
                  info@karajic.de
                </a>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Alert>
    </>
  );
}
