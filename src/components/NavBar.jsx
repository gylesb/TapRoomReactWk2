import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#3CC6FF',
      borderRadius: '20px'
    }}>
      <div className="col-md-4">
        <a href='/#/about'>Home</a>
      </div>
      <div className="col-md-4">
        <a href='/#/kegs'>View Kegs</a>
      </div>
      <div className="col-md-4">
        <a href='/#/contact'>Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
