import { useEffect, useState } from "react";

import Character from "./Character";

function Characters(){
    const [status,setStatus] = useState('loading');
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            setData(data);
            setStatus('succeeded');
        })
    },[])
    
    return(
        <section className="m-16 flex flex-col" id="Characters">
            {status==='loading'?
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 absolute top-1/2 left-1/2"></div>:
            data.results.map((result)=>{
                return (<Character result={result}/>)
            })
            }
        </section>
    )
}

export default Characters;