import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"

import { SingleProduct } from "../components/SingleProduct";
import { Shimmer } from "../components/Shimmer";

export const CategoryProducts = () => {

    const [products, setProducts] = useState([]);

    const param = useParams();
    const category = param.name

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${category}`)
        .then( (response) => {
            setProducts(response.data.products)
        })
    },[])
    
    return <div>
        { ( products.length != 0 ) ? 
            <main className="max-w-[1000px] min-h-[500px] mx-auto my-12 ">
                <div className="flex  my-4 text-[25px]">Showing Results for : <div className=" mx-2  font-bold">{category}</div></div>
                <div className="mt-[50px] flex flex-wrap gap-10 items-center justify-center">
                    {products.map( prod => {
                        return <SingleProduct key={prod.id} prod={prod}/>
                    })}
                </div>
            </main> 
            :
            <Shimmer/>
        }
    </div>
    
    
}