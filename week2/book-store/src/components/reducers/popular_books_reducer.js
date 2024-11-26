export const PopularBooksReducer = (state = { popularBooks: [] }, action) => {
  switch (action.type) {
    case "LOAD_POPULAR_BOOKS_INITIALIZE":
      return { ...state };
    case "LOAD_POPULAR_BOOKS_SUCCESS":
      return { popularBooks: action.payload, error: "" };
    case "LOAD_POPULAR_BOOKS_FAILURE":
      return { popularBooks: [], error: action.payload };
    default:
      return state;
  }
};
