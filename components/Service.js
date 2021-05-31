/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from 'next/link'

import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import {
  Flex,
  Card,
  Button,
  Grid,
  Divider,
  Text,
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

import { GrTechnology } from "react-icons/gr";


import {
  MdRouter,
  MdLocalOffer,
  MdAutorenew,
  MdDoneAll,
  MdDone,
  MdFavorite,
  MdLockOpen,
  MdLock,
  MdOpenWith,
  MdReportProblem,
  MdSettingsInputComponent,
  MdThumbUp,
  MdTimeline,
  MdTouchApp,
  MdCall,
  MdClearAll,
  MdChatBubble,
  MdChatBubbleOutline,
  MdPhone,
  MdLocationOn,
  MdImportExport,
  MdAccessTime,
  MdShowChart,
  MdPhonelink,
  MdLayers,
  MdLocalHospital,
  MdMap,
  MdAllInclusive,
  MdLocationCity,
  MdPublic,
} from "react-icons/md";


var services = [
  {
    name: "Expressverkehre",
    desc: " ",
    icon: (
      <MdAccessTime
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "Import-Export",
    desc: " ",
    icon: (
      <MdImportExport
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "100% Befriedigung",
    desc: " ",
    icon: (
      <MdDoneAll
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "100% Sicherung",
    desc: " ",
    icon: (
      <MdLock
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  // {
  //   name: "Abfall- und Wertstofftransport",
  //   desc: " ",
  //   icon: (
  //     <MdAutorenew
  //       sx={{
  //         color: "#002664",
  //         fill: "#002664",
  //         width: "100%",
  //         height: "100%",
  //       }}
  //     />
  //   ),
  // },
  {
    name: "FTL/LTL – Teil- und Komplettladungen",
    desc: " ",
    icon: (
      <MdLayers
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "alles umfassend",
    desc: " ",
    icon: (
      <MdAllInclusive
        sx={{
          color: "#0B3D91",
          fill: "#0B3D91",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
];


export default function Service() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  // primaryNav = false;

  // console.log(posts);

  // console.log(typeof posts);



  return (
    <div>
      <h2>Leistungen</h2>

      <Grid
        gap={3}
        sx={{
          gridTemplateColumns: [
            "1fr", // default to a stacked layout on small screens
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr", // use columns for larger screens
          ],
        }}
        // columns={([3, "1fr 1fr 1fr"], [2, "1fr 1fr"], [1, "1fr"])}
      >
        {services.map((service) => (
          <Card
            sx={{
              maxWidth: '100%',
              backgroundColor: "#EAEBEC",
              padding: "1rem",
            }}
          >
            <div
              sx={{
                height: "100px",
              }}
            >

              {service.icon}

            </div>
            <h3
              sx={{
                margin: 0,
                padding: 0,
                fontSize: '1em',
              }}
            >
              {service.name}
            </h3>

            <Text>{service.desc}</Text>
          </Card>
        ))}

        {/* { posts.map(post => { return (
        <Card key={post.path} bg="muted" sx={{ overflow: "hidden" }}>
          <Box sx={{ px: [15, 30], py: [30, 30] }}>
            <Heading as="h3" variant="bottom">
              {post.title}
            </Heading>
            <Paragraph variant="bottom">{post.description}</Paragraph>
            <Text variant="bottom">
              <Link href={post.path}>
                <a
                  onClick={() => {
                    setPrimaryNav(false);
                  }}
                >
                  <Button
                    sx={{ mb: 10 }}
                    variant="secondary"
                    onClick={() => {
                      setPrimaryNav(false);
                    }}
                  >
                    {post.desc}
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
      );

      })} */}

        {/* <Card bg="muted" sx={{ overflow: "hidden" }}>
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
      </Card> */}
      </Grid>
    </div>
  );}