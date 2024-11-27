export const PopularBooksReducer = (
  state = { popularBooks: [], foundBooks: [] },
  action
) => {
  switch (action.type) {
    case "LOAD_POPULAR_BOOKS_INITIALIZE":
      return { ...state };
    case "LOAD_POPULAR_BOOKS_SUCCESS":
      return { popularBooks: action.payload, error: "", foundBooks: [] };
    case "LOAD_POPULAR_BOOKS_FAILURE":
      return { popularBooks: [], error: action.payload, foundBooks: [] };
    case "SEARCH_BOOK":
      return searchBook(action.searchString, state.popularBooks);

    default:
      return state;
  }
};

const searchBook = (searchString, popularBooks) => {
  console.log("Heey", popularBooks.length);

  const foundBooks = popularBooks.filter((book) => {
    return book.name.toUpperCase().includes(searchString.toUpperCase());
  });

  console.log("foundBooks.size", foundBooks.length);
  if (foundBooks.length === 0) {
    return {
      popularBooks: popularBooks,
      foundBooks: [],
      error: "No books found",
    };
  }

  return { popularBooks: popularBooks, foundBooks: foundBooks, error: "" };
};
