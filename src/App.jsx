import './App.css'
import './index.css'
import Home from './components/home';
import Overview from './components/Overview';
import Rooibos from './components/Rooibos';
import Header from './components/Header';
import ChooseUs from './components/ChooseUs';
import Supplay from './components/Supplay';
import Specifications from './components/Specifications';

function App() {

  return (
    <>
      {/* <Header /> */}
      <Home />
      <Overview />
      <Rooibos />
      <ChooseUs />
      <Supplay />
      <Specifications />
    </>
  )
}

export default App
