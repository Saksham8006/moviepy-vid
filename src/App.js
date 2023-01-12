import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  import SharedComponents from './components/SharedComponents'
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import VideoEditor from './Pages/VideoEditor';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';


function App() {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route path="/" element={<SharedComponents />} /> */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video" element={<VideoEditor />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;