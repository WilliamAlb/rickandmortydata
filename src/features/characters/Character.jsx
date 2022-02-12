import icons from "../../util/svgs.jsx";

function Character({ result }) {
  function handleClick(e) {
    // this should be a shared utility function between all the components with the local storage
    const localStorageString =
      window.localStorage.getItem("favoriteCharacters");

    if (localStorageString) {
      let localStorageArray = JSON.parse(localStorageString);
      if (localStorageArray.includes(result.id)) {
        localStorageArray = localStorageArray.filter((item) => {
          return item != result.id;
        });
      } else {
        localStorageArray.push(result.id);
      }
      localStorageArray = JSON.stringify(localStorageArray);
      window.localStorage.setItem("favoriteCharacters", localStorageArray);
    } else {
      window.localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify([result.id])
      );
    }
  }

  return (
    <div className="flex m-1 w-full items-center" key={result.id}>
      <img src={result.image} className="rounded-full m-10" loading="lazy" />
      <div className=" justify-self-end">
        <h3 className=" text-3xl">{result.name}</h3>
        <h4>{"Location: " + result.location.name}</h4>
        <h4>{"Status: " + result.status}</h4>
        <h4>{"Gender: " + result.gender}</h4>
        <h4>{"Origin: " + result.origin.name}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-600 cursor-pointer hover:fill-red-600 active:fill-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleClick}
        >
          {icons.favorite}
        </svg>
      </div>
    </div>
  );
}

export default Character;
