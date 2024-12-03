import Confetti from 'react-confetti'
import { useNavigate } from "react-router-dom"



export const Success = () => {
    const navigate = useNavigate();

    return <div className='flex z-20 fixed top-0 bottom-0 left-0 right-0 justify-center items-center text-white bg-gradient-to-b from-red-700  to-orange-500 h-screen w-screen'>
        <Confetti
        width={3000}
        height={1000}
        />
        <div className='flex flex-col items-center gap-3'>
            <div className='text-[40px] font-bold'>Order Placed</div>
            <div className='text-[25px] font-semibold'>Thankyou for ordering from Explode</div>
            <button className='px-3 py-1 bg-white border-black text-black  text-[20px] rounded-[10px] hover:scale-110 ease-linear delay-0 duration-100 transition-transform'
                onClick={()=>{
                    navigate('/')
                }}
            >Continue Shopping</button>

        </div>
    </div>
}