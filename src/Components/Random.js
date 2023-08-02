import { useEffect, useState } from "react"
import axios from 'axios'
import Spiner from "./Spiner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random(){
    const [gifs, setGifs] = useState('');
    const [loading ,setloading] = useState('false');

    async function fetchData(){
        setloading(true)
        console.log('start')
        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; 
        const output = await axios.get(url);
        console.log('end')
        console.log(output)
        setloading(false)

    }

    useEffect( () => {
        fetchData()
    },[])
    function clickHandler(){
         
    }

    function clickHandler(){
        fetchData();
    }
    return(
        <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border-black flex items-center flex-col">
            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

            <div className="mt-[20px] mb-[20px]">
                {
                    loading ? (<Spiner/>) : (<img src={gifs}></img>)
                }

            </div>
            
            <button onClick={clickHandler}className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    ) 
}