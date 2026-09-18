import registar from '../assets/images/registar.png'
import { FcGoogle } from "react-icons/fc";

function Login(){
    
    return(
        <>
            <section className='relative pt-12 md:pt-15 pb-20 md:pb-35 overflow-hidden'>
                <div className="hidden lg:block lg:w-[52%]">
                    <img src={registar} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="lg:absolute lg:top-0 lg:left-0 w-full h-full flex items-center justify-center px-4">
                    <div className="container mx-auto px-4 h-full">
                        <div className="h-full flex justify-center lg:justify-end items-center">
                            <div className="div w-full max-w-md">
                                <h1 className='text-[24px] md:text-[36px] leading-6 md:leading-7.5 font-medium font-inter'>Log in to Exclusive</h1>
                                <p className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins pt-4 md:pt-6 pb-8 md:pb-12'>Enter your details below</p>
                                <div className="form flex flex-col gap-8 md:gap-10">
                                    <input type="email" placeholder='Email or Phone Number' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>
                                    <input type="password" placeholder='Password' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>
                                </div>
                                <div className="btns pt-10 md:pt-14 flex flex-col sm:flex-row gap-6 sm:gap-21.75 items-start sm:items-center">
                                    <a href="" className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-poppins font-medium text-[#FAFAFA] py-3 px-8 md:py-4 md:px-12 bg-[#DB4444] rounded-sm min-h-11 flex items-center justify-center'>Log In</a>
                                    <a href="" className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[#DB4444]'>Forget Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login