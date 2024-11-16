import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({ formVisibleOnPage: false, selectedTicket: null });
    } else {
      this.setState((previousState) => ({
        formVisibleOnPage: !previousState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(
      (ticket) => ticket.id === id
    )[0];
    this.setState({ selectedTicket: selectedTicket });
  };
  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(
      (ticket) => ticket.id !== id
    );
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null,
    });
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      currentVisibleState = (
        <TicketDetail
          ticket={this.state.selectedTicket}
          onClickingDelete={this.handleDeletingTicket}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = (
        <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      );
      buttonText = "View Ticket List";
    } else {
      currentVisibleState = (
        <TicketList
          ticketList={this.state.mainTicketList}
          onTicketSelection={this.handleChangingSelectedTicket}
        />
      );
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
