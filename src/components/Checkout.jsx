import { IoCheckmark } from "react-icons/io5";
import monitor from '../assets/images/monitor.png'
import controller from '../assets/images/controller.png'
import bkash from '../assets/images/Bkash.png'
import nagad from '../assets/images/Nagad.png'
import mastercard from '../assets/images/Mastercard.png'
import visa from '../assets/images/Visa.png'
function Checkout(){
    return(
        <>
            <section className="pb-35 px-4">
                <div className="container mx-auto px-4">
                    <div className="pt-16 pb-16">
                        <p><a href="" className="text-[14px] leading-5 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home / Cart /<span className="text-[#000000]"> CheckOut</span></a></p>
                    </div>
                    <div className="checkoutMain flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-[40%]">
                            <div className="1">
                                
                                <div className="inputs">
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">First Name*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Company Name</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Street Address*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Apartment, floor, etc. (optional)</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Town/City*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Phone Number*</h5>
                                        <input type="text" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    <div className="mb-8">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] pb-2">Email Address*</h5>
                                        <input type="email" className="bg-[#F5F5F5] w-full outline-0 h-12 rounded-sm px-4" />
                                    </div>
                                    
                                    <div className="agreed flex gap-4 items-center flex-wrap">
                                        <input id="agreed" type="checkbox" className="hidden"/>
                                        <label htmlFor="agreed" className="flex gap-2 cursor-pointer items-center">
                                            <span className="w-6 h-6 bg-[#DB4444] rounded-sm text-white flex justify-center items-center"><IoCheckmark className="inline-block"/></span>
                                            <span className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#000000]">Save this information for faster check-out next time</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[60%]">
                            <div className="flex justify-between items-center pb-8">
                                <div className="flex gap-4 items-center">
                                    <img src={controller} alt="" className="max-w-[40px] md:max-w-[60px]" />
                                    <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">LCD Monitor</p>
                                </div>
                                <div className="">
                                    <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">$650</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pb-8">
                                <div className="flex gap-4 items-center">
                                    <img src={monitor} alt="" className="max-w-[40px] md:max-w-[60px]" />
                                    <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">H1 Gamepad</p>
                                </div>
                                <div className="">
                                    <p className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">$1100</p>
                                </div>
                            </div>

                            <div className="total">
                                <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)]">
                                <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Subtotal:</h4>
                                <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                                </div>

                                <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)] pt-4">
                                    <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Shipping:</h4>
                                    <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Free</p>
                                </div>

                                <div className="sub flex justify-between items-center pb-8 pt-4">
                                    <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Total:</h4>
                                    <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                                </div>
                            </div>

                           <div className="">
                            <div className="pay flex flex-wrap gap-4 items-center pb-8">
                                <input id="pay" type="radio" name="pay" className="hidden"/>
                                <label htmlFor="pay" className="flex gap-2 cursor-pointer items-center">
                                    <span className="w-6 h-6 border-2 rounded-full  flex justify-center items-center"></span>
                                    <span className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#000000]">Bank</span>
                                </label>
                                <div className="cards flex flex-wrap gap-2">
                                    <img src={bkash} alt="" className="max-h-6 md:max-h-8" />
                                    <img src={nagad} alt="" className="max-h-6 md:max-h-8" />
                                    <img src={mastercard} alt="" className="max-h-6 md:max-h-8" />
                                    <img src={visa} alt="" className="max-h-6 md:max-h-8" />
                                </div>
                            </div>
                            <div className="pay2 flex gap-4 items-center">
                                <input id="pay2" type="radio" name="pay2" className="hidden"/>
                                <label htmlFor="pay2" className="flex gap-2 cursor-pointer items-center">
                                    <span className="w-6 h-6 border-2 rounded-full  flex justify-center items-center"></span>
                                    <span className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[#000000]">Cash on delivery</span>
                                </label>
                            </div>
                           </div>

                           <div className="py-8">
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                    <input type="text" placeholder='Coupon Code' className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] py-4 pl-4 outline-0 border border-[#000000] rounded-sm w-full sm:w-auto flex-1'/>
                                    <a href="" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-4 px-8 md:px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA] text-center flex-shrink-0'>Apply Coupon</a>
                                </div>
                           </div>

                           <div className="">
                            <a href="" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-4 px-8 md:px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA] inline-block w-full sm:w-auto text-center'>Place Order</a>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Checkout
