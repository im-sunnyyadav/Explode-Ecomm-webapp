import { Image } from "../components/Image"
import { InputBox } from "../components/Inputbox"

import { useNavigate, Link } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    return <>
        <div className="flex flex-col md:flex-row md:gap-[100px] my-12 max-w-[1000px]  mx-auto justify-center items-center">
            <div className="h-[600px] mx-2">
                <Image src="https://ik.imagekit.io/vewzaaue0/DevStore/login.png?updatedAt=1711620613140"></Image>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="text-[36px] font-medium">Log in to Explode</h1> 
                    <p>Enter your details below</p> 
                </div>
                <div className="flex flex-col gap-3 items-start">
                    <InputBox type="text" placeholder="Email or Phone Number"/>
                    <InputBox type="password" placeholder="Password"/>
                </div>
                <div className="flex flex-col gap-5 items-center ">
                    <div className="flex justify-between gap-5 items-center w-full">
                        <button className="bg-[#DB4444] text-white px-9 py-3 rounded" onClick={()=>{
                            navigate('/')
                        }}>Login</button>
                        <div className="text-[#DB4444] cursor-pointer">Forgot Password?</div>
                    </div>
                    <p>Don't have an account ? <Link className="underline" to="/signup">Signup</Link></p>
                </div>
            </div>
        </div>
    </>
}