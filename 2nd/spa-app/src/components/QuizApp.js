import React, { useState } from 'react';

function QuizApp() {
  const question = "Hogyan írják helyesen?";
  const options = ["muszáj", "muszály", "nnuszáj"];
  const correct = "muszáj";

  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (selected === correct) {
      setResult("Helyes!");
    } else {
      setResult("Rossz válasz.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{question}</h2>
      {options.map(opt => (
        <div key={opt}>
          <input type="radio" name="answer" value={opt} onChange={() => setSelected(opt)} />
          {opt}
        </div>
      ))}
      <button onClick={checkAnswer}>Ellenőrzés</button>
      <p>{result}</p>
    </div>
  );
}

export default QuizApp;