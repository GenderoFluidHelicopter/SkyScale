import './App.css';
import { Routes, Route } from 'react-router-dom';
import API from './components/API';
import IntroPanel from './components/IntroPanel';
import SideBar from './components/Sidebar';
import Concl from './components/Pages';
import Articles from './components/Articles';
import Terms from './components/Articles_terms'
import Upscale from './components/Upscale';
import Interpolation from './components/Interpolation';
import Art from './components/Art'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path="intro" element={<IntroPanel/>} />
        <Route path="api" element={<API/>} />
        <Route path="pgs" element={<Concl/>} />
        <Route path="art" element={<Articles/>} />
        <Route path="trm" element={<Terms/>} />
        <Route path="pscl" element={<Upscale/>} />
        <Route path="ntrp" element={<Interpolation/>} />
        <Route path="arts" element={<Art/>} />

      </Routes>
    </div>
  );
}

export default App;
