import { ShimmerThumbnail, ShimmerText } from "react-shimmer-effects"

export const Shimmer = ()=>{
    const array = [1,2,3,4,5,6];
    return (
        <div className="flex flex-wrap mt-[150px] my-10">
            {array.map ( x => {
                return <div key={x} className="flex flex-col mx-auto my-auto">
                    <div className="p-2">
                        <ShimmerThumbnail height={300} width={300}></ShimmerThumbnail>
                    </div>
                    <div className="w-[300px]">
                        <ShimmerText line={2} gap={10}></ShimmerText>
                    </div>
                </div>
            })}
        </div>
    )
}