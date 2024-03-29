import { useEffect, useState } from "react"

function Dashboard(){
    const [status,setStatus] = useState('loading');
    const [favoriteCharacters,setFavoriteCharacters] = useState([]);
    const [favoriteEpisodes,setFavoriteEpisodes] = useState([]);
    const [favoriteLocations,setFavoriteLocations] = useState([]);

    async function fetchData(idArray,type,setterFunction){
        setStatus('loading');
        const responseArray = await Promise.all(idArray.map((id)=>{
            return fetch(`https://rickandmortyapi.com/api/${type}/${id}`)
                .then(res=>res.json())
            }))
        setStatus('succeeded');
        setterFunction(responseArray);
        return responseArray;
        
    }

    useEffect(()=>{
        const favoriteLocationsIds = JSON.parse(window.localStorage.getItem('favoriteLocations'));
        const favoriteEpisodesIds = JSON.parse(window.localStorage.getItem('favoriteEpisodes'));
        const favoriteCharactersIds = JSON.parse(window.localStorage.getItem('favoriteCharacters'));

        if(favoriteCharactersIds){
            fetchData(favoriteCharactersIds,'character',setFavoriteCharacters);            
        }
        if(favoriteEpisodesIds){
            fetchData(favoriteEpisodesIds,'episode',setFavoriteEpisodes);
        }
        if(favoriteLocationsIds){
            fetchData(favoriteLocationsIds,'location',setFavoriteLocations);
        }
        setStatus('succeeded');
    },[])
    

    return(
        <section id="dashboard" className=" pt-16">
            {
                status==='loading'?
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>:
                <>
                    <h1 className="text-6xl m-10">Rick and Morty Database</h1>
                    <h2 className="text-5xl text-center m-10">Favorite Characters</h2>
                    <div className="overflow-x-scroll whitespace-nowrap outline-white">
                        {
                            favoriteCharacters.map((character, index)=>{
                                return (
                                    <div className="flex-col mx-10 w-1/6 inline-flex  border-2 rounded min-h-[200px]" key={index+10}>
                                        <img className="rounded-full flex-1" src={character.image} alt={character.name+"'s avatar"}></img>
                                        <h3 className=" text-center">{character.name}</h3>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <h2 className="text-5xl text-center m-10">Favorite Episodes</h2>
                    <div className="overflow-x-scroll whitespace-nowrap outline-white">
                    {
                            favoriteEpisodes.map((episode, index)=>{
                                return (
                                    <div className="flex-col mx-10 w-1/5 inline-flex text-center border-2 rounded min-h-[200px]" key={index+20}>
                                        <h2 className="text-3xl">{episode.episode}</h2>
                                        <h3 className="text-3xl">{episode.name}</h3>
                                        <h3>{episode.air_date}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h2 className="text-5xl text-center m-10">Favorite Locations</h2>
                    <div className="overflow-x-scroll whitespace-nowrap outline-white">
                    {
                            favoriteLocations.map((location, index)=>{
                                return (
                                    <div className="flex-col mx-10 w-1/5 inline-flex text-center  border-2 rounded min-h-[200px]" key={index+30}>
                                        <h2 className="text-3xl">{location.name}</h2>
                                        <h3 className="text-3xl">{location.type}</h3>
                                        <h3>{"Dimension: "+location.dimension}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
            
        </section>

    )
}
export default Dashboard