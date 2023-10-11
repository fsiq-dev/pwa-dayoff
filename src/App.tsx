import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home';

import "antd/dist/reset.css";

function App() {
  return (
    <div className='App'>
      <section>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<div>news</div>} />
          </Routes>
        </Router>
      </section>
    </div>
  )
}

export default App;
