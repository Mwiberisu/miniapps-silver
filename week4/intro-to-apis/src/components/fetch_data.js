import React, { useEffect, useReducer } from "react";

function FetchData() {
  const initialState = {
    posts: [],
    isLoading: false,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_POSTS_REQUEST":
        return { isLoading: true, error: null };
      case "FETCH_POSTS_SUCCESS":
        return {
          isLoading: false,
          posts: action.payload,
          error: null,
        };
      case "FETCH_POSTS_FAILURE":
        return { posts: [], isLoading: false, error: action.error };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetch_data = async () => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_POSTS_FAILURE", error: error.message });
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  if (state.isLoading) {
    return <p>Loading...</p>;
  }
  if (state.error) {
    return <p>{state.error}</p>;
  }
  return (
    <div>
      <h1>
        <u>Posts Fetched</u>
      </h1>
      {state.posts.map((post) => {
        return (
          <ul>
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default FetchData;
