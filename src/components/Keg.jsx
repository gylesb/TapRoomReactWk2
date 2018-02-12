import React from 'react';
import PropTypes from 'prop-types';



function Keg(props){
  return (
    <div style={{borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'black',
      padding: '30px',backgroundColor: '#33C4FF', height: '400px'}}>
      <h5><strong>Name: </strong>{props.name}</h5>
      <h5><strong>Brand: </strong>{props.brand}</h5>
      <h5><strong>Price: </strong>${props.price}</h5>
      <h5><strong>Alcohol Content: </strong>{props.alc}%</h5>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alc: PropTypes.string
};

export default Keg;
