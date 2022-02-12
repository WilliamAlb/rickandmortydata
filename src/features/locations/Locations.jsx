import { useState, useEffect } from "react";

import Location from "./Location.jsx";

function Locations() {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchBase("https://rickandmortyapi.com/api/location")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setStatus("succeeded");
      });
  }, []);

  return (
    <section className="m-16 flex flex-col" id="Locations">
      {status === "loading" ? (
        // this should be a component - in use in all places you have loader
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>
      ) : (
        data.results.map((result) => {
          return <Location result={result} key={result.id}></Location>;
        })
      )}
    </section>
  );
}

export default Locations;
