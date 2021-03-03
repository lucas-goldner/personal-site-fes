import Head from "next/head";
import Layout from "../container/Layout";
import "../styles/styles.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Goldner Persona(l) Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </div>
  );
}
