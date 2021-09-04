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

import Navbar from "./components/Navbar";
import MainDash from './components/MainDash'
import ScrollToTop from "./utils/ScrollToTop";
import './static/css/App.css'
import Loader from './components/Loader'
import Report from "./components/Report";
import TestControl from "./components/TestControl";

export const PortfolioContext = React.createContext({})

function App() {
  const [getPortfolioById, { loading: loadingSingle }] = useLazyQuery(GET_PORTFOLIO_BY_ID, {
    onCompleted: (data) => {
      setCurrentPortfolio(data.getPortfolioById)
    },
    onError: (error) => {
      return setTimeout ((error) => {
        toast.error('Ошибка!');
      }, 100)
    }
  });

  const {loading: loadingAll, refetch: refetchAll} = useQuery(GET_ALL_PORTFOLIOS, {
    onCompleted: (data) => {
        setPortfolios(data.getAllPortfolios)
        getPortfolioById({
          variables: {
            id: data.getAllPortfolios[0].id
          }
        })
    },
    onError: (error) => {
      return setTimeout ((error) => {
        toast.error('Ошибка!');
      }, 100)
    }
  })
  const [portfolios, setPortfolios] = useState([])
  const [currentPortfolio, setCurrentPortfolio] = useState([])

  const contextValues = {
    portfolios, setPortfolios,
    currentPortfolio, setCurrentPortfolio,
    getPortfolioById
  }

  return (
    <Router>
      <PortfolioContext.Provider value={contextValues}>
        <div className="App">
          <Toaster />
          <Loader color={"#000"} loading={loadingAll} />
          <Loader color={"#000"} loading={loadingSingle} />
          <Navbar />

          <ScrollToTop />
          <Switch>
            <Route exact path="/"><MainDash /></Route>
            <Route exact path="/report"><Report /></Route>
          </Switch>
        </div>
      </PortfolioContext.Provider>
    </Router>
  );
}

export default App;
