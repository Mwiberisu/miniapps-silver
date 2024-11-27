import "./App.css";
import BookList from "./BookList";
import Footer from "./Footer";
import Header from "./Header";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { PopularBooksReducer } from "./reducers/popular_books_reducer";
import { Provider } from "react-redux";
import SearchBookForm from "./SearchBookForm";

const rootReducer = combineReducers({
  books: PopularBooksReducer,
});
const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <SearchBookForm />
        <BookList />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
