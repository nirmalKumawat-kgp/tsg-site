import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Wave from "react-wavify";
import { useRouter } from "next/router";

export const siteTitle = "TSG";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Technology Students' Gymkhana" />
        <meta name="description" content="Indian Institute of Technology, Kharagpur" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.gymkhana.iitkgp.ac.in/" />
        <meta property="og:title" content="Technology Students' Gymkhana" />
        <meta property="og:description" content="Indian Institute of Technology, Kharagpur" />
        <meta property="og:image" content="/site_preview.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.gymkhana.iitkgp.ac.in/" />
        <meta property="twitter:title" content="Technology Students' Gymkhana" />
        <meta property="twitter:description" content="Indian Institute of Technology, Kharagpur" />
        <meta property="twitter:image" content="/site_preview.png" />
      </Head>
      <Wave
        className="wave"
        fill="#67ECFD"
        paused={false}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.2,
          points: 3,
        }}
      />
      <Navbar />
      <main>{children}</main>

      {/* Removed footer from the awards page due to some issue due to which footer was ovelapping on to the table, will fix later */}
      {router.pathname != "/hallOfFame" && (
        <div className="footer-container">
          <Footer />
        </div>
      )}
    </div>
  );
}
