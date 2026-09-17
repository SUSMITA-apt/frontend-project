import flash1 from '../assets/images/flash1.png'
import flash2 from '../assets/images/flash2.png'
import flash3 from '../assets/images/flash3.png'
import flash4 from '../assets/images/flash4.png'
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Flash(){

    const Flashsale = [
        {id:1, name:'AK-900 Wired Keyboard', dprice:'-40%', price:'$960', img:flash1},
        {id:2, name:'IPS LCD Gaming Monitor', dprice:'-35%', price:'$370', img:flash2},
        {id:3, name:'RGB liquid CPU Cooler', dprice:'-30%', price:'$160', img:flash3},
        {id:4, name:'AK-900 Wired Keyboard', dprice:'-25%', price:'$160', img:flash1},
        {id:5, name:'RGB liquid CPU Cooler', dprice:'-25%', price:'$160', img:flash4},
    ]

    return(
        <>
            <section className="pb-20 px-4">
                <div className="container mx-auto px-4">
                    <div className="headline pb-10">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">Today’s</div>
                        </div>

                        <div className="flex">
                            <div className="flex justify-between w-full items-center flex-wrap gap-4">
                                <div className="">
                                    <h1 className="text-[24px] md:text-[36px] leading-12 font-inter font-semibold text-[#000000]">Flash Sales</h1>
                                </div>
                                <div className="arrows flex gap-2">
                                    <div className="bg-[#F5F5F5] p-3 rounded-full">
                                        <FaArrowLeft className="w-6 prev cursor-pointer h-6 flex items-center justify-center "/>
                                    </div>
                                    <div className="bg-[#F5F5F5] p-3 rounded-full">
                                        <FaArrowRight className="w-6 h-6 next cursor-pointer flex items-center justify-center "/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product pt-10">
                        

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    nextEl:".next",
                                    prevEl: ".prev"
                                }}
                                pagination={{ 
                                    clickable: true
                                }}
                                breakpoints={{
                                    0:    { slidesPerView: 1 },
                                    640:  { slidesPerView: 1 },
                                    768:  { slidesPerView: 2 },
                                    1024: { slidesPerView: 4 },
                                }}
                                speed={1300}
                                autoplay={{ delay: 2200 }}
                                loop={true}
                            >

                            {
                                Flashsale.map(sale=>(
                                    <SwiperSlide>
                                    <div className="1" key={sale.id}>
                                        <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-4 md:p-6">
                                            <Link to="/product/detail">
                                                <img src={sale.img} alt="" className='mx-auto object-contain h-48' />
                                            </Link>
                                            <div className="icon absolute top-3 right-3">
                                                <FaRegHeart  className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2'/>
                                                <MdOutlineRemoveRedEye className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]'/>
                                            </div>
                                            <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                                                <h5 className='text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]'>{sale.dprice}</h5>
                                            </div>
                                            <div className="btn absolute bottom-2 left-0 w-full">
                                                <a href="" className='text-[14px] md:text-[16px] leading-6 font-poppins font-medium py-2 px-4 w-full text-center bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500 block'>Add To Cart</a>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <Link to="/product/detail"><h3 className='text-[16px] leading-6 font-medium font-poppins'>{sale.name}</h3></Link>
                                            <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>$120 <del className='text-[rgba(0,0,0,0.4)] pl-3'>$160</del></p>
                                            <div className="icons flex">
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <div className="pl-2">
                                                    <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(88)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>

                        <div className="button pt-10 flex justify-center pb-10 border-b border-[rgba(0,0,0,0.25)]">
                            <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-3 md:py-4 px-8 md:px-12 bg-[#DB4444] rounded-sm'>View All Products</a>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default Flash