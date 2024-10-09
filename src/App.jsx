import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Detail from './routes/Details';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />}></Route>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
