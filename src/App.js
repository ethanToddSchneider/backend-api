import NavbarBS from "./components/NavbarBS";
import Footer from "./components/Footer";
import Products from './components/Products';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <NavbarBS /><br /><br /><br />
      <Products />
      <Footer />
    </div>
  );
}

export default App;