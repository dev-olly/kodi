import { ComingSoon } from "./components/ComingSoon";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { Departments } from "./components/Departments";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Nav } from "./components/Nav";
import { Roadmap } from "./components/Roadmap";
import { Showcase } from "./components/Showcase";
import { Stats } from "./components/Stats";
import { Ticker } from "./components/Ticker";
import { BG, FG } from "./theme";

export default function App() {
  return (
    <div style={{ background: BG, color: FG, minHeight: "100vh" }}>
      <Cursor />
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Departments />
        <Stats />
        <Showcase />
        <Manifesto />
        <ComingSoon />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
