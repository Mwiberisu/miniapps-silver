import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formVisibleOnPage: false };
  }

  handleClick = () => {
    this.setState((previousState) => ({
      formVisibleOnPage: !previousState.formVisibleOnPage,
    }));
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewTicketForm />;
      buttonText = "View Ticket List";
    } else {
      currentVisibleState = <TicketList />;
      buttonText = "Add New Ticket";
    }

    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
