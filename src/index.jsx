import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App/>}>
              <Route path="/" element ={<Home/>}/>
              <Route path="contact" element ={<Contact/>}/>
              <Route path="detail" element ={<Detail/>}/>
              <Route path="favs" element ={<Favs/>}/>
          </Route>
        </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);


