import { useEffect, useState } from "react"
import axios from 'axios'

const useGetProduct = (id) => {
    const [prod, setProd] = useState("")
    
    useEffect( ()=> {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then( (res) => {
            setProd(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    },[id])

    return prod
}

export default useGetProduct