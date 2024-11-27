import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const fetchPopularBooks = () => async (dispatch) => {
  dispatch({ type: "LOAD_POPULAR_BOOKS_INITIALIZE" });

  try {
    const data = require("./data/popularbooks.json");

    dispatch({ type: "LOAD_POPULAR_BOOKS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOAD_POPULAR_BOOKS_FAILURE", payload: error.message });
  }
};

function BookList() {
  document.title = "Book Bar";

  const { popularBooks, foundBooks, error } = useSelector(
    (state) => state.books
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularBooks());
  }, [dispatch]);

  if (error) return <p>Error detected: {error}</p>;
  const displayBooks = foundBooks.length !== 0 ? foundBooks : popularBooks;
  return (
    <div className="book-list">
      <ul>
        {displayBooks.map((book) => (
          <div key={book.book_id} className="book-container">
            <div className="book-details">
              <img src={book.cover} alt="book cover" />
            </div>

            <div className="book-details">
              <h3>{book.name}</h3>
              <p>{book.rating}</p>
              <a href={book.url} target="_blank" rel="noreferrer">
                Good Reads
              </a>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
