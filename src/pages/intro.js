import * as React from 'react';
import Layout from "../components/layout";
import Media from "../components/media";
import Slides from "../components/slides";
import joan_tr from "../images/joan-truckenbrod.jpeg";

const IntroPage = () => {
  const introSlides = [
    `<h1>What is creative coding?</h1>
    <p id="quotation"><i>"a type of computer programming in which the goal is to create something expressive instead of something functional"</i> (<a href="https://en.wikipedia.org/wiki/Creative_coding">Wikipedia</a>)</p>`,
    `
    <h1>Does that affect development?</h1>
    <div class="columns">
      <div>
        <h2>Conventional Development</h2>
        <ul>
          <li>Plan functionality</li>
          <li>Implement functionality</li>
          <li>Plan design</li>
          <li>Implement design</li>
        </ul>
      </div>
      <div>
        <h2>Creative Coding Development</h2>
        <ul>
          <li>Plan design</li>
          <li>Implement design</li>
          <li>(Optional) Add functionality</li>
        </ul>
      </div>
    </div>`,
    `
    <h1>Some Types of Creative Coding</h1>
    <div class="columns">
      <div>
        <h2>CSS Art</h2>
        <p>Uses pure CSS or SASS to create art out of styled HTML elements</p>
        <p>All you need is a keyboard, a blank web page, and an idea.</p>
      </div>
      <div>
        <h2>Generative Art</h2>
        <p>Uses programming languages and mathematical expressions to create visuals and/or animations</p>
        <p>Popular libraries: <br/> <a href="https://processing.org/" target="_blank" rel="noopener noreferrer">Processing</a> (mainly Java),<br/> <a href="https://generativepy.com/book/what-is/" target="_blank" rel="noopener noreferrer">generativepy</a> (Python), <br/> <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">p5js</a> (JavaScript)</p>
      </div>
    </div>
    `,
    `<h1>Featured Artwork</h1>
    <h2><i>Electronic Patchwork</i> by Joan Truckenbrod, 1978</h2>
    <p><a href="https://joantruckenbrod.com/gallery/#(grid|filter)=.coded;(grid|popup)=artwork/joan-truckenbrod-algorithmic-art-57.jpg;" target="_blank" rel="noopener noreferrer">joantruckenbrod.com/gallery</a></p>`
  ];

  return (
    <Layout 
    pageTitle="Introduction"
    titleId="intro"
    subtitle="What is creative coding, and how do I do it?">
      <Media pageMedia={joan_tr} mediaId="intro" embedded={false} />
      <Slides slideContent={introSlides} slideSize="intro" />
    </Layout>
  )
};

export const Head = () => (
    <>
      <title>Digital Art: Introduction</title>
      <meta name="description" content="description" />
      <body className="intro" />
    </>
  );

export default IntroPage;