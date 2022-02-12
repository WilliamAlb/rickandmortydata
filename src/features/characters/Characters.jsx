import { useEffect, useState } from "react";

import Character from "./Character";

function Characters() {
  // this fetching data mechanism is used in all the components the same
  // create a custom hook that will receive and endpoint - character in this case
  // and will return status and data
  // also if you will have time, maybe you can create a global state even with context
  // and then if you already have data for example you already fetched the characters
  // display them instead of showing the loader again
  // you do need to fetch them again because the data can change,
  // but you already will have something to show
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setSztatus("succeeded");
      });
  }, []);

  return (
    <section className="m-16 flex flex-col" id="Characters">
      {status === "loading" ? (
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>
      ) : (
        data.results.map((result) => {
          // Add key
          return <Character key={result.id} result={result} />;
        })
      )}
    </section>
  );
}

export default Characters;
