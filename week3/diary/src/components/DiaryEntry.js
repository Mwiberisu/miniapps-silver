import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function DiaryEntry() {
  const currentDate = new Date();
  const currentUser = auth.currentUser;
  let navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
    return;
  }
  return (
    <div className="diary-entry">
      <p>Hello {currentUser.email}</p>
      <form>
        <h2>A Story from {currentDate.toDateString()}</h2>
        <p>Give your day a title</p>
        <input type="text" name="diary-title" placeholder="A Nice Ass Day" />

        <p>What happened today?</p>
        <textarea
          rows={10}
          name="diary-entry"
          placeholder="Dear diary;&#13;&#10;Today, I had a great day filled with exciting
        adventures. I went to the park with my friends, and even caught a
        beautiful sunset!......"
        ></textarea>

        <p>Favorite memory from the day...</p>
        <input
          type="text"
          name="favorite-memory"
          placeholder="Suzannah, for making me happy when..."
        />

        <p></p>

        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
}

export default DiaryEntry;
