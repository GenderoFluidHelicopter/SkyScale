import './App.css';
import { Routes, Route } from 'react-router-dom';
import API from './components/API';
import IntroPanel from './components/IntroPanel';
import SideBar from './components/Sidebar';
import Concl from './components/Pages';
import Articles from './components/Articles';


function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path="intro" element={<IntroPanel/>} />
        <Route path="api" element={<API/>} />
        <Route path="pgs" element={<Concl/>} />
        <Route path="art" element={<Articles/>} />
      </Routes>
    </div>
  );
}

export default App;
