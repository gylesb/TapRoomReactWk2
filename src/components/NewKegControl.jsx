import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleNewKegConfirmation = this.handleNewKegConfirmation.bund(this);
  }

  handleNewKegConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation = {this.props.onNewKegCreation}/>;
    } else { currentlyVisibleContent = <ConfirmationQuestions onNewKegConfirmation =    {this.handleNewKegConfirmation}/>;
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
