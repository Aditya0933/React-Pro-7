import { useEffect, useState } from "react"
import axios from 'axios'


export default function useGifs( tag ){

    
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    
    const Url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const [gifs, setGifs] = useState('');
    const [loading ,setloading] = useState('false');
    async function fetchData(tag){
        setloading(true)
        console.log('start')
        const output = await axios.get( tag ? `${Url}&tag=${tag}` : Url);
        console.log('end')
        console.log(output)
        setloading(false)

    }

    useEffect( () => {
        fetchData()
    },[])

    return{gifs,loading,fetchData}

}