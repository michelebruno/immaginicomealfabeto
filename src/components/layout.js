import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from './header';

import '../scss/style.scss';

function Layout({ children, hideFooter, containerClass }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://use.typekit.net/qsp3uel.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div>
        <main className={containerClass || 'container-fluid'}>{children}</main>
        {!hideFooter && (
          <footer
            style={{
              marginTop: '2rem',
            }}
            className="container-fluid"
          >
            <div className="row row-cols-4">
              <div
                className="col-12 border border-dark border-left-0 border-right-0 py-2 my-3"
              />
              <div>Politecnico di milano</div>
              <div>
                <p>
                  Corso di Laurea Magistrale
                  Design della Comunicazione
                  <br />
                  Cultura dell’Immagine Digitale

                </p>
              </div>
              <div>Links</div>
              <div>
                <p>
                  Immagini soggette alle tutele di legge in materia di
                  protezione del diritto d’autore e di diritti connessi al suo
                  esercizio.
                </p>
              </div>
            </div>
            {process.env.ENABLE_GATSBY_REFRESH_ENDPOINT && (
              <button
                type="button"
                onClick={() => {
                  fetch('/__refresh', { method: 'POST' });
                }}
              >
                Refresh
              </button>
            )}
          </footer>
        )}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
