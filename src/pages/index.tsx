import { Inter } from "next/font/google";
import Head from "next/head";

import { ContentHome } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Commit Genius</title>
        <meta name="description" content="Commit Genius" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <main>
        <ContentHome />
      </main>
    </>
  );
}
