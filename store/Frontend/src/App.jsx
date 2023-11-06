
import './App.css';
import Campaigns from './components/Campaigns/Campaigns';
import Categories from './components/Categories/Categories';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Policy from './components/Layout/Policy/Policy';
import Products from './components/Products/Product';
import Sliders from './components/Slider/Sliders';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <Sliders></Sliders>
        <Categories></Categories>
        <Campaigns></Campaigns>
        <Products></Products>
       <Policy></Policy>
       <Footer></Footer>
    </div>
  );
}

export default App;
