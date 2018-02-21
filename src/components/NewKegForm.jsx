import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alc = null;

  function handleNewKegFormSubmission(event) {
    event.PreventDefault();

    props.onNewKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alc: _alc.value,
      id: v4()
    });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alc.value = '';
  }

  return (
    <div>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
          type = 'text'
          id = 'name'
          placeholder = "Name of Beer"
          ref = {(input) => {_name = input;}}/>
        <input
          type = 'text'
          id = 'brand'
          placeholder = "Brand of Beer"
          ref = {(input) => {_brand = input;}}/>
        <input
          type = 'number'
          id = 'price'
          placeholder = "Price of Beer"
          ref = {(input) => {_price = input;}}/>
        <input
          type = 'text'
          id = 'alc'
          placeholder = "Alcohol Percentage"
          ref = {(input) => {_alc = input;}}/>
        <button type = 'submit'>Insert New Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
