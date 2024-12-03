import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { kartAtom } from "../store/atoms/kartAtom";

import { menuAtom } from '../store/atoms/menuAtom'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export const Navbar = ({contactRef})=>{
    const navigate = useNavigate();

    const kart = useRecoilValue(kartAtom)
    const [menu, setMenu] = useRecoilState(menuAtom)
    
    const scrollHandler = ()=>{
        window.scrollTo({ top : contactRef.current.offsetTop, behavior: "smooth"})
    }
    

    return <div className="flex z-10 bg-white p-2 sm:p-5 sticky top-0 items-center justify-between flex-grow border-b-[2px] gap-1">
        <div className="flex justify-between max-w-[50%] gap-5 flex-grow">
            <div className="text-2xl font-bold text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600" onClick={()=>{
                navigate('/')
            }}>
                Explode
            </div>
            <div className="hidden md:flex items-center flex-end gap-7 ">
                <button className="buttonUnderline text-[20px] font-medium" onClick={()=>{
                    navigate('/')
                }}>Home</button>
                <button className=" buttonUnderline text-[20px] font-medium" onClick={scrollHandler}>contact</button>
                <button className="buttonUnderline text-[20px] whitespace-nowrap font-medium" onClick={()=>{
                    navigate('/login')
                }}>Sign In</button>
                <button className="buttonUnderline text-[20px] font-medium whitespace-nowrap" onClick={()=>{
                    navigate('/signup')
                }}>Sign Up</button>
            </div>
            <div className={`absolute flex items-center justify-center z-10 bg-slate-100 h-[100vh]  ${menu ? "translate-y-0" : "-translate-y-full"} top-0 bottom-0 left-0 right-0 transition-transform ease-in-out duration-300 delay-0`}>
                <button className="absolute top-5 right-5" onClick={() => setMenu(false)}><RxCrossCircled size={30} /></button>
                <div className="flex flex-col  gap-4 ">
                    <button className="buttonUnderline text-[20px] font-medium" onClick={()=>{
                        navigate('/')
                        setMenu(false)
                    }}>Home</button>
                    <button className=" buttonUnderline text-[20px] font-medium" onClick={()=>{
                        setMenu(false)
                        scrollHandler()
                    }}>contact</button>
                    <button className="buttonUnderline text-[20px] whitespace-nowrap font-medium" onClick={()=>{
                        navigate('/login')
                        setMenu(false)
                    }}>Sign In</button>
                    <button className="buttonUnderline text-[20px] font-medium whitespace-nowrap" onClick={()=>{
                        navigate('/signup')
                        setMenu(false)
                    }}>Sign Up</button>
                </div>
            </div>
        </div>
        <div className="flex items-center cursor-pointer gap-4 md:gap-4">
            <div className=" hidden  lg:flex items-center gap-1 bg-[#F5F5F5] py-[7px] rounded px-[15px]">
                <input className="bg-[#F5F5F5] hidden md:block" placeholder="What are you looink for ?" type="text" />
                <BsSearch size={20} />
            </div>
            <div className="hidden lg:block">
                <AiOutlineHeart size={30} />
            </div>
            <div className="relative cursor-pointer p-2" onClick={()=>{
                navigate('/product/kart')
            }}>
                {(kart>0) ? <div className="flex justify-center  items-center absolute top-0 right-0 bg-[#DB4444] rounded-full size-5 text-white">{kart}</div> : <></>}
                <AiOutlineShoppingCart size={30} />

            </div>
            <div className="cursor-pointer bg-[#DB4444] text-white p-2 rounded-full">
                <AiOutlineUser size={25} />
            </div>
            <div className="md:hidden " onClick={()=>{
                setMenu( prev => !prev);
            }}>
                <AiOutlineMenu size={30} />
            </div>
            <div></div>
        </div>
    </div>
}