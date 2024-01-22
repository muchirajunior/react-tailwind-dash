import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { authRoutes, routes } from './utils/routes.ts';
import Layout from './layout/layout.tsx';
import { isLoggedIn } from './signals/auth.ts';

export default function App () {

  return (
    <Router >
      <Routes>{ isLoggedIn.value ?
        routes.map((route,index)=> <Route path={route.path} key={index} element={< Layout component={ <route.page />} />}  /> ) :
        authRoutes.map((route,index)=> <Route path={route.path} key={index} element={<route.page />}  /> )
      }</Routes>
    </Router>
  );
}