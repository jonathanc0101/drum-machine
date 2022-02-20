import React, { useEffect, useState } from "react";

import { audioLocationForLetters } from "../constants";

export default function Button(props) {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio !== null) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    setAudio(document.getElementById(props.letter));
  });

  return (
    <div className="drum-pad">
      <button onClick={() => toggle()}>play</button>
      {props.letter}
      <audio id={props.letter}>
        <source src={audioLocationForLetters[props.letter]}></source>
      </audio>
    </div>
  );
}
