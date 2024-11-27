import React from "react";
import { useDispatch } from "react-redux";

function SearchBookForm() {
  const dispatch = useDispatch();

  const searchBook = async (event) => {
    event.preventDefault();

    let bookName = event.target.searchString.value;

    console.log(bookName);

    dispatch({ type: "SEARCH_BOOK", searchString: bookName });
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={searchBook}>
          <input
            type="text"
            placeholder="Search a book by title.."
            name="searchString"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SearchBookForm;
