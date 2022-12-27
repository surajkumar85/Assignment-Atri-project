import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Blog" element={<Blog />} />
<Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}
