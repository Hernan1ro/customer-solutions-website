import { Layout } from "../Layout/Layout";
import { HeroServices } from "../containers/HeroServices";
import { Services } from "../containers/Services";

export default function Servicios() {
  return (
    <Layout page="Inicio">
      <HeroServices />
      <Services />
    </Layout>
  );
}
