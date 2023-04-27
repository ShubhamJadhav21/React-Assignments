import React, { useState } from "react";
import './Guess.css';
export default function Guess() {
  const [message, setMessage] = useState();
  const [guess, setGuess] = useState();
  const [attempts, setAttempts] = useState(0);

  function getNo(e) {
    setGuess(parseInt(e.target.value));
  }

  function verifyNo() {
    setAttempts(attempts + 1);

    if (guess === 10) {
      setMessage(`Congratulations You guessed the right number in ${attempts} attempts`);
      setGuess("");
      return;
    } else if (guess > 10) {
      alert("you guessed a bigger number !");
      setGuess("");
    } else if (guess < 10) {
      alert("you guessed a smaller number !");
      setGuess("");
    }
  }

  return (
    <div className="container">
      <h1>{message}</h1>
      
      <input
        type="text"
        placeholder="Guess lucky number...."
        onChange={getNo}
        value={guess}
      />
      <button onClick={verifyNo}>Match Number</button>
    </div>
  );
}
