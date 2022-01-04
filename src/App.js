import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/component/Home'
import Latest from '../src/component/Latestproduct'
import CreateSale from '../src/component/createSale'
import Admin from '../src/component/AdminPage'





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/createsale" element={<CreateSale />} />
      <Route path="/admin" element={<Admin />} />



      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
