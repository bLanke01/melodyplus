"use client";

import { useState } from "react";

export default function NewSong({ onAddSong }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const song = { title, artist, album };
    onAddSong(song);
    setTitle("");
    setArtist("");
    setAlbum("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4 text-black">Add New Song</h2>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded text-black"
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded text-black"
      />
      <input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        className="w-full mb-2 p-2 border rounded text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Song
      </button>
    </form>
  );
}
