import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const fetchPopularBooks = () => async (dispatch) => {
  dispatch({ type: "LOAD_POPULAR_BOOKS_INITIALIZE" });

  try {
    const data = require("./data/popularbooks.json");

    console.log("Data fetched:", data);

    dispatch({ type: "LOAD_POPULAR_BOOKS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOAD_POPULAR_BOOKS_FAILURE", payload: error.message });
  }
};

function BookList() {
  document.title = "Book Store";

  const { popularBooks, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularBooks());
  }, [dispatch]);

  if (error) return <p>Error detected: {error}</p>;

  return (
    <div>
      <ul>
        {popularBooks.map((book) => (
          <div key={book.id} className="book-container">
            <img src={book.cover} width="500" height="600" alt="book cover" />
            <h1>{book.name}</h1>
            <p>{book.rating}</p>
            <a href={book.url} target="_blank">
              Good Reads
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookList;