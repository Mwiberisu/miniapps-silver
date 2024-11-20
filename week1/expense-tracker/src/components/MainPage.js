import React from "react";
import ExpenseList from "./ExpenseList";
import EditExpenseForm from "./EditExpenseForm";

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
      creating: false,
      editing: false,
    };
  }

  handleDelete = (expenseId) => {
    const newExpensesList = this.state.expenses.filter(
      (expense) => expense.id !== expenseId
    );

    this.setState({ expenses: newExpensesList });
  };

  handleEdit = (expenseId) => {
    this.setState({ editing: true });
  };

  render() {
    let page = null;

    if (this.state.creating) {
    } else if (this.state.editing) {
      page = <EditExpenseForm />;
    } else {
      page = (
        <ExpenseList
          expenses={this.state.expenses}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
          onClickCreate={this.handleCreate}
        />
      );
    }

    return <React.Fragment>{page}</React.Fragment>;
  }
}

export default MainPage;
