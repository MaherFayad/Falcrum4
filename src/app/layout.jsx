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
      <meta property="og:title" content="Falcrum^4" />
      <meta property="og:description" content="Igniting Innovation, Engineering Futures" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/fb-og-image.jpg?alt=media&token=2783c8ab-5fa3-4780-a964-fb1bb4c094f5" />
      <meta property="og:url" content="https://falcrum4-7eb0b.web.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Falcrum^4" />
      <meta content="Falcrum^4" property="twitter:title"/>
      <meta content="Igniting Innovation, Engineering Futures" property="twitter:description" />
      <meta content="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/twitter-card.jpg?alt=media&token=c4dabd3b-0d96-4c09-8d0e-bc513a081e8e" property="twitter:image" />
      <meta content="Falcrum^4" name="twitter:card" />
      <meta name="twitter:site" content="@Falcrum^4" />
      <meta name="twitter:creator" content="@Falcrum^4" />
      <meta property="fb:admins" content="132951670226590" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
