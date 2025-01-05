import React, { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./UserAuth";

function DiaryEntryList() {
  let navigate = useNavigate();
  const [diaryEntries, setDiaryEntries] = useState([]);
  const { isSignedIn } = UserAuth();

  useEffect(() => {
    fetchDiaryEntries();
  }, []);

  const fetchDiaryEntries = async () => {
    try {
      const diaryRef = await getDocs(collection(firestore, "diary_entries"));

      const fetchedDiaryEntries = diaryRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(fetchedDiaryEntries);
      setDiaryEntries(fetchedDiaryEntries);
    } catch (error) {
      alert(error.message);
    }
  };

  if (!isSignedIn) {
    navigate("/login");
    return;
  }

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
