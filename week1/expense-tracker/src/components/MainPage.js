import React from "react";
import ExpenseList from "./ExpenseList";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          date: "2023-03-02",
          amount: 200,
          description: "salary",
          type: "income",
        },
      ],
    };
  }
  render() {
    const page = null;
    return (
      <React.Fragment>
        <ExpenseList expenses={this.state.expenses} />
      </React.Fragment>
    );
  }
}

export default MainPage;
