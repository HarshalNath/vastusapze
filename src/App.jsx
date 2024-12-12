import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
function App() {
  return (
    <main className="overflow-x-hidden  antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </main>
  );
}

export default App;
