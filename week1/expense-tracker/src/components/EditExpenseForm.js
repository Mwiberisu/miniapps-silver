import React from "react";
import ReusableForm from "./ReusableForm";
import PropType from "prop-types";

function EditExpenseForm(props) {
  const { expense, onExpenseEdit } = props;
  function editExpense(event) {
    event.preventDefault();
    onExpenseEdit({
      id: expense.id,
      expenseDate: event.target.expenseDate.value
        ? event.target.expenseDate.value
        : expense.expenseDate,
      amount: event.target.amount.value
        ? event.target.amount.value
        : expense.amount,
      description: event.target.description.value
        ? event.target.description.value
        : expense.description,
      expenseType: event.target.expenseType.value
        ? event.target.expenseType.value
        : expense.expenseType,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update"
        handleFormSubmission={editExpense}
        expense={expense}
      />
    </React.Fragment>
  );
}

EditExpenseForm.propTypes = {
  expense: PropType.object,
  onExpenseEdit: PropType.func,
};

export default EditExpenseForm;
