import Hero from "./components/hero";
import Nav from "./components/nav";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <Hero>
        <Nav />
      </Hero>
      <About />
      <Footer />
    </main>
  );
}

export default App;
