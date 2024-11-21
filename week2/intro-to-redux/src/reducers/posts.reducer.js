export const postsReducer = (
  state = { posts: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return { posts: action.payload, loading: false, error: "" };
    case "FETCH_POSTS_FAILURE":
      return { posts: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
