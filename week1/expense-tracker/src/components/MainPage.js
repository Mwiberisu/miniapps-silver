import React from "react";
import ExpenseList from "./ExpenseList";
import EditExpenseForm from "./EditExpenseForm";
import AddExpenseForm from "./AddExpenseForm";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          expenseDate: "2023-03-02",
          amount: 200,
          description: "salary",
          expenseType: "INCOME",
        },
      ],
      creating: false,
      editing: false,
      selectedExpense: null,
    };
  }

  handleDelete = (expenseId) => {
    const newExpensesList = this.state.expenses.filter(
      (expense) => expense.id !== expenseId
    );

    this.setState({ expenses: newExpensesList });
  };

  handleEdit = (expense) => {
    this.setState({ editing: true, selectedExpense: expense });
  };

  handleCreate = () => {
    this.setState({ creating: true });
  };

  updateExpenseInList = (expense) => {
    const editedExpenses = this.state.expenses
      .filter((currentExpense) => currentExpense.id !== expense.id)
      .concat(expense);
    this.setState({
      expenses: editedExpenses,
      editing: false,
      selectedExpense: null,
    });
  };
  handleAddExpense = (expense) => {
    const newExpensesList = this.state.expenses.concat(expense);
    this.setState({ expenses: newExpensesList, creating: false });
  };
  render() {
    document.title = "Expense Tracker";
    let page = null;

    if (this.state.creating) {
      page = <AddExpenseForm onExpenseAdd={this.handleAddExpense} />;
    } else if (this.state.editing) {
      page = (
        <EditExpenseForm
          expense={this.state.selectedExpense}
          onExpenseEdit={this.updateExpenseInList}
        />
      );
    } else {
      let totalIncome = 0;
      let totalExpenses = 0;
      this.state.expenses.forEach((expense) => {
        if (expense.expenseType === "INCOME") {
          totalIncome += parseInt(expense.amount);
        } else {
          totalExpenses += parseInt(expense.amount);
        }
      });
      page = (
        <ExpenseList
          savings={totalIncome - totalExpenses}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
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
