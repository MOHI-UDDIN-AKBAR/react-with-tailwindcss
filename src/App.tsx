import {
  Hero,
  PopularProducts,
  Subscribe,
  Services,
  SpecialOffer,
  SuperQuality,
  Footer,
  CustomerReviews,
} from "./Sections";
import { Nav } from "./Components";
const App = () => {
  return (
    <main className="max-container relative">
      {/* <Nav /> */}
      <section>
        <Hero />
      </section>
      {/* <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section> */}
    </main>
  );
};

export default App;
