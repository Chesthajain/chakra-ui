import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from './components/Footer';
import Signup from './components/Signup';
import Videos from './components/Videos';
import Upload from './components/Upload';

function App() {
  return <Router>
      <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />

    <Route />
    </Routes>
    <Footer />
  </Router>
}

export default App;