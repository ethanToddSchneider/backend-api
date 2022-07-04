
import NavbarBS from "./components/NavbarBS";
import Footer from "./components/Footer";
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarBS /><br /><br />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
