import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import Header from './header';

function Layout({
  children, hideFooter, lettera, ...props
}) {
  const [rendered, setRendered] = useState();

  useEffect(() => setRendered(true), []);

  const { polidesign, favicons, ...data } = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
          polidesign: file(relativePath: {eq: "polimi-logodesign.png"}) {
              childImageSharp {
                  gatsbyImageData(
                      layout: CONSTRAINED
                      width: 500
                      quality: 80
                  )
              }
          }
          favicons: allFile(filter: {relativePath: {regex: "/favicon_(.*)/i"}}) {
              nodes {
                  relativePath
                  childImageSharp{
                      gatsbyImageData(
                          layout: FIXED
                          width: 64
                      )
                  }
              }
          }
      }
  `);

  const classList = [];

  if (props.containerFluid) classList.push('container-fluid');
  if (props.container) {
    classList.push('container');
  }

  const faviconPath = getSrc(favicons.nodes.find(
    ({ relativePath }) => relativePath === `favicon_${lettera}.png`,
  ) || favicons.nodes[favicons.nodes.length - 8]);

  return (
    <>
      <Helmet link={[
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'icon', type: 'image/png', href: faviconPath },
      ]}
      />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div className={rendered ? 'rendered' : undefined}>
        <main
          className={classList.length && classList.join(' ')}
        >
          {children}
        </main>
        {!hideFooter && (
          <>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-12 border border-dark border-start-0 border-end-0 py-2 my-3"
                />

              </div>
            </div>
            <footer
              style={{
                marginTop: '2rem',
              }}
              className="container small"
            >
              <div className="row row-cols-1 row-cols-md-2 gy-3 row-cols-xl-4">
                <div>
                  <GatsbyImage
                    className="w-75"
                    alt="Logo del Politecnico di Milano - Scuola del Design"
                    image={getImage(polidesign)}
                  />
                </div>
                <div>
                  <h6 className="heading-style-regular">© 2021</h6>
                  <p>
                    Corso di Laurea Magistrale
                    <br />
                    Design della Comunicazione
                    <br />
                    Cultura dell’Immagine Digitale
                  </p>
                </div>
                <div>
                  <h6 className="heading-style-regular">Social</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.instagram.com/questionifotografiche/"
                      >
                        @questionifotografiche
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ddc_designdellacomunicazione/"
                      >
                        @DDC
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="heading-style-regular">Copyright</h6>
                  <p>
                    Immagini soggette alle tutele di legge in materia di
                    protezione del diritto d’autore e di diritti connessi al suo
                    esercizio.
                  </p>
                </div>
              </div>
            </footer>
          </>

        )}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
