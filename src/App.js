import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import signup from "./components/signup";

function App() {
  return <Router>
      <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<signup />} />
    <Route />
    </Routes>
  </Router>
}

export default App;