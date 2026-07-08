import { useRef, useState } from "react";

function Audioplayer() {
  const audioRef = useRef(
    new Audio(
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    ),
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>🎵 React Music Player</h1>

      <button
        onClick={handleMusic}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pause Music ⏸" : "Play Music ▶"}
      </button>
    </div>
  );
}

export default Audioplayer;
