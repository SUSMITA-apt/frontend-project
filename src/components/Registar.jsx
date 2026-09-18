import { Link } from 'react-router';
import registar from '../assets/images/registar.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import axios from 'axios';



function Registar(){
    let[formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    let [terms, setTerms] = useState(false)
    
    let handleChange = (e) => {
        console.log(e.target.name)

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
       
    }

    let handleClick = async () => {
       try {
        let data = await axios.post("http://localhost:5000/registration",{
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            terms: terms
        })
        console.log("Registration successful:", data)
    } catch (error) {
        console.error("Error occurred while registering:", error)
    }
    }
    return(
        <>
            <section className='relative pt-12 md:pt-15 pb-35 overflow-hidden'>
                <div className="hidden lg:block lg:w-[52%]">
                    <img src={registar} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="lg:absolute lg:top-0 lg:left-0 w-full h-full flex items-center justify-center px-4">
                    <div className="container mx-auto px-4 h-full">
                        <div className="h-full flex justify-center lg:justify-end items-center">
                            <div className="div w-full max-w-md">
                                <h1 className='text-[24px] md:text-[36px] leading-6 md:leading-7.5 font-medium font-inter'>Create an account</h1>
                                <p className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins pt-4 md:pt-6 pb-8 md:pb-12'>Enter your details below</p>
                                <div className="form flex flex-col gap-8 md:gap-10">
                                    {/* <input type="text" placeholder='Name' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/> */}
                                    <input onChange={handleChange} name="email" type="text" placeholder='Email or Phone Number' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>
                                    <input onChange={handleChange} name="password" type="password" placeholder='Password' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>
                                     <input onChange={handleChange} name="confirmPassword" type="password" placeholder='Confirm Password' className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>
                                     <input onChange={(e) => setTerms(e.target.checked)} name="Terms" type="checkbox" className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins text-[rgba(0,0,0,0.4)] outline-0 border-b border-[rgba(0,0,0,0.5)] w-full pb-2'/>Accept Terms and Conditions
                                </div>
                                <div className="btns pt-10 md:pt-14 flex flex-col gap-6 md:gap-8">
                                    <button onClick={handleClick} className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-poppins font-medium text-[#FAFAFA] py-3 px-8 md:py-4 md:px-30.5 bg-[#DB4444] rounded-sm min-h-11 flex items-center justify-center'>Create Account</button>
                                    <a href="" className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-poppins font-medium text-[#000000] py-3 px-4 md:py-4 md:px-21.5 border border-[rgba(0,0,0,0.4)] rounded-sm flex items-center justify-center min-h-11'><span className='pr-4 text-[20px] md:text-[24px]'><FcGoogle /></span> Sign up with Google</a>
                                </div>

                                <div className="info pt-10 md:pt-12 text-center">
                                    <p className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-normal font-poppins'>Already have account? <span className='pl-4'><Link to="/login" className='border-b border-[rgba(0,0,0,0.5)]'>Log in</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
    export default Registar;