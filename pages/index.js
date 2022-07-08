import { Layout } from "../Layout/Layout";
import styles from "../styles/pages/Index.module.css";
import { Hero } from "../containers/Hero";
import { Facts } from "../containers/Facts";

export default function Home() {
  return (
    <Layout page="Inicio">
      <Hero />
      <Facts />
    </Layout>
  );
}
