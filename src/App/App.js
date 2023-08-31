
import React from "react";
import{Landing, Layout} from '../Pages'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {
  HOME_PAGE,
  Details_PAGE,
  About_PAGE,
  LOGIN,
  REGISTER,
  SEARCH,
  Profile
  
} from '../Utilies/pathRoute';

import DetailsHouse from '../Pages/DetailsHouse'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import  Login   from '../Pages/Login'
import Register from "../Pages/Register"
import Search from "../Pages/SearchPage"
import Profile from "../pages/Profile"

function App() {
  return (
    <Layout className="App">

      <Routes>
        
          <Route path={HOME_PAGE} element={<Landing />}/>
          <Route path={`${Details_PAGE}/:id`} element={<DetailsHouse />} />
          <Route path={About_PAGE} element={<About />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<SignUp />} />
          <Route path={SEARCH} element={<Search />} />
          <Route path="*" element={<NotFound />} />  
          <Route path={Profile} element={<Profile/>}/>   
      </Routes>
    </Layout>

  );
}

export default App;
