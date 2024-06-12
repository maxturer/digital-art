import * as React from 'react';
import Layout from "../components/layout";
import Media from "../components/media";
import Slides from "../components/slides";

const Generative = () => {
  const genSlides = [
    `<h1>You don't have to do math during this presentation, but it is nice to look at.</h1>
    <h2>Featured: <i>240117a</i> by takawo, 2024</h2>
    <p><a href="https://openprocessing.org/sketch/2148100" target="_blank" rel="noopener noreferrer">via OpenProcessing</a></p>
     `,
     `
    <h1>Principles of composition</h1>
    <p id="ref">"An artist arranges the different elements of an artwork so as to bring them into a relationship satisfactory to them and, it is hoped, the viewer." (<a href="https://www.tate.org.uk/art/art-terms/c/composition" target="_blank" rel="noopener noreferrer">Tate Modern</a>)</p>
    <ul>
      <li>balance</li>
      <li>movement</li>
      <li>rhythm</li>
      <li>emphasis</li>
      <li>contrast</li>
      <li>repetition</li>
      <li>proportion</li>
    </ul>
    `,
    `
    <h1>Composing with algorithms</h1>
    <div class="columns">
      <div>
        <h2>Rule of thirds</h2>
        <p>Picture a canvas divided into 9 equal parts and place compositional elements equally along these lines.</p>
        <h2>60-30-10</h2>
        <p>Balance elements or colors for cohesion using 60% of one element, 30% of a secondary element, and 10% of an accent.</p>
      </div>
      <div>
        <h2>Movement</h2>
        <p><a href="https://easings.net/" target="_blank" rel="noopener noreferrer">Easing functions</a> programmatically draw the viewer's eye around the canvas.</p>
        <h2>Movement (literal)</h2>
        <p>Utilities like p5js's <a href="https://p5js.org/reference/#/p5/draw" target="_blank" rel="noopener noreferrer">draw()</a> and <a href="https://p5js.org/reference/#/p5/frameRate" target="_blank" rel="noopener noreferrer">frameRate()</a> functions allow artists to control the movement of their composition in real-time.</p>
      </div>
    </div>
    `
  ];

  return (
    <Layout 
    pageTitle="Generative"
    titleId="generative"
    subtitle="Math is beautiful!">
      <Media pageMedia="https://openprocessing.org/sketch/2148100/embed/" mediaId="generative" embedded={true} />
      <Slides slideContent={genSlides} slideSize="generative" />
    </Layout>
  )
};

export const Head = () => (
    <>
      <title>Digital Art: Generative Art</title>
      <body className="generative" />
    </>
  );

export default Generative;