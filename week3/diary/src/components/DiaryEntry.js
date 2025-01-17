import React, { useState } from "react";
import { firestore } from "./firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "./UserAuth";

function DiaryEntry() {
  const currentDate = new Date();
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [favoriteMemory, setFavoriteMemory] = useState("");
  let navigate = useNavigate();
  const { user, isSignedIn, pending } = UserAuth();

  if (pending) {
    return <h1>Loading...</h1>;
  }

  if (!isSignedIn) {
    navigate("/login");
    return;
  }

  const handleAddDiaryRecord = async (event) => {
    event.preventDefault();
    try {
      if (!diaryTitle) {
        alert("Please enter a title");
        return;
      }

      if (!diaryEntry) {
        alert("Please enter something in the diary entry");
        return;
      }

      if (!favoriteMemory) {
        alert("Please enter something in favorite memory section");
        return;
      }

      // add record
      await addDoc(collection(firestore, "diary_entries"), {
        date: currentDate,
        diaryTitle: diaryTitle,
        diaryEntry: diaryEntry,
        favoriteMemory: favoriteMemory,
        userId: user.uid,
      });
      alert("Diary entry added successfully");
      navigate("/pastentries");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="diary-entry">
      <p>Hello {user.email}</p>
      <form>
        <h2>A Story from {currentDate.toDateString()}</h2>
        <p>Give your day a title</p>
        <input
          type="text"
          name="diaryTitle"
          placeholder="A Nice Ass Day"
          value={diaryTitle}
          onChange={(event) => setDiaryTitle(event.target.value)}
        />

        <p>What happened today?</p>
        <textarea
          rows={10}
          name="diaryEntry"
          placeholder="Dear diary;&#13;&#10;Today, I had a great day filled with exciting
        adventures. I went to the park with my friends, and even caught a
        beautiful sunset!......"
          value={diaryEntry}
          onChange={(event) => setDiaryEntry(event.target.value)}
        ></textarea>

        <p>Favorite memory from the day...</p>
        <input
          type="text"
          name="favoriteMemory"
          placeholder="Suzannah, for making me happy when..."
          value={favoriteMemory}
          onChange={(event) => setFavoriteMemory(event.target.value)}
        />

        <p></p>

        <button type="submit" onClick={handleAddDiaryRecord}>
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default DiaryEntry;
