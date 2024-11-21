import React from "react";
import PropType from "prop-types";

function ReusableForm(props) {
  const { buttonText, handleFormSubmission, expense } = props;
  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmission}>
        <div>
          <label for="expenseDate">Date: </label>
          <input
            type="date"
            placeholder={expense ? expense.expenseDate : "2023-02-02"}
            name="expenseDate"
          />
        </div>

        <div>
          <label for="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            placeholder={expense ? expense.amount : 10}
          />
        </div>

        <div>
          <label for="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder={expense ? expense.description : "Salary"}
          />
        </div>

        <div>
          <label for="expenseType">Type: </label>
          <select
            name="expenseType"
            placeholder={expense ? expense.expenseType : "INCOME"}
          >
            <option value="INCOME">INCOME</option>
            <option value="EXPENSE">EXPENSE</option>
          </select>
        </div>
        <button type="submit" className="button">
          {buttonText}
        </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropType.string,
  handleFormSubmission: PropType.func,
  expense: PropType.object,
};

export default ReusableForm;
