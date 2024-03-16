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
