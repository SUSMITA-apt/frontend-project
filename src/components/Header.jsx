import apple from '../assets/images/apple.png'
import model1 from '../assets/images/model1.png'
import model2 from '../assets/images/model2.png'
import model3 from '../assets/images/model3.png'
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
function Header(){
    var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
  };

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    }, [])
    
    
      return(
        <>
            <section className="pb-10 px-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row">
                        {/* Categories Sidebar */}
                        <div className="hidden lg:block w-[20%] border-r border-[rgba(0,0,0,0.25)] pt-6 pr-4 flex flex-col gap-3">
                            {
                                categories.slice(0,9).map(category=>(
                                    <ul key={category.slug}>
                                        <li><Link to={`/products/category/${category.slug}`} className="block py-1">{category.name}</Link></li>
                                    </ul>  
                                ))
                            }
                        </div>
                        {/* Hero Slider */}
                        <div className="w-full lg:w-[80%] pt-6 lg:pl-10">
                            <Slider {...settings}>
                                <div>
                                    <div className="flex flex-col md:flex-row bg-black items-center pt-4 px-4 md:px-8">
                                        <div className="w-full md:w-[45%] py-4">
                                            <div className="flex gap-4 items-center">
                                                <img src={apple} alt="apple" className="w-8 h-8 md:w-auto md:h-auto" />
                                                <h4 className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA]'>iPhone 14 Series</h4>
                                            </div>
                                            <h2 className='text-[24px] md:text-[36px] lg:text-[48px] font-semibold font-inter text-[#FAFAFA] pt-3'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-4">
                                                <a href="" className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[20px] md:text-[24px]'/>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[55%] flex justify-center">
                                            <img src={model1} alt="model1" className="max-h-64  object-contain" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col md:flex-row bg-black items-center pt-4 px-4 md:px-8">
                                        <div className="w-full md:w-[45%] py-4">
                                            <div className="flex gap-4 items-center">
                                                <img src={apple} alt="apple" className="w-8 h-8 md:w-auto md:h-auto" />
                                                <h4 className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA]'>iPhone 12 pro Series</h4>
                                            </div>
                                            <h2 className='text-[24px] md:text-[36px] lg:text-[48px] font-semibold font-inter text-[#FAFAFA] pt-3'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-4">
                                                <a href="" className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[20px] md:text-[24px]'/>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[55%] flex justify-center">
                                            <img src={model2} alt="model2" className="max-h-64  object-contain" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col md:flex-row bg-black items-center pt-4 px-4 md:px-8">
                                        <div className="w-full md:w-[45%] py-4">
                                            <div className="flex gap-4 items-center">
                                                <img src={apple} alt="apple" className="w-8 h-8 md:w-auto md:h-auto" />
                                                <h4 className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA]'>iPhone 16 Series</h4>
                                            </div>
                                            <h2 className='text-[24px] md:text-[36px] lg:text-[48px] font-semibold font-inter text-[#FAFAFA] pt-3'>Up to 10% off Voucher</h2>
                                            <div className="flex items-center gap-2 pt-4">
                                                <a href="" className='font-poppins font-normal text-[14px] md:text-[16px] text-[#FAFAFA] border-b border-[#FAFAFA] pb-1'>Shop Now </a>
                                                <GoArrowRight className='text-[#FAFAFA] text-[20px] md:text-[24px]'/>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[55%] flex justify-center">
                                            <img src={model3} alt="model3" className="max-h-64 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header