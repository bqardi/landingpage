import PrimaryNavigation from "./components/PrimaryNavigation";
import Gallery from "./components/Gallery";
import Pitch from "./components/Pitch";
import Testimonials from "./components/Testimonials";
import "./style.scss";
import Plans from "./components/Plans";
import Layout from "./components/Layout";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <>
      <PrimaryNavigation />
      <Gallery />
      <Layout>
        <Pitch />
        <Testimonials />
        <Plans />
      </Layout>
      <CookieConsent />
    </>
  );
}

export default App;
