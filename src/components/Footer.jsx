import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export const Footer = ({contactRef}) => {


    return <div ref={contactRef} className="rlative bottom-0 left-0 right-0  text-white bg-black">
        <div className="flex flex-wrap justify-around gap-8  px-[50px] py-[50px] mx-auto">
            <div className="flex flex-col w-[230px] gap-6">
                <div >
                    <div className="text-[24px] bold">Explode</div>
                    <div>Subscribe</div>
                </div>
                <div>Get 10% of on your first order</div>
                <div className="flex items-center justify-between border rounded max-w-[220px]">
                    <input className="bg-transparent py-2" type="text" placeholder="Enter your email"/>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[230px] gap-6">
                <div>
                        <div className="text-[24px] bold">Explode</div>
                        <div>Sector-17, Chandigarh</div>
                    </div>
                    <div>Explode@gmail.com</div>
                    <div>+88015-88888-9999</div>
                </div>
            <div className="flex flex-col w-[230px] gap-4">
                <div className="text-[24px] bold">Acount</div>
                <div>My Acount</div>
                <div>Login / Register</div>
                <div>Cart</div>
                <div>Wishlist</div>
                <div>shop</div>
            </div>
            <div className="flex flex-col w-[230px] gap-4">
                <div className="text-[24px] bold">Quick Links</div>
                <div>Privacy Policy</div>
                <div>Terms Of Use</div>
                <div>FAQ</div>
                <div>Contact</div>
            </div>
            
            <div className="flex flex-col w-[230px] gap-5">
                <div>Download App</div>
                <div className="flex flex-col gap-3">
                    <div className="text-[#FAFAFA]">Save $3 with App New User Only</div>
                    <div className="flex max-w-[180px] gap-3 p-1 border border-white rounded-md items-center">
                        <FcGoogle size={30}/>
                        <div>
                            <div className="text-[12px]">GET IT ON</div>
                            <div className="text-[20px] font-semibold">Google Play</div>
                        </div>
                    </div>
                    <div className="flex max-w-[180px] gap-3 p-1 border border-white rounded-md items-center">
                        <AiFillApple size={30}/>
                        <div>
                            <div className="text-[12px]">DOWNLOAD ON THE</div>
                            <div className="text-[20px] font-semibold">App Store</div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
}