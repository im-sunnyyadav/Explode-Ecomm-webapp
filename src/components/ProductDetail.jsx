import { useState } from "react"
import {useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {useNavigate} from "react-router-dom"

import { kartAtom } from "../store/atoms/kartAtom";
import { kartIdAtom } from "../store/atoms/KartIdAtom";
import { kartItemFamily } from "../store/atoms/kartItemFamily";
import { totalPriceAtom } from "../store/atoms/totalPriceAtom";


export const ProductDetail = ({prod}) => {
    const navigate = useNavigate()

    const [count, setCount] = useState(1);
    const setKart = useSetRecoilState(kartAtom)
    const [kartId, setKartId] = useRecoilState(kartIdAtom)
    const [ kartItem, setKartAtomFamily] = useRecoilState(kartItemFamily(prod.id))
    const setTotalPrice = useSetRecoilState(totalPriceAtom)

    function HandleKartId(){
        if( !kartId.includes(prod.id)){
            setKartId([...kartId,prod.id])
        }
        setKartAtomFamily({
            title : `${prod.brand} ${prod.title}`,
            img : prod.thumbnail,
            quantity : kartItem.quantity + count,
            price : prod.price*100
        })
    }

    return <div className="flex flex-col gap-5 max-w-[500px]  xl:w-full  min-w-[350px]">
        <div className="flex flex-col gap-3 ">
            <div className="font-bold text-[24px]">{prod.brand} {prod.title}</div>
            <div>Rating : {prod.rating}</div>
            <div className="flex gap-3 items-center leading-6 text-[20px]">
                <div className="text-[23px] font-semibold">&#8377; {prod.price*100}</div>
                <div className="line-through text-gray-500">{((prod.price*100) * 100 / (100-prod.discountPercentage)).toFixed(0)}</div>
                <div className="text-[#DB4444]">{prod.discountPercentage}% off</div>
            </div>
            <div>{prod.description}</div>

            <div className="h-[1px] w-full bg-black opacity-30 mt-[20px]"></div>
        </div>
        <div className="flex flex-col gap-5">
            <div className=" flex items-center justify-between">
                <div className="flex border rounded">
                    <div className="flex justify-center items-center  w-[44px] h-[45px]" onClick={ ()=>{
                        if( count>1 ) setCount( prev => prev-1 )
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                    </div>
                    <div className="flex justify-center items-center border-l w-[44px] h-[45px] text-[24px] text-center">{count}</div>
                    <div className="flex justify-center items-center w-[44px] h-[45px] text-white bg-[#DB4444]" onClick={() => setCount( prev => prev+1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>
                <div className="bg-white cursor-pointer px-8 py-3 rounded border border-[#DB4444] font-semibold text-[#DB4444]" onClick={() => {
                    setKart( prev => prev + count)
                    HandleKartId(prod.id);
                    setTotalPrice(0)
                }}>
                    Add to cart
                </div>
        
                <div className="border rounded p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
            <button className="text-white  px-8 py-3 w-full rounded bg-[#DB4444]" onClick={()=>{
                navigate('/product/kart')
            }}>Buy Now</button>
            
        </div>
        <div>
        <div>
                <div className="border rounded p-4 flex gap-5 ">
                    <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                    </div>
                    <div>
                        <h1 className="text-[20px] font-medium">Free Delivery</h1>
                        <p className="text-[15px]">Enter Your postal code for delivery availability</p>
                    </div>
                </div>
                <div className="border rounded p-4 flex gap-5 ">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-[20px] font-medium">Free Delivery</h1>
                        <p className="text-[15px]">Enter Your postal code for delivery availability</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}