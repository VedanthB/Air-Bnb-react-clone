import Footer from './components/Footer'
import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import React from "react";
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import SearchPage from './screens/SearchPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        

        <Switch>
        <Route path='/search'>
           <SearchPage />
         </Route> 

         <Route path='/' >
            <Home />
         </Route>     
        </Switch>
       
      
      
       <Footer />
      </Router>
     </div>
  );
}

export default App;
