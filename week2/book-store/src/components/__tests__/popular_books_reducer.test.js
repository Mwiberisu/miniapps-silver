import { PopularBooksReducer } from "../reducers/popular_books_reducer";

describe("popular_books_reducer", () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(PopularBooksReducer({}, { type: null })).toEqual({});
  });

  //   test 2:
  let action;
  const books = {
    book_id: "57899793",
    position: "15",
    name: "All My Rage",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629908086i/57899793.jpg",
    rating: 4.62,
    url: "https://www.goodreads.com/book/show/57899793-all-my-rage",
  };

  test("Should successfully set popular books list to the loaded data", () => {
    action = {
      type: "LOAD_POPULAR_BOOKS_SUCCESS",
      payload: books,
    };
    expect(PopularBooksReducer({}, action)).toEqual({
      popularBooks: books,
      error: "",
    });
  });

  //   Test 3
  let error = "Unable to load books from file. File not found";
  test("Should return error on event of exception/error", () => {
    action = {
      type: "LOAD_POPULAR_BOOKS_FAILURE",
      payload: error,
    };

    expect(PopularBooksReducer({}, action)).toEqual({
      popularBooks: [],
      error: error,
    });
  });

  //   test 4

  test("Should return state as was on initialize", () => {
    action = {
      type: "LOAD_POPULAR_BOOKS_INITIALIZE",
    };
    expect(PopularBooksReducer({}, action)).toEqual({});
  });
});
