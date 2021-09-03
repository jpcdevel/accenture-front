import React from 'react'
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Navbar from "./components/Navbar";
import MainDash from './components/MainDash'
import ScrollToTop from "./utils/ScrollToTop";
import './static/css/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <Navbar />

        <ScrollToTop />
        <Switch>
          <Route exact path="/"><MainDash /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
