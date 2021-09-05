import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useQuery, useLazyQuery } from "@apollo/client";
import { toast } from "react-hot-toast";

import {GET_ALL_PORTFOLIOS} from "./GraphQL/Queries/getAllProtfolios";
import {GET_PORTFOLIO_BY_ID} from "./GraphQL/Queries/getPortfolioById";
import {GET_ALL_SECURITIES} from "./GraphQL/Queries/getAllSecurities";
import {GET_ALL_VOLUMES} from "./GraphQL/Queries/getAllVolumes";

import Navbar from "./components/Navbar";
import MainDash from './components/MainDash'
import ScrollToTop from "./utils/ScrollToTop";
import './static/css/App.css'
import Loader from './components/Loader'
import Redirect from './components/Redirect'

function App() {

  return (
    <Router>
        <div className="App">
          <Toaster />

          <Navbar />

          <ScrollToTop />
          <Switch>
            <Route exact path="/"><Redirect /></Route>
            <Route exact path="/portfolio/:id"><MainDash /></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
