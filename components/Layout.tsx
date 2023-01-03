import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';
// import Script from 'next/script';

import styles from '@styles/Home.module.css';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = 'TJ Pavaritpong',
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="TJ Pavaritpong" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="TJ Pavaritpong" />
        <meta
          property="og:description"
          content="I'm a Statistics & Computer Science undergrad at the University of Illinois Urbana-Champaign, expected to graduate in December 2024."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pavaritpong.com" />
        <meta
          property="og:image"
          content="https://www.pavaritpong.com/img/preview.webp"
        />
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between" alignContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
