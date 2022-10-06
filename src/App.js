import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Share/Navbar';
import Footer from './Components/Share/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import Contract from './Components/Contract/Contract';
import Blog from './Components/Blog/Blog';
import MySkill from './Components/MySkill/MySkill';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="myPortfolio" element={<MyPortfolio />} />
        <Route path="contract" element={<Contract />} />
        <Route path="blog" element={<Blog />} />
        <Route path="skill" element={<MySkill />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
