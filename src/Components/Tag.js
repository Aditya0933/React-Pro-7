import { useEffect, useState } from "react"
import axios from 'axios'
import Spiner from "./Spiner";
import useGifs from "../Hooks/useGifs";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag(){
    // const [gifs, setGifs] = useState('');
    // const [loading ,setloading] = useState('false');
    const [tag, setTag] = useState('')

    // async function fetchData(){
    //     setloading(true)
    //     console.log('start')
    //     const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 
    //     const output = await axios.get(url);
    //     console.log('end')
    //     console.log(output)
    //     setloading(false)

    // }

    // useEffect( () => {
    //     fetchData()
    // },[])

    const {gifs ,loading,fetchData} = useGifs(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value);
    }
    return(
        <div className="w-1/2 h-[450px] bg-blue-500 rounded-lg border-black flex items-center flex-col" >
            <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            
            <div className="mt-[20px] mb-[20px]">
                {
                    loading ? (<Spiner/>) : (<img src={gifs}></img>)
                }

            </div>

            <input className="w-10/12 text-lg py-2 rounded-lg mb-[5px]"  onChange={changeHandler}  value={tag}></input>

            <button onClick={clickHandler}className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    ) 
}