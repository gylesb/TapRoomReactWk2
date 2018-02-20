import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {
  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation = {this.props.onNewKegCreation}/>;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
