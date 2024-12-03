
import { useEffect, useState } from "react";
import { Image } from "./Image"

let i = 1;
export const ProdImage = ( {prod} ) => {

    const [mainImg, setMainImg] = useState("")

    useEffect( ()=>{
        setMainImg(prod.images[0])
    },[prod])

    return <div className="flex items-center gap-5 m-5 p-5 max-w-[]">
        <div className="flex flex-col gap-1 justify-around">
            {prod.images.map( img => {
                i++;
            return <div key={i} className="bg-[#F5F5F5] rounded-md p-2 hover:bg-[#e0e0e0] hover:rotate-6 transition-transform ease-linear duration-100 delay-0 cursor-pointer w-[130px] h-[100px]" onClick={()=>{
                setMainImg(img)
            }}>
                <Image src = {img}></Image>
            </div>
        })}
        </div>
        <div className="w-[500px] h-full">
            <Image src = {mainImg}></Image>
        </div>
    </div>
}