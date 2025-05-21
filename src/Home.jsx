import './App.css'
import './index.css'
import Overview from './components/Overview';
import Rooibos from './components/Rooibos';
import Header from './components/Header';
import ChooseUs from './components/ChooseUs';
import Supplay from './components/Supplay';
import Specifications from './components/Specifications';
import Contact from './components/Footer';
import Banner from './components/Banner';

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Overview />
      <Rooibos />
      <ChooseUs />
      <Supplay />
      <Specifications />
      <Contact />
    </>
  )
}

export default Home;
