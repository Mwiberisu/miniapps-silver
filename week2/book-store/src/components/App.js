import "./App.css";
import BookList from "./BookList";
import Footer from "./Footer";
import Header from "./Header";
import { configureStore } from "@reduxjs/toolkit";
import { PopularBooksReducer } from "./reducers/popular_books_reducer";
import { Provider } from "react-redux";
const store = configureStore({ reducer: PopularBooksReducer });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BookList />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
