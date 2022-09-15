import Navbar from "./component/Navbar";
import Searchbar from "./component/Searchbar";
import Home from "./component/Home";
import Hero from "./component/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
