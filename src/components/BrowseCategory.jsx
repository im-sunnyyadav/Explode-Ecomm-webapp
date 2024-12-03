import { useNavigate } from "react-router-dom"

import { categoryArray } from "../utils/categories"

export const BrowseCategory = () => {
    const navigate = useNavigate()
    
    return <div className="flex flex-col gap-5 mx-2">
        <div>
            <div className="flex gap-5 items-center">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div className=" text-[#DB4444] font-semibold">Categories</div>
            </div>
            <div className="text-[36px] font-semibold">
                Browse By Category
            </div>
        </div>

        <div className="categories">
            <div className=" marquee  ">
                {categoryArray.map( cat => {
                    return <div className="flex flex-col cursor-pointer items-center hover:scale-110 transition-transform ease-in-out duration-200 delay-0  justify-center min-w-[170px] h-[140px] border-[3px] rounded hover:bg-[#DB4444] hover:text-white hover:border-0 hover:rounded-md" key={cat.name}
                        onClick={()=>{
                            navigate(`/category/${cat.name}`)
                        }}>
                        <div className="flex items-center justify-center h-[56px] w-[56px]">{cat.icon}</div>
                        <div className="whitespace-nowrap">{cat.name}</div>
                    </div>
                })}
            </div>
            <div className=" marquee ">
                {categoryArray.map( cat => {
                    return <div className="flex flex-col cursor-pointer items-center hover:scale-110 transition-transform ease-in-out duration-200 delay-0  justify-center min-w-[170px] h-[140px] border-[3px] rounded hover:bg-[#DB4444] hover:text-white hover:border-0 hover:rounded-md" key={cat.name}
                        onClick={()=>{
                            navigate(`/category/${cat.name}`)
                        }}>
                        <div className="flex items-center justify-center h-[56px] w-[56px]">{cat.icon}</div>
                        <div className="whitespace-nowrap">{cat.name}</div>
                    </div>
                })}
            </div>
        </div>
    </div>
}