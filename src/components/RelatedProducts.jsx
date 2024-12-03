import axios from 'axios'
import { useState, useEffect } from 'react'
import { SingleProduct } from './SingleProduct'


export const RelatedProduct = ({category}) => {

    const [prods, setProds] = useState([])
    

    useEffect( ()=> {
        axios.get(`https://dummyjson.com/products/category/${category}`)
        .then( res => {
            setProds( res.data.products )
        })
        .catch( err => {
            console.log(err)
        })
    },[])

    return <div className='flex flex-col gap-5'>
        <div>
            <div className="flex gap-5 items-center">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div className=" text-[#DB4444] font-semibold">Related Items</div>
            </div>
            
        </div>
        <div className='flex flex-wrap justify-center gap-5'>
                {prods.map( prod => {
                    return <SingleProduct prod={prod} key={prod.id}/>
                })}
        </div>
    </div>
}