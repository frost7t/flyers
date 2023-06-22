import Destination from "@/Components/Destination";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import Header from "@/Components/header/Header";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Services />
      <Destination />
    </Layout>
  );
}
