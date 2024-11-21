// thunk - a piece of code does some work in a delayed fashion eg fetch data from api
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // Alternatively use axios
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_ERROR", payload: error.message });
  }
};
function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error detected: {error}</p>;
  return (
    <React.Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Posts;
