import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you sure you would like to Insert a new keg?</p>
      <button onClick = {props.onNewKegConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onNewKegConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
