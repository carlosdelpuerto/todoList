import { useEffect, useState } from "react"

export const useFetch = (url) => {
    
    const [state, setState] = useState({data: null, loading:true, error:null})

    //cuando la url cambie
    useEffect(()=>{

        setState({data:null, loading:true, error:null})

        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            setState({
                loading: false,
                error: null,
                data
            })
        })
    }, [url])

    return state //<--- este va ser el nuevo valor del const cuando usemos el hook const state = useFetch(API)

}