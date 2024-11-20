import React from "react";

function ExpenseList() {
  const expenses = [
    {
      date: "2023-03-02",
      amount: 200,
      description: "salary",
      type: "income",
    },
  ];
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

export default ExpenseList;
