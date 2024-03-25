import { Inter } from "next/font/google";
import "../app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Tomer Benaim",
//   description: "Tomer's Portfolio",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" sizes="192x192" href="" type="image/jpeg"></link>
        <link rel="shortcut icon" href="" type="image/jpeg"></link>
        <link rel="apple-touch-icon" href="" type="image/jpeg"></link>
        <title>Tomer Benaim</title>
      </Head>

      {/* <Header /> */}
      <section dir='rtl' className='scroll-smooth relative max-w-[1300px] mx-auto min-h-screen bg-gray-50 px-0'>

        {children}

        {/* <Footer /> */}
      </section>
    </>

  );
}
