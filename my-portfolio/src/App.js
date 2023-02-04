import NavBar from './components/NavBar';
import Home from "./components/Home"
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Home />
      <Work />
      <Contact />
    </div>
  </BrowserRouter>
  );
}

export default App;
