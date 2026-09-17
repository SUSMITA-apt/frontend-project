import { AiOutlineSend } from "react-icons/ai";
import QR from '../assets/images/QR.png'
import AppStore from '../assets/images/AppStore.png'
import GooglePlay from '../assets/images/GooglePlay.png'
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { IoAtCircleOutline } from "react-icons/io5";

function Footer(){
    return(
        <>
            <footer className="bg-black pb-10 border-b border-[rgba(255,255,255,0.4)] pt-16 px-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap lg:flex-nowrap lg:gap-10">
                        <div className="w-full md:w-1/2  lg:w-[25%]">
                            <h2 className="text-[20px] md:text-[24px] leading-6 font-bold font-inter text-[#FAFAFA]">Exclusive</h2>
                            <h5 className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins py-4 text-[#FAFAFA]">Subscribe</h5>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal pb-4 font-poppins text-[#FAFAFA]">Get 10% off your first order</p>
                            <div className="form relative">
                                <input type="text" placeholder="Enter your email" className="border border-[#FAFAFA] text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(250,250,250,0.4)] w-full py-3 pl-4 pr-12 rounded-sm bg-transparent"/>
                                <AiOutlineSend className="text-[20px] md:text-[24px] text-[#FAFAFA] absolute right-4 top-1/2 -translate-y-1/2"/>
                            </div>
                        </div>

                        <div className="w-1/2 sm:w-1/2 md:w-1/2 pl-0 md:pl-10 lg:pl-0 pt-5 md:pt-0 lg:w-[20%]">
                            <h3><a href="" className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Support</a></h3>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins pt-4 text-[#FAFAFA]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 text-[#FAFAFA]">exclusive@gmail.com</p>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">+88015-88888-9999</p>
                        </div>

                        <div className="w-1/2 sm:w-1/2 md:w-1/3 pt-5 lg:pt-0 lg:w-[20%]">
                            <h3><a href="" className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Account</a></h3>
                            <p className="pt-4"><a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">My Account</a></p>
                            <p className="py-3"><a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Login / Register</a></p>
                            <p><a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Cart</a></p>
                            <p className="py-3"><a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Wishlist</a></p>
                            <p><a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Shop</a></p>
                        </div>

                        <div className="w-1/2 sm:w-1/2 md:w-1/3 pt-5 lg:pt-0 lg:w-[15%]">
                            <h3><a href="" className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Quick Link</a></h3>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins pt-4 text-[#FAFAFA]">Privacy Policy</p>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 text-[#FAFAFA]">Terms Of Use</p>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins pb-3 text-[#FAFAFA]">FAQ</p>
                            <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#FAFAFA]">Contact</p>
                        </div>

                        <div className="w-1/2 md:w-1/3 pt-5 lg:pt-0 lg:w-[20%]">
                            <h3><a href="" className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins text-[#FAFAFA]">Download App</a></h3>
                            <p className="text-[12px] leading-4.5 font-medium font-poppins text-[rgba(250,250,250,0.7)] pt-4 pb-2">Save $3 with App New User Only</p>
                            <div className="links flex flex-wrap gap-2 pb-6">
                                <div className="qr">
                                    <img src={QR} alt="" className="h-16"/>
                                </div>
                                <div className="stores flex flex-col gap-1">
                                    <img src={GooglePlay} alt="" className="h-8"/>
                                    <img src={AppStore} alt="" className="h-8"/>
                                </div>
                            </div>
                            <div className="icons flex gap-6">
                                <a href=""><RiFacebookLine className="text-[20px] md:text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><LuTwitter className="text-[20px] md:text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><FaInstagram className="text-[20px] md:text-[24px] text-[#FAFAFA]"/></a>
                                <a href=""><RiLinkedinLine className="text-[20px] md:text-[24px] text-[#FAFAFA]"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="bg-black px-4">
                <div className="container mx-auto px-4">
                    <div className="footer-2 pt-4 pb-6 flex justify-center items-center gap-1">
                        <IoAtCircleOutline className="text-[14px] md:text-[16px] text-[rgba(255,255,255,0.4)]"/>
                        <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(255,255,255,0.4)]">Copyright Rimel 2022. All right reserved</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer
