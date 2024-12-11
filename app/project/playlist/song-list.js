"use client";

import { useState } from "react";

export default function SongList({ songs, onSongSelect }) {
  const [sortBy, setSortBy] = useState("title");

  let filteredSongs = [...songs];
  filteredSongs.sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "artist") {
      return a.artist.localeCompare(b.artist);
    } else {
      return a.album.localeCompare(b.album);
    }
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-center w-full mb-8">
        <button
          onClick={() => setSortBy("title")}
          className={`px-4 py-2 rounded ${
            sortBy === "title" ? "bg-blue-500 text-white" : "bg-gray-200"
          } mr-2`}
        >
          Title
        </button>
        <button
          onClick={() => setSortBy("artist")}
          className={`px-4 py-2 rounded ${
            sortBy === "artist" ? "bg-green-500 text-white" : "bg-gray-200"
          } mr-2`}
        >
          Artist
        </button>
        <button
          onClick={() => setSortBy("album")}
          className={`px-4 py-2 rounded ${
            sortBy === "album" ? "bg-yellow-500 text-white" : "bg-gray-200"
          } mr-2`}
        >
          Album
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your Songs</h2>
        {filteredSongs.length === 0 ? (
          <p>No songs found. Add some!</p>
        ) : (
          <ul className="space-y-2">
            {filteredSongs.map((song) => (
              <li
                key={song.id}
                className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer"
                onClick={() => onSongSelect(song)}
              >
                <h3 className="font-bold text-black">{song.title}</h3>
                <p className="text-black">{song.artist}</p>
                <small className="text-black">{song.album}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
