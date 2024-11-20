import React from "react";
import PropType from "prop-types";

function ReusableForm(props) {
  const { buttonText } = props;
  return (
    <React.Fragment>
      <form className="form">
        <input type="date" name="date" />

        <button>{buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropType.string,
};

export default ReusableForm;
