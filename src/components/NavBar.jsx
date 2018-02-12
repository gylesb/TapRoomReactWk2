import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#3CC6FF',
        borderWidth: '2px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '5px'
      }}>
      <div className="col-md-3">
        <a href='/'>Home</a>
      </div>
      <div className="col-md-3">
        <a href='/#/kegs'>View Kegs</a>
      </div>
      <div className="col-md-3">
        <a href='/#/edit'>Edit Kegs</a>
      </div>
      <div className="col-md-3">
        <a href='/#/new'>New Kegs</a>
      </div>
    </div>
  );
}

export default NavBar;
