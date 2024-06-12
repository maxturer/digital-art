import * as React from 'react';
import Layout from "../components/layout";
import Media from "../components/media";
import Slides from "../components/slides";
import francine from "../images/francine.png";
import layers from "../images/layers.png";

const Css = () => {
  const cssSlides = [
    `
    <h1>Hundreds and hundreds of div elements</h1>
    <h2>Featured: <i>Francine</i> by Diana Smith, 2020</h2>
    <p><a href="https://diana-adrianne.com/purecss-francine/">diana-adrianne.com/purecss-francine</a></p>
    `,
    `
    <h1>How do you even approach this?</h1>
    <h2>Art foundations!</h2>
    <p id="ref">"When you’re using oil paint, a composition is usually built up using different layers of colour. For example, if you’re painting a portrait, you may start with an area of background colour. On top of this you may sketch out the proportions of the portrait with another colour, and on top of that you may add further colours for the detail." (<a href="https://www.winsornewton.com/na/education/guides/understanding-the-3-oil-painting-rules/">Windsor & Newton</a>)</p>
    `,
    `
    <h1>Layering In Oil Painting</h1>
    <div class="columns">
        <div>
            <h2>Large scale to small</h2>
            <p>Large shapes & composition concepts in earlier layers, details and accents in later layers</p>
        </div>
        <div>
            <h2>"Fat over lean"</h2>
            <p>Each layer should involve more medium than the former (oil, paint, pigment, etc)</p>
        </div>
    </div>
    `,
    `
    <h1>Layering In CSS Art</h1>
    <div class="columns">
        <div>
            <h2>Nesting elements</h2>
            <p>"Parent" elements contain larger shapes or concepts (ex: headpiece), "child" elements contain each shape's progressive details and attributes (ex: pearls)</p>
        </div>
        <div>
            <h2>"Fat over lean"</h2>
            <p>"Child" elements have more style attributes, such as gradients, border manipulation, and opacity adjustments.</p>
        </div>
    </div>
    `,
    `
    <h1>Paint layering at a glance</h1>
    <img src=${layers} alt="diagram representing layering of oil paint" />
    `,
    `
    <h1>Just Francine's headpiece at a glance</h1>
        <div class="columns">
            <div class="html-col">
                <h2>HTML</h2>
                <textarea readonly class="scroll">
<div class="pearlstring right long">
                            <div class="pearl pearl0"></div>
                            <div class="pearl pearl1"></div>
                            <div class="pearl pearl2"></div>
                            <div class="pearl pearl3"></div>
                            <div class="pearl pearl4"></div>
                            <div class="pearl pearl5"></div>
                            <div class="pearl pearl6"></div>
                            <div class="pearl pearl7"></div>
                            <div class="pearl pearl8"></div>
                            <div class="pearl pearl9"></div>
                            <div class="pearl pearl11"></div>
                            <div class="pearl pearl10"></div>
                        </div>

                        <div class="pearlstring right short">
                            <div class="pearl pearl0"></div>
                            <div class="pearl pearl1"></div>
                            <div class="pearl pearl2"></div>
                            <div class="pearl pearl3"></div>
                            <div class="pearl pearl4"></div>
                            <div class="pearl pearl5"></div>
                            <div class="pearl pearl6"></div>
                            <div class="pearl pearl7"></div>
                            <div class="pearl pearl8"></div>

                        </div>

                        <div class="pearlstring left long">
                            <div class="pearl pearl0"></div>
                            <div class="pearl pearl1"></div>
                            <div class="pearl pearl2"></div>
                            <div class="pearl pearl3"></div>
                            <div class="pearl pearl4"></div>
                            <div class="pearl pearl5"></div>
                            <div class="pearl pearl6"></div>
                            <div class="pearl pearl7"></div>
                            <div class="pearl pearl8"></div>
                            <div class="pearl pearl9"></div>

                            <div class="pearl pearl23"></div>
                            <div class="pearl pearl22"></div>
                            <div class="pearl pearl21"></div>
                            <div class="pearl pearl20"></div>
                            <div class="pearl pearl19"></div>
                            <div class="pearl pearl18"></div>
                            <div class="pearl pearl17"></div>
                            <div class="pearl pearl16"></div>
                            <div class="pearl pearl15"></div>
                            <div class="pearl pearl14"></div>
                            <div class="pearl pearl13"></div>
                            <div class="pearl pearl12"></div>
                            <div class="pearl pearl11"></div>
                            <div class="pearl pearl10"></div>
                        </div>

                        <div class="pearlstring left short">
                            <div class="pearl pearl0"></div>
                            <div class="pearl pearl1"></div>
                            <div class="pearl pearl2"></div>
                            <div class="pearl pearl3"></div>
                            <div class="pearl pearl4"></div>
                            <div class="pearl pearl5"></div>
                            <div class="pearl pearl6"></div>
                            <div class="pearl pearl7"></div>
                            <div class="pearl pearl8"></div>
                            <div class="pearl pearl9"></div>

                            <div class="pearl pearl23"></div>
                            <div class="pearl pearl22"></div>
                            <div class="pearl pearl21"></div>
                            <div class="pearl pearl20"></div>
                            <div class="pearl pearl19"></div>
                            <div class="pearl pearl18"></div>
                            <div class="pearl pearl17"></div>
                            <div class="pearl pearl16"></div>
                            <div class="pearl pearl15"></div>
                            <div class="pearl pearl14"></div>
                            <div class="pearl pearl13"></div>
                            <div class="pearl pearl12"></div>
                            <div class="pearl pearl11"></div>
                            <div class="pearl pearl10"></div>
                        </div>
                </textarea>
            </div>
            <div class="css-col">
                <h2>CSS</h2>
                <textarea readonly class="scroll">
                        .pearlstring {
                            border-radius: ~ '0 0 50% 50% / 0 0 100% 100%';
                            border-color: #a9864b;
                            // border-style: solid;
                            border-width: 0 1px 1px 1px;

                            &.left {
                                border-style: solid;
                                top: -18%;
                                left: -12%;
                                width: 66%;
                                transform: rotate(8deg);

                                &.short {
                                    height: 10%;
                                }

                                &.long {
                                    height: 23%;
                                }

                                .pearl0 {
                                    background-color: darken(@wrapcolor, 15%);
                                }

                                .pearl1 {
                                    background-color: darken(@wrapcolor, 12%);
                                }

                                .pearl2 {
                                    background-color: darken(@wrapcolor, 9%);
                                }

                                .pearl3 {
                                    background-color: darken(@wrapcolor, 6%);
                                }

                                .pearl4 {
                                    background-color: darken(@wrapcolor, 3%);
                                }
                            }

                            &.mid {
                                height: 20%;
                                width: 28%;
                                left: 35%;
                                top: 3%;
                                transform: rotate(-30deg);

                                .pearl {
                                    width: 10px;
                                    height: 8px;
                                }
                            }

                            &.right {
                                width: 60%;
                                left: 114%;
                                top: -24%;
                                transform: rotate(-31deg);

                                .pearl {
                                    background-color: darken(@wrapcolor, 30%);
                                }

                                &.short {
                                    height: 10%;

                                    .pearl8 {
                                        background: darken(@wrapcolor, 45%);
                                        box-shadow: none;
                                    }

                                    .pearl7 {
                                        background-color: darken(@wrapcolor, 35%);
                                        box-shadow: none;
                                    }
                                }

                                &.long {
                                    height: 21%;

                                    .pearl11 {
                                        box-shadow: none;
                                        background: darken(@wrapcolor, 55%);
                                    }

                                    .pearl10 {
                                        background-color: darken(@wrapcolor, 45%);
                                    }
                                }
                            }

                            .pearl {
                                width: 6px;
                                margin-left: -4px;
                                height: 6px;
                                bottom: 0;
                                border-radius: 50%;
                                background-color: @wrapcolor;
                                background-image: radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.67) 12%, transparent 15%, transparent 51%, rgba(0, 0, 0, 0.45) 70%);
                                box-shadow: 2px 4px 3px -1px rgba(0, 0, 0, 0.45);

                                &.pearl0 {
                                    top: 0;
                                    left: 0;
                                }

                                &.pearl1 {
                                    top: 13%;
                                    left: 1%;
                                }

                                &.pearl2 {
                                    top: 25%;
                                    left: 3%;
                                }

                                &.pearl3 {
                                    top: 38%;
                                    left: 6%;
                                }

                                &.pearl4 {
                                    top: 50%;
                                    left: 10%;
                                }

                                &.pearl5 {
                                    top: 61%;
                                    left: 14%;
                                }

                                &.pearl6 {
                                    top: 71%;
                                    left: 19%;
                                }

                                &.pearl7 {
                                    top: 77%;
                                    left: 24%;
                                }

                                &.pearl8 {
                                    top: 84%;
                                    left: 29%;
                                }

                                &.pearl9 {
                                    top: 89%;
                                    left: 34%;
                                }

                                &.pearl10 {
                                    top: 91%;
                                    left: 39%;
                                }

                                &.pearl11 {
                                    top: 95%;
                                    left: 44%;
                                }

                                &.pearl12 {
                                    top: 95%;
                                    left: 50%;
                                }

                                &.pearl13 {
                                    top: 92%;
                                    left: 56%;
                                }

                                &.pearl14 {
                                    top: 89%;
                                    left: 62%;
                                }

                                &.pearl15 {
                                    top: 86%;
                                    left: 67%;
                                }

                                &.pearl16 {
                                    top: 80%;
                                    left: 73%;
                                }

                                &.pearl17 {
                                    top: 73%;
                                    left: 78%;
                                }

                                &.pearl18 {
                                    top: 66%;
                                    left: 83%;
                                }

                                &.pearl19 {
                                    top: 55%;
                                    left: 88%;
                                }

                                &.pearl20 {
                                    top: 44%;
                                    left: 93%;
                                }

                                &.pearl21 {
                                    top: 31%;
                                    left: 97%;
                                }

                                &.pearl22 {
                                    top: 19%;
                                    left: 99%;
                                }

                                &.pearl23 {
                                    top: 7%;
                                    left: 100%;
                                }
                            }
                        }
                </textarea>
            </div>
        </div>
   `
  ];

  return (
    <Layout 
    pageTitle="CSS Art"
    titleId="css"
    subtitle="Creating art out of the web">
      <Media pageMedia={francine} mediaId="francine" embedded={false} />
      <Slides slideContent={cssSlides} slideSize="css" />
    </Layout>
  )
};

export const Head = () => (
    <>
      <title>Digital Art: CSS Art</title>
      <meta name="description" content="description" />
      <body className="css" />
    </>
  );

export default Css;