import './App.css';
import { Routes, Route } from 'react-router-dom';
import API from './components/API';
import IntroPanel from './components/IntroPanel';
import SideBar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path="intro" element={<IntroPanel/>} />
        <Route path="api" element={<API/>} />
      </Routes>
    </div>
  );
}

export default App;
