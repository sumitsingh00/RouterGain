import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Support from './page/Support';
import About from './page/About';
import Labs from './page/Labs';
import NotFound from './page/NotFound';
// import { Link } from 'react-router-dom';
import MainHeader from './page/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* NavLink add a active class  */}
            <NavLink to="/">Home</NavLink> 
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>



      <Routes>
        <Route path="/" element={<MainHeader/>} >
          {/* Default Route */}
          <Route index element={<Home/>} />
          // index use as default router

          <Route path="/support" element={<Support/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
