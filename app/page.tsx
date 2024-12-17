'use client';

import { useState, useEffect } from "react";
import { IoArrowBackCircle } from 'react-icons/io5';
import { IoMdMusicalNote, IoMdMusicalNotes } from 'react-icons/io';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio('/sounds/core.mp3'); // Sesuaikan dengan path yang benar
    audio.loop = true;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay failed:", error);
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      playAudio();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const messages = [
    "Halo Kiki, I hope you're doing well. Di web ini kamu cukup baca aja, soalnya kalo di WhatsApp bakal jadi spam.",
    "Jangan lupa play lagunya yaa.",
    "Aku mau komunikasiin semua overthinking kamu disini.",
    "Saat ini aku cuma invest di 1 perempuan aja, dan mungkin kamu tau siapa 👀",
    "And the others just friend.",
    "Sorry for being cold.",
    "Dan jangan overthinking yang engga-engga, just trust me.",
    "Dan juga sejujurnya, aku udah lama banget not being in relationship, tapi sekarang aku terus belajar.",
    "Maaf, energi aku juga cepet abisnya, kadang jam 10 udah tidur 😅",
    "Aku kadang butuh waktu buat memproses emosi, bukan berarti ga peduli.",
    "Dan yang terakhir...",
    "Sorry for everything.",
    "Aku sebenernya peduli sama kamu, dan ga mau juga kamu kenapa kenapa.",
    "Dengerin lagu ini sampai habis yaa."
  ];

  const handleNext = () => {
    if (currentStep < messages.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4">
      <button
        onClick={toggleMusic}
        className="absolute top-4 right-4 text-pink-500 hover:text-pink-600 transition-colors duration-300"
        aria-label="Toggle music"
      >
        {isPlaying ? <IoMdMusicalNotes size={32} /> : <IoMdMusicalNote size={32} />}
      </button>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 relative">
        {/* {currentStep > 0 && (
          <button 
            onClick={handleBack}
            className="absolute top-4 left-4 text-pink-500 hover:text-pink-600 transition-colors duration-300"
            aria-label="Go back"
          >
            <IoArrowBackCircle size={32} />
          </button>
        )} */}
        
        <div className="text-center animate-fadeIn">
          <p className="text-xl md:text-2xl mb-8 text-purple-600">
            {messages[currentStep]}
          </p>
          
          {currentStep < messages.length - 1 && (
            <button 
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}