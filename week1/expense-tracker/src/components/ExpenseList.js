import React from "react";
import PropType from "prop-types";
import { PieChart } from "react-minimal-pie-chart";

function ExpenseList(props) {
  const {
    savings,
    totalIncome,
    totalExpenses,
    expenses,
    onClickDelete,
    onClickEdit,
    onClickCreate,
  } = props;

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <div className="piechart">
          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: savings < 0 ? "purple" : "blue",
            }}
          >
            Total savings: {savings}
          </p>
          <PieChart
            label={({ dataEntry }) =>
              dataEntry.title + ":" + `${Math.round(dataEntry.percentage)} %`
            }
            labelStyle={{ fontSize: "30%" }}
            labelPosition={50}
            data={[
              { title: "INCOME", value: totalIncome, color: "white" },
              { title: "EXPENSES", value: totalExpenses, color: "purple" },
            ]}
          />
        </div>

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
              <tr key={expense.id}>
                <td>{expense.expenseDate}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.expenseType}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => onClickEdit(expense)}
                  >
                    EDIT
                  </button>
                  <button
                    className="button"
                    style={{ backgroundColor: "hotpink" }}
                    onClick={() => onClickDelete(expense.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="button" onClick={() => onClickCreate()}>
          Add Expense
        </button>
      </div>
    </React.Fragment>
  );
}

ExpenseList.propTypes = {
  savings: PropType.number,
  totalIncome: PropType.number,
  totalExpenses: PropType.number,
  expenses: PropType.array,
  onClickEdit: PropType.func,
  onClickDelete: PropType.func,
  onClickCreate: PropType.func,
};
export default ExpenseList;
