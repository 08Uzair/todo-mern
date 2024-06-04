import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
