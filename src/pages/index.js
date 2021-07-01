import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import _ from 'lodash';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as classes from './index.module.scss';

SwiperCore.use([EffectFade]);
const IndexPage = ({ data }) => {
  const images = data.images.nodes.filter((img) => img.childImageSharp.gatsbyImageData.height === (2 / 3));

  const qf = React.useRef();

  return (
    <Layout>
      <SEO title="Home" />
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 px-0 text-center overflow-hidden">
            <h1 className={classes.hero}>
              <div
                className="text-center d-flex mx-auto justify-content-center"
                style={{
                  fontSize: '40vw',
                  lineHeight: 1,
                  letterSpacing: '11px',
                }}
              >
                <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
                  <span className="bg-white">2</span>
                  <span id="hero-spacer" className="d-inline-block" />
                  <span className="bg-white">6</span>
                </span>
              </div>
              <span
                ref={qf}
                id="hero-qf"
                className="position-absolute"
              >
                <div className="w-100 text-start" style={{ fontFamily: 'var(--font-family-sans-serif)', fontStyle: 'initial' }}>
                  questioni
                </div>
                <div className="text-end">
                  fotografiche
                </div>
              </span>
            </h1>
          </div>
        </div>
        <div className="row border-dark border-top border-bottom">
          <div className="col-12">
            <div className="d-block">
              <div className="marquee">
                <div className="marquee__inner h5 py-0 mb-0" aria-hidden="true">
                  {_.times(10, () => <span className="my-1">come le lettere dell'alfabeto / </span>) }
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12 col-md-9 py-5 my-5">
            <p className="display-3 my-5 py-5">
              Questo progetto nasce
              dall’idea di condividere con allievi di diverse estrazioni e
              provenienze, oltre che con alcuni colleghi, amici e maestri nel
              campo
              della fotografia,
              della filosofia e della scrittura,
              una proposta di percorso didattico, frutto delle
              esperienze di insegnamento
              in questi ultimi anni.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Swiper effect="fade">
              {images.map((img) => (
                <SwiperSlide effect="fade" autoPlay>
                  <GatsbyImage image={getImage(img)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12 col-md-4 ">
            <p className="py-5 ">
              Il percorso vuole creare un’occasione per riscoprire, come De
              Maistre
              nel suo “Voyage autour de ma chambre”, i piccoli infiniti che si
              nascondono, ma si possono rivelare e rendere oggetto di narrazione
              visiva, in una scala di paesaggio domestico.
              Un paesaggio ricco di affetti e di storie come scrive anche
              Vittorio
              Lingiardi nel suo “Mindscapes” o come illustra Luigi Ghirri nel
              suo
              lavoro “Identikit”.
            </p>
          </div>
        </div>
        <div className="row align-items-center" style={{ minHeight: '90vh' }}>
          <div className="col-12 text-center py-5">
            <h3 className="display-2">
              <Link to="/alfabeto">Scopri le foto</Link>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`{
  images: allFile(
    filter: {sourceInstanceName: {eq: "fotografie"}}
    sort: {fields: id}
    limit: 20
  ) {
    nodes {
      publicURL
      relativePath
      childImageSharp {
        gatsbyImageData( 
          layout: FULL_WIDTH
          quality: 90
        )
      }
      sourceInstanceName
      size
    }
  }
}`;
