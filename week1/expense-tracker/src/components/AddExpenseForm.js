import React from "react";
import ReusableForm from "./ReusableForm";
import PropType from "prop-types";
import { v4 } from "uuid";

function AddExpenseForm(props) {
  const { onExpenseAdd } = props;

  function addExpense(event) {
    event.preventDefault();
    onExpenseAdd({
      id: v4(),
      expenseDate: event.target.expenseDate.value,
      amount: event.target.amount.value,
      description: event.target.description.value,
      expenseType: event.target.expenseType.value,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm buttonText="Add" handleFormSubmission={addExpense} />
    </React.Fragment>
  );
}

AddExpenseForm.propTypes = {
  onExpenseAdd: PropType.func,
};

export default AddExpenseForm;
