"use client";

import { useState, useEffect } from "react";
import NewSong from "./new-song";
import SongList from "./song-list";
import { getSongs, addSong } from "../_services/playlist-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [songs, setSongs] = useState([]);
  const [selectedSongTitle, setSelectedSongTitle] = useState("");

  useEffect(() => {
    const loadSongs = async () => {
      if (user) {
        const songs = await getSongs(user.uid);
        setSongs(songs);
      }
    };
    loadSongs();
  }, [user]);

  const handleAddSong = async (newSong) => {
    if (user) {
      const songId = await addSong(user.uid, newSong);
      setSongs([...songs, { id: songId, ...newSong }]);
    }
  };

  const handleSongSelect = (song) => {
    setSelectedSongTitle(song.title);
  };

  return (
    <main className="flex flex-col md:flex-row gap-8 p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Your Playlist</h1>
        <NewSong onAddSong={handleAddSong} />
        <SongList songs={songs} onSongSelect={handleSongSelect} />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Selected Song</h1>
        {selectedSongTitle ? (
          <p>Now Playing: <strong>{selectedSongTitle}</strong></p>
        ) : (
          <p>Select a song to view details.</p>
        )}
      </div>
    </main>
  );
}
