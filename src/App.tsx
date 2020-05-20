import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TodosPage } from './components/pages/TodosPage';
import { AboutPage } from './components/pages/AboutPage';
import { Piton } from './components/pages/Piton';
import { GalleryTest } from './print/GalleryTest';

function App() {

  return (
  <BrowserRouter>
    <Navbar />
    <div className='container'>
      <switch>
        <Route component={TodosPage} path='/' />
          <Route component={AboutPage} path='/about' />
          <Route component={Piton} path='/piton' />
          {/* <Route component = {GalleryTest} path='/' exact/> */}
      </switch>
    </div>
    
  </BrowserRouter>
  );
}

export default App;
