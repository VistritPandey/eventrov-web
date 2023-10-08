import './App.css';
import Feature from './Feature';
import HeaderSection from './HeaderSection';
import Access from './Access';
import Header from './Header';

function Home() {
  return (
    <div className="App">
        <HeaderSection />
        <Feature />
        <Access />
    </div>
  );
}

export default Home;
