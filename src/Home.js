import './App.css';
import Feature from './Feature';
import About from './About';
import Access from './Access';

function Home() {
  return (
    <div className="App">
      <About />
      <Feature />
      <Access />
    </div>
  );
}

export default Home;
