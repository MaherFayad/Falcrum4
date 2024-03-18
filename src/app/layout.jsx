import { Inter } from 'next/font/google';
import '../common/style/globals.css';
import Navbar from 'src/common/component/navbar/Navbar';
import Footer from 'src/common/module/Footer';
import { Providers } from 'src/common/component/element/Providers';
import { Partytown } from '@builder.io/partytown/react';
/* eslint-disable */

// Initialize Inter font (adjust options as needed)
const interFont = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Falcrum^4',
  description: 'Igniting Innovation, Engineering Futures',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Partytown debug={true} />
      <meta
          content="Igniting Innovation, Engineering Futures"
          property="og:title"
      />
      <meta
          content="Falcrum^4"
          property="og:description"
      />
      <meta
          content="/fb-og-image.jpg"
          property="og:image"
      />
      <meta
          property="og:url"
          content=""
      />
      <meta
          property="og:site_name"
          content="Igniting Innovation, Engineering Futures"
      />
      <meta
          content="Igniting Innovation, Engineering Futures"
          property="twitter:title"
      />
      <meta
          content="Falcrum^4"
          property="twitter:description"
      />
      <meta
          content="/twitter-card.jpg"
          property="twitter:image"
      />
      <meta property="og:type" content="Article" />
      <meta content="summary" name="twitter:card" />
      <meta name="twitter:site" content="@Falcrum^4" />
      <meta name="twitter:creator" content="@Falcrum^4" />
      <meta property="fb:admins" content="132951670226590" />
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      </head>
      <body className={`${interFont.className} overflow-x-hidden`}>
        <Providers>
          <div className='flex justify-center items-center'>
            <Navbar />
          </div>
          <div className='w-screen overflow-x-hidden'>
            {children}
          </div>
          <div className='flex justify-center items-center w-full'>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
