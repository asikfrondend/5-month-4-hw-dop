import { Routes, Route, Link } from "react-router-dom";
import Aboutpage from './pages/Aboutpage'; 
import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage';



function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </>
  );
}

export default App;
