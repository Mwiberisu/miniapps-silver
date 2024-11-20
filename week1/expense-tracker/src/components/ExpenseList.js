import React from "react";
import PropType from "prop-types";

function ExpenseList(props) {
  const expenses = props.expenses;
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <td>DATE</td>
            <td>AMOUNT</td>
            <td>DESCRIPTION</td>
            <td>TYPE</td>
            <td>ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>{expense.type}</td>
              <div>
                <button className="button">EDIT</button>
                <button
                  className="button"
                  style={{ backgroundColor: "hotpink" }}
                >
                  DELETE
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <button className="button">Add Expense</button>
    </React.Fragment>
  );
}

ExpenseList.propTypes = {
  expenses: PropType.array,
};
export default ExpenseList;