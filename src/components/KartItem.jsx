import { useRecoilValue, useSetRecoilState } from "recoil"
import { kartItemFamily } from "../store/atoms/kartItemFamily"


import { Image } from "./Image"
import { useEffect } from "react"

import { totalPriceAtom } from "../store/atoms/totalPriceAtom"

export const KartItem = ({id})=>{

    const kartItem = useRecoilValue(kartItemFamily(id))
    const setTotalPrice = useSetRecoilState(totalPriceAtom)

    useEffect( ()=>{ 
        setTotalPrice( prev => prev + kartItem.price*kartItem.quantity)
    },[kartItem])

    return <tr className="shadow-md" key={id}>
    <td className="flex gap-5 px-3 py-[10px] items-center">
        <div className="size-[70px]"><Image src={kartItem.img}></Image></div>
        <div>{kartItem.title}</div>
    </td>
    <td>{kartItem.price}</td>
    <td>{kartItem.quantity}</td>
    <td>{kartItem.price*kartItem.quantity}</td>
</tr>
}