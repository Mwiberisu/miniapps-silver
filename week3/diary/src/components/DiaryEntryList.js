import React, { useEffect, useState } from "react";
import { auth, firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function DiaryEntryList() {
  let navigate = useNavigate();
  const currentUser = auth.currentUser;
  const [diaryEntries, setDiaryEntries] = useState([]);

  if (!currentUser) {
    navigate("/login");
  }

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

  useEffect(() => {
    fetchDiaryEntries();
  }, []);
  return (
    <div>
      <h1>Past Records</h1>
    </div>
  );
}

export default DiaryEntryList;
