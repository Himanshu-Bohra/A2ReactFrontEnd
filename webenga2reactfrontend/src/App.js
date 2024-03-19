import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import DateOnly from './APIQueryHandler';
import LoadBG from './loadBgVideo';
import { BrowserRouter as Router, Routes, Route, Link , Outlet} from 'react-router-dom';
import NavBar from './navBar';


//import bg_video from './bg_galaxy.webm';

function App() 
{
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header />
      <LoadBG backGround='./bg_galaxy.webm' />
      {
       // <FetchResponse />
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
