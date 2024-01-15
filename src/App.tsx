import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes.ts';

export default function App () {
  return (
    <Router >
      <Routes>{ 
        routes.map((route,index)=> <Route path={route.path} key={index} element={<route.page />}  /> )
      }</Routes>
    </Router>
  );
}