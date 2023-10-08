import './App.css';
import Feature from './Feature';
import About from './About';
import Access from './Access';
import Header from './Header';

function Home() {
  return (
    <div className="App">
        <Header />
        <About />
        <Feature />
        <Access />
    </div>
  );
}

export default Home;
