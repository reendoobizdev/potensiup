import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import { content } from "../content/landing";
import FloatingWhatsApp from "../components/Whatsapp";

export default function Home() {
  return (
    <>
      <Head>
        <title>{content.head.title}</title>
        <link rel="icon" href="/assets/potensiup-p.svg" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
      <FloatingWhatsApp/>
    </>
  );
}
