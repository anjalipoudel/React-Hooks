import { useState } from 'react';
import './App.css';

export default function App() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  if (status === 'sucess') {
    return (<h4>correct answer</h4>);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer)
      setStatus('sucess');
    }
    catch (err) {
      setStatus('typing');
      setError(err);
    }
  }


  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="App">

      {/* form title */}
      <h3>Quiz Box</h3>
      <form onSubmit={handleSubmit}>
        {/* quiz question */}
        <p>Where is Astranix Located?</p>
        {/* input field */}
        <input type='text' value={answer} onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        {/* submit button */}
        <button disabled={
          answer.length === 0 || status === 'submitting'
        }> Submit</button>
        {error !== null &&
          <p > {error.message}</p>}
      </form>
    </div >


  );
}


function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() !== "bharatpur") {
        reject(new Error("Incorrect answer, Try Again"))
      }
      else {
        resolve();
      }
    }, 1500)
  });
}