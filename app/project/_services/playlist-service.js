import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getSongs = async (userId) => {
  const songs = [];
  try {
    const q = collection(db, `users/${userId}/songs`);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      songs.push({ id: doc.id, ...doc.data() });
    });
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};

export const addSong = async (userId, song) => {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/songs`), song);
    return docRef.id;
  } catch (error) {
    console.error("Error adding song:", error);
    throw error;
  }
};
