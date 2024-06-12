import * as React from "react";
import Layout from "../components/layout";
import Media from "../components/media";
import Slides from "../components/slides";

const Try = () => {
  const trySlides = [
    `<h1>Every resource on the internet, probably</h1>
    <h2>Terkelg's Awesome Creative Coding</h2>
    <p>An impressively comprehensive <a href="https://github.com/terkelg/awesome-creative-coding" target="_blank" rel="noopener noreferrer">github repository</a> full of tutorials, resources, and documentation</p>`,
    `
    <h1>Making your own creative coding piece</h1>
    <h2>Let's see what a creative coding project can look like via the p5.js web editor.</h2>
    <p>We'll start with <a href="https://editor.p5js.org/maxturer/sketches/fD0dcDL1gZ" target="_blank" rel="noopener noreferrer">this sketch</a>, <br/>then end up somewhere like <a href="https://editor.p5js.org/maxturer/sketches/SQzbN4mjd" target="_blank" rel="noopener noreferrer">this sketch</a> (spoilers!).</p>
    `,
    `
    <h1>Featured Artwork</h1>
    <h2><i>Sleep Well Beast</i> by Casey Reas, 2017</h2>
    <p><a href="https://youtu.be/kwraJAssyuE" target="_blank" rel="noopener noreferrer">Music video for The National</a></p>
    `
];

  return (
    <Layout 
    pageTitle="Try it!"
    titleId="tryit"
    subtitle="Getting started with creative coding">
      <Media pageMedia="https://reas.com/sleep_well_beast/reas_sleep_well_beast_2.jpg" mediaId="try" embedded={false} />
      <Slides slideContent={trySlides} slideSize="home" />
    </Layout>
  )
};

export const Head = () => (
  <>
    <title>Digital Art: Try it</title>
    <body className="tryit" />
  </>
);

export default Try;