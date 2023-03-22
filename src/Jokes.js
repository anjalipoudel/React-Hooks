

import React, { useState, useEffect } from 'react'


export default function Jokes() {
    // const [category, setCategory] = useState("");
    const [quizes, setQuizes] = useState([]);
    const [answer, setAnswer] = useState("")





    useEffect(() => {
        const url = "https://the-trivia-api.com/api/questions/";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setQuizes(data);
            }
            catch (error) {
                console.log("error", error);
            }
        };
        fetchData();


    }, []);

    if (setAnswer === { quiz["correctAnswer"]}) {

    }




    return (
        <>
            {
                quizes.map((quiz, id) => {
                    return (
                        <div key={id} style={{ backgroundColor: "pink", width: "500px", height: "200px", margin: "20px" }} >

                            <div style={{ color: "blue", font: "400" }}> {quiz['question']}</div>
                            <div style={{ display: "flex", flexDirection: "column", }} >
                                <ol style={{ listStyleType: "lower-alpha" }}>
                                    <li>{quiz["incorrectAnswers"][0]}</li>
                                    <li>{quiz["incorrectAnswers"][1]}</li>
                                    <li>{quiz["incorrectAnswers"][2]}</li>
                                    <li>{quiz['correctAnswer']}</li>
                                </ol>

                            </div>
                            <button type="submit" style={{ diaplay: "flex", float: "right", height: "40px", width: "70px", margin: "auto" }}>Submit</button>
                            < div>Select Answer:
                                <select>
                                    <option value={quiz["incorrectAnswers"][0]}>
                                        {quiz["incorrectAnswers"][0]}</option>
                                    <option value={quiz["incorrectAnswers"][1]}>
                                        {quiz["incorrectAnswers"][1]}</option>
                                    <option value={quiz["incorrectAnswers"][2]}>
                                        {quiz["incorrectAnswers"][2]}</option>
                                    <option value={quiz["correctAnswer"]}>
                                        {quiz["correctAnswer"]}</option>
                                </select></div>
                            < div style={{ color: "#007e3f" }}>Correct Answer
                            </div>

                        </div >
                    )
                })
            }
        </>
    );
}



































































// import React, { useEffect, useState } from 'react'



// export default function Jokes() {


//     const [JokesCategory, setJokesCategory] = useState(({});
//     // const [JokesData, setJokesData] = useState({});
//     async function ButtonClick() {
//         const getJoke = await fetch("https://v2.jokeapi.dev/joke/Programming");
//         const joke = await getJoke.json();
//         console.log(joke.joke)

//     }[]);


//     return (
//         <div>
//             <div>
//                 {/* Jokes Category: {JokesCategory} */}

//             </div>
//             <button onClick={ButtonClick}>Generate Joke </button>

//         </div>

//     )
// }

