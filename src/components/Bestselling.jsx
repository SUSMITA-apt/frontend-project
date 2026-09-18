import flash1 from '../assets/images/flash1.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import best1 from '../assets/images/best1.png'
import best2 from '../assets/images/best2.png'
import best3 from '../assets/images/best3.png'
import best4 from '../assets/images/best4.png'
function Bestselling(){
    const products = [
        {id: 1, img: best1, title: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', reviews: '(65)'},
        {id: 2, img: best2, title: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', reviews: '(65)'},
        {id: 3, img: best3, title: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', reviews: '(65)'},
        {id: 4, img: best4, title: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', reviews: '(65)'},
    ]
    return(
        <>
            <section className="pt-10 pb-20 px-4">
                <div className="container mx-auto px-4">
                    <div className="headline">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">This Month</div>
                        </div>

                        <div className="">
                            <div className="flex justify-between flex-wrap gap-4">
                                <div className="">
                                    <h1 className="text-[24px] md:text-[36px] leading-12 font-inter font-semibold text-[#000000]">Best Selling Products</h1>
                                </div>
                                <div className="arrows">
                                    <div className="button flex justify-center pb-10">
                                        <a href="" className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-3 px-8 md:py-4 md:px-12 bg-[#DB4444] rounded-sm'>View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bestproduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            products.map(product=>(
                                <div className="" key={product.id}>
                                    <div className="1">
                                        <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-4 md:py-8 md:px-10">
                                            <img src={product.img} alt="" className='mx-auto object-contain h-48' />
                                            <div className="icon absolute top-3 right-3">
                                                <FaRegHeart  className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2'/>
                                                <MdOutlineRemoveRedEye className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]'/>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <h3 className='text-[16px] leading-6 font-medium font-poppins'>{product.title}</h3>
                                            <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>{product.price} <del className='text-[rgba(0,0,0,0.4)] pl-3'>{product.oldPrice}</del></p>
                                            <div className="icons flex">
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <div className="pl-2">
                                                    <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>{product.reviews}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                           
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Bestselling