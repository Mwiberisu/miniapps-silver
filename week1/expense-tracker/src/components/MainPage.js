import React from "react";
import ExpenseList from "./ExpenseList";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          date: "2023-03-02",
          amount: 200,
          description: "salary",
          type: "income",
        },
      ],
    };
  }

  handleDelete = (expenseId) => {
    const newExpensesList = this.state.expenses.filter(
      (expense) => expense.id !== expenseId
    );

    this.setState({ expenses: newExpensesList });
  };

  render() {
    const page = null;
    return (
      <React.Fragment>
        <ExpenseList
          expenses={this.state.expenses}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default MainPage;
