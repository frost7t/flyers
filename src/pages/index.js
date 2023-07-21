import Destination from "@/Components/Destination";
import Experiences from "@/Components/Experiences";
import FlightManager from "@/Components/FlightManager";
import Hero from "@/Components/hero/Hero";
import Services from "@/Components/Services";
import SliderXp from "@/Components/SliderXp";
import Header from "@/Components/header/Header";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Services />
      <Destination />
      <FlightManager />
      <Experiences />
      <SliderXp />
    </Layout>
  );
}
