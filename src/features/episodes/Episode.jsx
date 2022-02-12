import icons from "../../util/svgs.jsx";
function Episode({result}){
    
    function handleClick(e){
        const localStorageString = window.localStorage.getItem('favoriteEpisodes');

        if(localStorageString){
            let localStorageArray = JSON.parse(localStorageString);
            if(localStorageArray.includes(result.id)){
                localStorageArray = localStorageArray.filter((item)=>{
                    return item!=result.id
                })
            }else{
                localStorageArray.push(result.id)
            }
            localStorageArray=JSON.stringify(localStorageArray);
            window.localStorage.setItem('favoriteEpisodes',localStorageArray)
        }
        else{
            window.localStorage.setItem('favoriteEpisodes',JSON.stringify([result.id]));
        }
        
    }

    return(
    <div className="flex m-10 items-center flex-col text-center" key={result.id}>
        <h2 className="text-5xl">{result.episode}</h2>
        <h3 className="text-3xl">{result.name}</h3>
        <h3>{result.air_date}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 cursor-pointer hover:fill-red-600 active:fill-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>{icons.favorite}</svg>
    </div>)
}

export default Episode;