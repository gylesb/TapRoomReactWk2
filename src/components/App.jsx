import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import KegList from './KegList';
import Error404 from './Error404';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';

function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: Trebuchet MS;
          padding: 30px;
          background-color: #80DAFF;
        }
      `}</style>
      <NavBar/>
      <Header/>
      <About/>
      <Switch>
        <Route path = '/kegs' component = {KegList} />
        <Route path = '/contact' component = {Contact} />
        <Route component = {Error404} />
      </Switch>
    </div>
  );
}



export default App;
