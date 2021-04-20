/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Markdown from 'react-markdown';
import _ from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';

function Fotografia({ children, description }) {
  return (
    <div
      className="row align-items-center fotografia-container w-100 bg-white"
    >
      <div className="col-12 col-md-4">

        {description
        !== 'NO DIDASCALIA' && (
          <Markdown className="px-3">
            {description}
          </Markdown>
        )}
      </div>
      <div className="col-12 col-md-8 text-center ">
        {children}
      </div>
    </div>
  );
}

export default function Lettera({
  data: { images: { nodes: images } },
  pageContext,
}) {
  const {
    descrizione, titolo, lettera, filenames,
  } = pageContext;

  const immagini = [];
  images.forEach((image) => {
    const immagine = pageContext.immagini.find(
      ({ lettera, autore }) => image.relativePath
        === `${lettera.toLocaleString('en-US',
          { minimumIntegerDigits: 2, useGrouping: false })} ${_.startCase(
          _.toLower(autore),
        )}.jpg`,
    );

    immagine.childImageSharp = image.childImageSharp;
    if (immagine) immagini.push(immagine);
  });

  console.log('Filenames expected: ', filenames);
  if (filenames.length > images.length) {
    console.warn(
      `${filenames.length - images.length} missing in letter ${lettera}`,
      'Missing: ',
      pageContext.filenames.filter(
        (i) => images.findIndex(
          ({ relativePath }) => i === relativePath,
        ) === -1,
      ),
    );
  } else if (filenames.length !== 26) {
    console.warn('Images number is not 26.', `Found: ${filenames.length}`);
  }

  return (
    <Layout>
      <SEO description={descrizione} title="Lettera" />

      <section className="position-relative">
        <div className="row" style={{ minHeight: '75vh' }}>
          <div
            id="scroller"
            className="col-12 col-lg-9 position-relative "
            style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}
          >
            {immagini.map((immagine) => (
              <Fotografia key={immagine.id} description={immagine.descrizione}>
                <img
                  src={immagine.childImageSharp.fluid.src}
                  sizes={immagine.childImageSharp.fluid.sizes}
                  srcSet={immagine.childImageSharp.fluid.srcSet}
                  className="img-fluid"
                  style={{ height: '75vh' }}
                />
              </Fotografia>
            ))}
          </div>
          <div className="col-12 col-lg-3 align-self-center text-center">
            <h1>{titolo}</h1>
            <h3>
              {lettera}
              /26
            </h3>
          </div>
        </div>

      </section>
    </Layout>
  );
}

export const query = graphql`
query Immagini($filenames: [String]) {
  images: allFile(filter: {sourceInstanceName: {eq: "fotografie"}, relativePath: {in: $filenames}}) {
    nodes { 
      id
      relativePath
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
}`;
