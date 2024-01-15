import React from 'react'
import Navbar, {  Navigation } from "./components/navbar/navbar.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App () {

  const navigations : Navigation[] = [
    { navName : "home" , link :"/home" },
    { navName : "about" , link :"/about" },
    { navName : "products" , link :"/home" },
  ];

  return (
    <Router >
      <Routes>
         <Route path='/' element={<Navbar navs={navigations} title="REACT TAILWIND" />} />
      </Routes>
    </Router>
  );
}