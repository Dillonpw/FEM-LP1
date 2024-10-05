import Hero from './components/hero';
import Nav from './components/nav';
import Cta from './components/cta';

function App() {
    return (
        <main>
            <Hero>
                <Nav />
            </Hero>
            <Cta />
        </main>
    );
}

export default App;
