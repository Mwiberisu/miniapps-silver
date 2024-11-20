import React from "react";

function ReusableForm(props) {
  const { buttonText } = props;
  return (
    <React.Fragment>
      <Form>
        <input type="date" name="date">
          Date
        </input>
        <button>{buttonText}</button>
      </Form>
    </React.Fragment>
  );
}

export default ReusableForm;
