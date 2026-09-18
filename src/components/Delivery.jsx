import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Delivery(){
    return(
        <>
            <section className="pb-20 px-4">
                <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-22 justify-center">
                            <div className="1 w-full md:w-auto">
                                <div className='bg-black w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex justify-center items-center border-8 md:border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <TbTruckDelivery className='text-white w-6 h-6 md:w-8 md:h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[18px] md:text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>FREE AND FAST DELIVERY</h3>
                                    <p className='text-[14px] leading-5 font-poppin font-normal'>Free delivery for all orders over $140</p>
                                </div>
                            </div>

                            <div className="1 w-full md:w-auto">
                                <div className='bg-black w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex justify-center items-center border-8 md:border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <RiCustomerService2Line className='text-white w-6 h-6 md:w-8 md:h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[18px] md:text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>24/7 CUSTOMER SERVICE</h3>
                                    <p className='text-[14px] leading-5 font-poppin font-normal'>Friendly 24/7 customer support</p>
                                </div>
                            </div>

                            <div className="1 w-full md:w-auto">
                                <div className='bg-black w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex justify-center items-center border-8 md:border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                    <VscWorkspaceTrusted className='text-white w-6 h-6 md:w-8 md:h-8 mx-auto'/>
                                </div>
                                <div className="text-center">
                                <h3 className='text-[18px] md:text-[20px] pt-6 pb-2 font-poppin font-semibold leading-7 text-black '>MONEY BACK GUARANTEE</h3>
                                    <p className='text-[14px] leading-5 font-poppin font-normal'>We reurn money within 30 days</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Delivery