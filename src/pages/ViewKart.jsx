import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { kartIdAtom } from "../store/atoms/KartIdAtom"
import { KartItem } from "../components/KartItem"
import { totalPriceAtom } from "../store/atoms/totalPriceAtom"
import { kartAtom } from "../store/atoms/kartAtom"

import { useNavigate } from "react-router-dom"

export const ViewKart = () => {

    const navigate = useNavigate();

    const setKartCount = useSetRecoilState(kartAtom)

    const [kartId,setKartId] = useRecoilState(kartIdAtom)
    const totalPrice = useRecoilValue(totalPriceAtom)


    return <>
        <div className="flex flex-col gap-10 my-[50px] min-w-[] max-w-[800px] mx-auto">
            { kartId.length == 0 ? (
                <div className="mx-auto my-auto h-[300px] font-semibold">
                    Add Items to kart
                </div>
            ) : (
            <>
            <table className="table overflow-x-auto overflow-auto min-w-[500px] w-full ">
                <thead>
                    <tr className="shadow-md gap-2">
                        <th className="px-8 py-[15px] text-left">Product</th>
                        <th className="px-4 py-[15px] text-left">Price</th>
                        <th className="px-4 py-[15px] text-left">Quantity</th>
                        <th className="px-4 py-[15px] text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {kartId.map( id => {
                        return <KartItem key={id} id={id} />
                    })}
                </tbody>
            </table>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div>
                        <div className="flex gap-5 ">
                            <input className="px-3 py-3 border border-2px border-black rounded" type="text" placeholder="Coupon code"/>
                            <button className="px-5 py-3 text-white rounded bg-[#DB4444]">Apply Coupon</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[40%] px-4 py-4 border rounded border-black">
                        <div className="text-[20px] font-medium">Cart Total</div>
                        <div className="">
                            <div className="flex py-2 border-b-2 justify-between">
                                <div>SubTotal</div>
                                <div>{totalPrice}</div>
                            </div>
                            <div className="flex py-2 border-b-2 justify-between">
                                <div>Shipping</div>
                                <div>Free</div>
                            </div>
                            <div className="flex py-2  justify-between">
                                <div>Total</div>
                                <div>{totalPrice}</div>
                            </div>
                        </div>
                        <button className="px-4 text-white rounded py-2 bg-[#DB4444]" onClick={()=>{
                            navigate('/success')
                            setKartId([])
                            setKartCount(0)
                        }}>Place Order</button>
                    </div>
                </div>
                </>
            )}
        </div>
    </>
}