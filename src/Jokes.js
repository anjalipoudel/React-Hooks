

import React, { useState, useEffect } from 'react'


export default function Jokes() {
    // const [category, setCategory] = useState("");
    const [quizes, setQuizes] = useState([]);

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

    return (
        <>{
            quizes.map((quiz, id) => {
                return (
                    <div key={id}>
                        {quiz['category']}
                    </div>
                )
            })
        },
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

