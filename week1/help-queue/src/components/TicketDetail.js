import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Ticket Details</h1>
      <h3>{ticket.location}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={props.onClickingEdit}>Update Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default TicketDetail;
