import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>{props.location}</h3>
        <h3>{props.names}</h3>
        <p>
          <em>{props.issue}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}
// data types delarations
Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
};

export default Ticket;
