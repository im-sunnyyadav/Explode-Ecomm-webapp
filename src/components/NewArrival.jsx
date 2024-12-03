import { useNavigate } from "react-router-dom"
import { Image } from "./Image"

export const NewArrival = () =>{
    const navigate = useNavigate()

    return <div className="mx-2">
        <div>
            <div className="flex gap-5 items-center">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div className=" text-[#DB4444] font-semibold">Featured</div>
            </div>
            <div className="text-[36px] font-semibold">
                New Arrival
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:h-[600px] text-white">
            <div className="flex relative flex-grow h-full w-full bg-[#1a1a1a]">
                <Image src="https://ik.imagekit.io/vewzaaue0/DevStore/men.jpg?updatedAt=1711399409069"></Image>
                <div className="absolute  bottom-5 ml-5">
                        <h1 className="text-[24px] font-semibold">Men's Section</h1>
                        <p className="pb-3">Discover timeless style and modern <br/>sophistication in our men's collection. Shop now for curated <br/>essentials that redefine your wardrobe.</p>
                        <button className="font-medium underline hover:scale-110 transition-transform ease-in-out duration-200 delay-0"onClick={()=>{
                            navigate(`/category/mens-shirts`)
                        }}>Shop Now</button>
                </div>
            </div>
            <div className="flex flex-col h-full w-full gap-5">
                <div className="flex  bg-[#000000]">
                    <div className="max-w-[30%] flex flex-col items-start justify-end gap-3 ml-5 mb-5">
                        <h1 className="text-[24px] font-semibold">Women's Collection</h1>
                        <p className="pb-3">Featured woman collections that give you another vibe.</p>
                        <button className="font-medium underline hover:scale-110 transition-transform ease-in-out duration-200 delay-0" onClick={()=>{
                            navigate(`/category/womens-dresses`)
                        }}>Shop Now</button>
                    </div>
                    <div className="h-full">
                        <img className="object-fill h-full w-full" src="https://ik.imagekit.io/vewzaaue0/DevStore/women.png?updatedAt=1711398438088"></img>
                    </div>
                </div>
                <div className="flex overflow-hidden object-cover h-full gap-5">
                    <div className="flex  items-center relative justify-center w-full h-full bg-[#0D0D0D]">
                        <img className="object-contain" src="https://ik.imagekit.io/vewzaaue0/DevStore/perfume.png?updatedAt=1711399110442"></img>
                        <button className="font-semibold absolute bottom-3 left-2 underline hover:scale-110 transition-transform ease-in-out duration-200 delay-0" onClick={()=>{
                            navigate(`/category/fragrances`)
                        }}>Perfumes</button>
                    </div>
                    <div className="flex items-center relative justify-center w-full h-full bg-[#0D0D0D]">
                        <img className="" src="https://ik.imagekit.io/vewzaaue0/DevStore/sunglass.jpeg?updatedAt=1711401619826"></img>
                        <button className="font-semibold absolute bottom-3 left-2 underline hover:scale-110 transition-transform ease-in-out duration-200 delay-0" onClick={()=>{
                            navigate(`/category/sunglasses`)
                        }}>Sunglasses</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}