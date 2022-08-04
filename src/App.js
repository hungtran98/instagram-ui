import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { Component, useState } from 'react'
import React from 'react'

import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import Content from '~/components/Contents'


function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{padding: 30}}>
      {/* <button onClick={()=> setShow(!show)}>toggle</button>
      {show && <Content />} */}
      <h3>React Router</h3>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
             <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Content />
      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/news' element={<News />} />/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}
//lkmdsmds dsdddddddddddddddddddddddddd;l;lkds              dsdsd;k;lldkdkd;l;ls



export default App;
