import { useNavigate } from "react-router-dom"
import { Image } from "./Image"


export const SingleProduct = ({prod}) => {
    const navigate = useNavigate()
    
    return <div className="flex cursor-pointer z-0 relative my-5 hover:scale-110 hover:rounded-lg transition-transform ease-in-out duration-200 delay-0 mb-[20px] flex-col w-[300px] h-[320px]"
        onClick={()=>{
            navigate(`/product/${prod.id}`)
        }}>
        <div className="absolute top-2 text-sm rounded left-2 bg-[#DB4444] text-white px-1 py-1">-{prod.discountPercentage}%</div>
        <div className="bg-[#F5F5F5] max-w-[90%] h-[90%] rounded p-5 ">
            <Image  src={prod.thumbnail} alt="" />
        </div>
        <div>
            <div className="font-medium">{prod.brand} {prod.title}</div>
            <div className="flex gap-2">
                <div className="text-[#DB4444]">&#8377; {prod.price*100}</div>
                <div className="line-through text-gray-500">{ ((prod.price*100) * 100 / (100-prod.discountPercentage)).toFixed(0)}</div>
            </div>
        </div>
    </div>
}