import { ComingSoon } from "./components/ComingSoon";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Roadmap } from "./components/Roadmap";
import { Services } from "./components/Services";
import { Statement } from "./components/Statement";
import { Ticker } from "./components/Ticker";
import { BG, FG } from "./theme";

export default function App() {
  return (
    <div className="grain" style={{ background: BG, color: FG, minHeight: "100vh" }}>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Services />
        <Statement />
        <ComingSoon />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
