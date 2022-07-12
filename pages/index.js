import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/Index.module.css";
import { Hero } from "../containers/Hero";
import { Facts } from "../containers/Facts";
import { Section1 } from "../containers/section1";
import { Solutions } from "../containers/Solutions";
import { Section2 } from "../containers/section2";

export default function Home() {
  return (
    <Layout page="Inicio">
      <Hero />
      <Facts />
      <Section1 />
      <Solutions />
      <Section2 />
    </Layout>
  );
}
