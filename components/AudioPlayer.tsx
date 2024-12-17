'use client';

import { useState, useRef } from 'react';
import { IoMdMusicalNote, IoMdMusicalNotes } from 'react-icons/io';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="absolute top-4 right-4 text-pink-500 hover:text-pink-600 transition-colors duration-300"
        aria-label="Toggle music"
      >
        {isPlaying ? <IoMdMusicalNotes size={32} /> : <IoMdMusicalNote size={32} />}
      </button>

      <audio ref={audioRef} loop>
        <source src="/sounds/core.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
} 