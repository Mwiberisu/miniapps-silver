import React from "react";

import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {" "}
        <input type="text" name="names" placeholder="Pair names" />
        <input type="text" name="location" placeholder="Location" />
        <textarea type="text" name="issue" placeholder="Describe your issue" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.prototypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
