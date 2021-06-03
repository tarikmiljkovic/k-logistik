/** @jsxImportSource theme-ui */

import Link from "next/link";

import {
  Flex,
  Container,
  Box,
  Alert,
} from "theme-ui";

export default function MyAlert() {

  return (
    <>
      <Alert>
        <Container sx={{ px: [0, 4, 4] }}>
          <Flex sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box sx={{ flex: "0 1 auto" }}>
              <div>
                tel:{" "}
                <Link href="tel:+4915203468634">
                  <a sx={{ variant: "styles.alertnavlink" }}>+49 15203468634</a>
                </Link>
              </div>
            </Box>
            <Box>
              <div>
                {" "}
                mail:
                <Link href="mailto:info@karajic.de">
                  <a sx={{ variant: "styles.alertnavlink" }}>info@karajic.de</a>
                </Link>
              </div>
            </Box>
          </Flex>
        </Container>
      </Alert>
    </>
  );
}
