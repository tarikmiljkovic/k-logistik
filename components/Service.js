/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from 'next/link'
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
  Heading,
} from "theme-ui";


export default function Service() {
  return (
    <Grid
      gap={3}
      sx={{
        gridTemplateColumns: [
          "auto", // default to a stacked layout on small screens
          "1fr 1fr",
          "1fr 1fr", // use columns for larger screens
        ],
      }}
      // columns={([3, "1fr 1fr 1fr"], [2, "1fr 1fr"], [1, "1fr"])}
    >
      <Card bg="muted" sx={{ overflow: "hidden" }}>
        <Box sx={{ px: [15, 30], py: [30, 30] }}>
          <Heading as="h3" variant="bottom">
            Bieten Sie Ihren Kunden bequeme Lieferoptionen.
          </Heading>
          <Paragraph variant="bottom">
            Stellen Sie günstig gelegene Zustellorte zur Verfügung, um Ihre
            Umsätze zu steigern.
          </Paragraph>
          <Text variant="bottom">
            <Link href="#">
              <a>
                <Button sx={{ mb: 10 }} variant="secondary">
                  Beep
                </Button>
              </a>
            </Link>
          </Text>
        </Box>

        <Box sx={{ height: "200px", width: "100%" }}>
          <Image
            sx={{
              display: "block",
              maxHeight: "100%",
              height: "auto",
              width: "100%",
              objectFit: "cover",
            }}
            src="static/munchen.jpg"
          />
        </Box>
      </Card>

      <Card bg="muted" sx={{ overflow: "hidden" }}>
        <Box sx={{ px: [15, 30], py: [30, 30] }}>
          <Heading as="h3" variant="bottom">
            Bieten Sie Ihren Kunden bequeme Lieferoptionen.
          </Heading>
          <Paragraph variant="bottom">
            Stellen Sie günstig gelegene Zustellorte zur Verfügung, um Ihre
            Umsätze zu steigern.
          </Paragraph>
          <Text variant="bottom">
            <Link href="#">
              <a>
                <Button sx={{ mb: 10 }} variant="secondary">
                  Beep
                </Button>
              </a>
            </Link>
          </Text>
        </Box>

        <Box sx={{ height: "200px", width: "100%" }}>
          <Image
            src="/static/kran.jpg"
            sx={{
              display: "block",
              maxHeight: "100%",
              height: "auto",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Card>
    </Grid>
  );}