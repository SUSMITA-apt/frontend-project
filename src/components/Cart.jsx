import monitor from '../assets/images/monitor.png'
import controller from '../assets/images/controller.png'
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router';
function Cart (){
        const [count, setCount] = useState(1);

            const price = 650;
            const total = price * count;

            const increment = () => {
            setCount(prev => prev + 1);
            };

            const decrement = () => {
                if (count > 1) {
                    setCount(prev => prev - 1);
                }
            };

        const [value, setValue] = useState(1);

            const price2 = 1100;
            const total2 = price2 * value;

            const increment2 = () => {
            setValue(prev => prev + 1);
            };

            const decrement2 = () => {
                if (value > 1) {
                    setValue(prev => prev - 1);
                }
            };
    return(
        <>
            <section className="px-4">
                <div className="container mx-auto px-4">
                    <div className="pt-10 pb-10">
                        <p><a href="" className="text-[14px] leading-5 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-[#000000]">/ Cart</span></a></p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {/* Header row - hide on mobile, adjust on tablet */}
                        <div className="hidden md:flex justify-between text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-4 px-4 md:px-10 shadow-sm shadow-[rgba(0,0,0,0.05)]">
                            <h4 className="w-1/3">Product</h4>
                            <h4 className="w-1/6 text-center">Price</h4>
                            <h4 className="w-1/6 text-center">Quantity</h4>
                            <h4 className="w-1/6 text-center">Subtotal</h4>
                        </div>

                        {/* Cart Item 1 */}
                        <div className="flex flex-col md:flex-row items-center py-4 px-4 md:py-6 md:px-10 shadow-sm shadow-[rgba(0,0,0,0.05)] gap-4 md:gap-0">
                            <div className="flex gap-4 items-center w-full md:w-1/3 relative group">
                                <img src={monitor} alt="" className="w-16 h-16 object-contain"/>
                                <h4 className="text-[14px] md:text-[16px]">LCD Monitor</h4>
                                <IoIosClose className='absolute md:static md:ml-4 text-[20px] md:text-[24px] bg-[#DB4444] text-[#FAFAFA] rounded-full p-1 cursor-pointer'/>
                            </div>
                            <div className="w-full md:w-1/6 text-center text-[14px] md:text-[16px]">
                                <h4>$650</h4>
                            </div>
                            <div className="w-full md:w-1/6 flex justify-center">
                                <div className="flex gap-4 items-center border border-[rgba(0,0,0,0.4)] py-1.5 px-3 rounded-sm">
                                    <h4 className="text-[14px] md:text-[16px]">{count}</h4>
                                    <div className="icon flex flex-col">
                                        <button onClick={increment} className='cursor-pointer'><MdKeyboardArrowUp /></button>
                                        <button onClick={decrement} className='cursor-pointer'><MdKeyboardArrowDown /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/6 text-center text-[14px] md:text-[16px]">
                                <h4>${total}</h4>
                            </div>
                        </div>

                        {/* Cart Item 2 */}
                        <div className="flex flex-col md:flex-row items-center py-4 px-4 md:py-6 md:px-10 shadow-sm shadow-[rgba(0,0,0,0.05)] gap-4 md:gap-0">
                            <div className="flex gap-4 items-center w-full md:w-1/3 relative group">
                                <img src={controller} alt="" className="w-16 h-16 object-contain"/>
                                <h4 className="text-[14px] md:text-[16px]">Game Controller</h4>
                                <IoIosClose className='absolute md:static md:ml-4 text-[20px] md:text-[24px] bg-[#DB4444] text-[#FAFAFA] rounded-full p-1 cursor-pointer'/>
                            </div>
                            <div className="w-full md:w-1/6 text-center text-[14px] md:text-[16px]">
                                <h4>$1100</h4>
                            </div>
                            <div className="w-full md:w-1/6 flex justify-center">
                                <div className="flex gap-4 items-center border border-[rgba(0,0,0,0.4)] py-1.5 px-3 rounded-sm">
                                    <h4 className="text-[14px] md:text-[16px]">{value}</h4>
                                    <div className="icon flex flex-col">
                                        <button onClick={increment2} className='cursor-pointer'><MdKeyboardArrowUp /></button>
                                        <button onClick={decrement2} className='cursor-pointer'><MdKeyboardArrowDown /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/6 text-center text-[14px] md:text-[16px]">
                                <h4>${total2}</h4>
                            </div>
                        </div>

                    </div>

                    <div className="btn pt-6 pb-10 flex flex-col md:flex-row gap-4 justify-between">
                        <a href="" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 px-6 md:py-4 md:px-12 border border-[rgba(0,0,0,0.5)] rounded-sm text-center'>Return To Shop</a>
                        <a href="" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 px-6 md:py-4 md:px-12 border border-[rgba(0,0,0,0.5)] rounded-sm text-center'>Update Cart</a>
                    </div>

                    <div className="total pb-20 flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder='Coupon Code' className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] py-3 px-4 md:py-4 md:pl-6 outline-0 border border-[#000000] rounded-sm w-full md:w-64'/>
                            <a href="" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 px-6 md:py-4 md:px-12 border border-[rgba(0,0,0,0.5)] rounded-sm bg-[#DB4444] text-[#FAFAFA] text-center'>Apply Coupon</a>
                        </div>
                        <div className="2 border border-[#000000] rounded-sm px-6 w-full md:w-96">
                            <h2 className='text-[18px] md:text-[20px] leading-7 pt-6 font-medium font-poppins pb-4'>Cart Total</h2>

                            <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)]">
                                <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Subtotal:</h4>
                                <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                            </div>

                            <div className="sub flex justify-between items-center pb-4 border-b border-[rgba(0,0,0,0.4)] pt-4">
                                <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Shipping:</h4>
                                <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Free</p>
                            </div>

                            <div className="sub flex justify-between items-center pb-6 pt-4">
                                <h4 className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>Total:</h4>
                                <p className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins'>$1750</p>
                            </div>
                            <div className="button flex justify-center pb-8">
                                <Link to="/checkout" className='text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 px-6 md:py-4 md:px-12 rounded-sm bg-[#DB4444] text-[#FAFAFA] text-center'>Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart