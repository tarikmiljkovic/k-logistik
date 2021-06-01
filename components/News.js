/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";

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

export default function News({ posts }) {
  let { primaryNav, setPrimaryNav } = useContext(MainContext);
  return (
    <div>
      <h2>Leistungen</h2>

      <Grid
        gap={3}
        sx={{
          gridTemplateColumns: [
            "1fr", // small
            "1fr 1fr", // medium
            "1fr 1fr", // large
          ],
        }}
      >
        {posts.map((post) => {
          return (

                <Card key={post.path} bg="muted" sx={{ overflow: "hidden" }}>
                  <Link href={post.path}>
              <a sx={{ variant: "links.primary" }}>
                  <Box sx={{ px: [15, 30], py: [30, 30] }}>
                    <Heading as="h3" variant="bottom">
                      {post.title}
                    </Heading>
                    <Paragraph variant="bottom">{post.description}</Paragraph>
                    <Text variant="bottom">
                      <Text>{post.desc}</Text>
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
                      src={`${post.image}`}
                    />
                  </Box>

              </a>
            </Link>
            </Card>
          );
        })}


      </Grid>
    </div>
  );
}
