import React from "react";

function DiaryEntry() {
  const currentDate = new Date();
  return (
    <div className="diary-entry">
      <form>
        <h2>A Story from {currentDate.toDateString()}</h2>
        <p>Give your day a title</p>
        <input type="text" placeholder="A Nice Ass Day" />

        <p>What happened today?</p>
        <textarea
          rows={10}
          placeholder="Dear diary;&#13;&#10;Today, I had a great day filled with exciting
        adventures. I went to the park with my friends, and even caught a
        beautiful sunset!......"
        ></textarea>

        <p>A memory or person I'm thankful for ..</p>
        <input
          type="text"
          placeholder="Suzannah, for making me happy when..."
        />

        <p></p>

        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
}

export default DiaryEntry;
