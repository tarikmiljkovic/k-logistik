/** @jsxImportSource theme-ui */


import Link from "next/link";
// import Image from 'next/image'


import { useEffect, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

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
  Heading,
  Alert,
  Close,
  NavLink,
} from "theme-ui";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Service from "../components/Service";

export default function Datenschutz() {
  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  useEffect(() => {
    setPrimaryNav(false);
  });

  return (
    <Box>
      <Nav />
      <Container sx={{ px: [4, 4, 4] }}>
        <h1 sx={{ variant: "styles.text.postheading" }}>Datenschutz</h1>
        <h2
          sx={{
            variant: "styles.text.leistungenubheading",
            fontWeight: "300",
          }}
        >
          Datenschutz auf einen Blick.
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Allgemeine Hinweise Die folgenden Hinweise geben einen einfachen
          Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
          wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle
          Daten, mit denen Sie persönlich identifiziert werden können.
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer
          unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung
          auf unserer Website Wer ist verantwortlich für die Datenerfassung auf
          dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch
          den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
          dieser Website entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten
          werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
          Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch
          der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie unsere Website betreten. Wofür nutzen wir Ihre Daten? Ein
          Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
          Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden. Welche Rechte haben Sie bezüglich
          Ihrer Daten? Sie haben jederzeit das Recht unentgeltlich Auskunft über
          Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
          Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
          Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
          weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
          der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
          Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Analyse-Tools und Tools von Drittanbietern Beim Besuch unserer Website
          kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht
          vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die
          Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das
          Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können
          dieser Analyse widersprechen oder sie durch die Nichtbenutzung
          bestimmter Tools verhindern. Detaillierte Informationen dazu finden
          Sie in der folgenden Datenschutzerklärung. Sie können dieser Analyse
          widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in
          dieser Datenschutzerklärung informieren.
        </Paragraph>
        <h2
          sx={{
            variant: "styles.text.leistungenubheading",
            fontWeight: "300",
          }}
        >
          Allgemeine Hinweise und Pflichtinformationen.
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
          Dritte ist nicht möglich.
        </Paragraph>

        <h2
          sx={{
            variant: "styles.text.leistungenubheading",
            fontWeight: "300",
          }}
        >
          Datenerfassung auf unserer Website.
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind: Browsertyp und Browserversion verwendetes
          Betriebssystem Referrer URL Hostname des zugreifenden Rechners Uhrzeit
          der Serveranfrage IP-Adresse Eine Zusammenführung dieser Daten mit
          anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
          Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Webseitenbetreiber hat ein berechtigtes Interesse an der technisch
          fehlerfreien Darstellung und der Optimierung seiner Webseite – hierzu
          müssen die Server-Log-Files erfasst werden.
        </Paragraph>

        {/* <h2
          sx={{
            variant: "styles.text.leistungenubheading",

            fontWeight: "300",
          }}
        >
          Historie
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Das Firma wurde im Jahr 2015 gegrundet.
        </Paragraph> */}
        <Service />
        {/* leistungen={leistungen} */}
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
