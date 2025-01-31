import { Inter } from 'next/font/google';
import '../common/style/globals.css';
import Navbar from 'src/common/component/navbar/Navbar';
import Footer from 'src/common/module/Footer';
import { Providers } from 'src/common/component/element/Providers';
import { analytics } from '../common/module/firebase-config';
/* eslint-disable */

// Initialize Inter font (adjust options as needed)
const interFont = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'fulcrum^4',
  description: 'Bridging the Talent-Tech Gap',
};

export default function RootLayout({ children }) {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAsTM8ffi9SsYqoHCGuTcOCTZyoHTHQ_5M",
  //   authDomain: "fulcrum4-7eb0b.firebaseapp.com",
  //   projectId: "fulcrum4-7eb0b",
  //   storageBucket: "fulcrum4-7eb0b.appspot.com",
  //   messagingSenderId: "1005206569426",
  //   appId: "1:1005206569426:web:911957ae7d806f8c44880b",
  //   measurementId: "G-HFZC0B2V9P"
  // };
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HFZC0B2V9P';
  //   document.body.appendChild(script);

  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() { dataLayer.push(arguments); }
  //   gtag('js', new Date());
  //   gtag('config', 'G-HFZC0B2V9P');
  // }, []);
  // useEffect(() => {
  //   // Creating the script tag
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.async = true;
  //   script.src = "https://www.clarity.ms/tag/" + "lrkrx5eqze";
  //   script.id = "ms-clarity"; // Assigning the ID here

  //   // Inserting the script tag into the document
  //   document.body.appendChild(script);

  //   // This function will be executed immediately to setup Clarity
  //   (function(c,l,a,r,i,t,y){
  //       c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
  //   })(window, document, "clarity", "script", "lrkrx5eqze");

  //   // Cleanup function to remove the script when the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);



  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      {/* <Partytown debug={true} /> */}
      <meta property="og:title" content="fulcrum^4" />
      <meta property="og:description" content="Bridging the Talent-Tech Gap" />
      <meta property="og:image" content="/fb-og-image.jpg" />
      <meta property="og:url" content="https://fulcrum4.io//" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="fulcrum^4" />
      <meta content="fulcrum^4" property="twitter:title"/>
      <meta content="Bridging the Talent-Tech Gap" property="twitter:description" />
      <meta content="/twitter-card.jpg" property="twitter:image" />
      <meta content="fulcrum^4" name="twitter:card" />
      <meta name="twitter:site" content="@fulcrum^4" />
      <meta name="twitter:creator" content="@fulcrum^4" />
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
