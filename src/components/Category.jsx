import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Category(){
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    }, [])
    return(
        <>
          <section className="px-4">
            <div className="container mx-auto px-4">
                <div className="headline pb-10">
                    <div className="flex gap-4 items-center pb-6">
                        <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                        <div className="text-[16px] leading-5 font-poppins font-semibold">Categories</div>
                    </div>

                    <div className="flex">
                        <div className="flex justify-between w-full items-center flex-wrap gap-4">
                            <div className="">
                                <h1 className="text-[24px] md:text-[36px] leading-12 font-inter font-semibold text-[#000000]">Browse By Category</h1>
                            </div>
                            <div className="arrows flex gap-2">
                                <div className="bg-[#F5F5F5]  p-3 rounded-full">
                                    <FaArrowLeft className="w-6 h-6 prev cursor-pointer flex items-center justify-center "/>
                                </div>
                                <div className="bg-[#F5F5F5]  p-3 rounded-full">
                                    <FaArrowRight className="w-6 h-6 next cursor-pointer flex items-center justify-center "/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="  pb-10 border-b border-[rgba(0,0,0,0.25)]">

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
                            640:  { slidesPerView: 2 },
                            768:  { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                          }}
                          speed={1300}
                          autoplay={{ delay: 2200 }}
                          loop={true}
                    >

                    {
                        categories.slice(0,5).map(Categorys=>(
                            <SwiperSlide>
                            <Link to={`/products/category/${Categorys.slug}`} key={Categorys.slug}>
                                <div className="">
                                    <div className="icon border border-[rgba(0,0,0,0.3)] py-6 md:py-9 px-4 md:px-8 rounded-sm hover:bg-[#DB4444] duration-500 group flex flex-col items-center">
                                        <h4 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins group-hover:text-[#FFFFFF]">{Categorys.name}</h4>
                                    </div>
                                </div>
                            </Link>
                            </SwiperSlide>
                        ))
                    }

                    </Swiper>

                </div>
            </div>
          </section>
        </>
    )
}
export default Category