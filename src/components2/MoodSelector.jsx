const moods = [ { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" }, 
    { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" },
    { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" },
    { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" }, ];
import React from 'react';

export default function MoodSelector(props) {
  return (
    <div >
      {props.moods.map((mood, index) => (
        <button
          key={index}
          onClick={() => props.updateMood(mood)}
        
        >
          {mood.label}
        </button>
      ))}
    </div>
  );
}
