import * as React from "react";
import Layout from "../components/layout";
import Media from "../components/media";
import Slides from "../components/slides";
import jeff_palmer from "../images/jeff-palmer.png";

const IndexPage = () => {
  const homeSlides = [
    `<h1>Presented by Max Turer</h1>
    <h2>Senior Web Developer, LAI</h2>`,
    `
    <h1>Featured Artwork</h1>
    <h2>Digital Organics: <i>Untitled</i> by Jeff Palmer, 2022</h2>
    <p><a href="https://jpalmer.art/projects/digital-organics/">jpalmer.art/projects/digital-organics</a></p>
    `,
    `<h1>About this site</h1>
    <p id="quotation">Built with Gatsby/React and SASS/CSS</p>
    <p><a href="/">View it on GitHub</a></p>`
];

  return (
    <Layout 
    pageTitle="Digital Art"
    titleId="digitalart"
    subtitle="Intro to Creative Coding for Artists, Programmers, or Both">
      <Media pageMedia={jeff_palmer} mediaId="index" embedded={false} />
      <Slides slideContent={homeSlides} slideSize="home" />
    </Layout>
  )
};

export const Head = () => (
  <>
    <title>Digital Art</title>
    <meta name="description" content="description" />
    <body className="homepage" />
  </>
);

export default IndexPage;