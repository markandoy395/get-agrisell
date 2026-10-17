import { DownloadProvider } from "./DownloadProvider.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Experience from "./components/Experience.jsx";
import Installation from "./components/Installation.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <DownloadProvider>
      <Header />
      <main id="main">
        <Hero />
        <Benefits />
        <Experience />
        <Installation />
      </main>
      <Footer />
    </DownloadProvider>
  );
}
