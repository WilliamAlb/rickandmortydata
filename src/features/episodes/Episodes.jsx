import { useState, useEffect } from "react";

import Episode from "./Episode.jsx";

function Episodes() {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setStatus("succeeded");
      });
  }, []);

  return (
    <section className="m-16 flex flex-col" id="Episodes">
      {/* 
        ternary operations in JSX is not recommenced - it makes the code not clear
        i recommend in all places move the loader outside of the return

        if (status === "loading") {
            return (
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>
            );
        }

        return (
            <section className="m-16 flex flex-col" id="Episodes">
            {data.results.map((result) => {
                return <Episode result={result} key={result.id}></Episode>;
            })}
            </section>
        );
        */}
      {status === "loading" ? (
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>
      ) : (
        data.results.map((result) => {
          return <Episode result={result} key={result.id}></Episode>;
        })
      )}
    </section>
  );
}

export default Episodes;
