import React, { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./UserAuth";

function DiaryEntryList() {
  let navigate = useNavigate();
  const [diaryEntries, setDiaryEntries] = useState([]);
  const { user, pending, isSignedIn } = UserAuth();

  useEffect(() => {
    if (pending) {
      return () => {
        <h1>Loading...</h1>;
      };
    }

    if (!isSignedIn) {
      navigate("/login");
      return () => {};
    }

    fetchDiaryEntries();
  });

  const fetchDiaryEntries = async () => {
    try {
      const q = query(
        collection(firestore, "diary_entries"),
        where("userId", "==", user.uid),
        orderBy("date", "desc")
      );
      const diaryRef = await getDocs(q);

      const fetchedDiaryEntries = diaryRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDiaryEntries(fetchedDiaryEntries);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <article>
        <ul className="pastentries">
          {diaryEntries.map((diaryEntry) => (
            <li key={diaryEntry.id}>
              <h4>
                <u>
                  {diaryEntry.diaryTitle}:
                  {new Date(diaryEntry.date.toDate()).toDateString()}
                </u>
              </h4>

              <span>{diaryEntry.diaryEntry}</span>
              <p>Favorite Memory: {diaryEntry.favoriteMemory}</p>
              <hr class="rounded"></hr>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default DiaryEntryList;
