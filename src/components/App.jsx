import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import KegList from './KegList';

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
      <KegList/>
    </div>
  );
}



export default App;
