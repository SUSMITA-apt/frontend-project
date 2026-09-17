import { FaStar } from "react-icons/fa"
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa6"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import flash1 from '../assets/images/flash1.png';
import explore1 from '../assets/images/explore1.png'
import explore2 from '../assets/images/explore2.png'
import explore3 from '../assets/images/explore3.png'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";


function Categoryproduct(){

    const [catproducts, setCatproucts] = useState([])
    const {slug} = useParams()

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${slug}`)
        .then(res => setCatproucts(res.data.products))
        .catch(err => console.log(err))
    },[slug])

    const [visible, setVisible] = useState(4)
    return(
        <>
            <section className="pt-16 md:pt-20 px-4">
                <div className="container mx-auto px-4">
                    <div className="headline pb-15">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[14px] md:text-[16px] leading-5 font-poppins font-semibold text-[#000000]">Category</div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="">
                                <h1 className="text-[24px] md:text-[36px] leading-8 md:leading-12 font-inter font-semibold text-[#DB4444]">{slug}</h1>
                            </div>
                            <div className="arrows flex gap-2">
                                <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                    <FaArrowLeft className="w-6 h-6 flex items-center justify-center "/>
                                </div>
                                <div className="bg-[#F5F5F5] p-2.75 rounded-full">
                                    <FaArrowRight className="w-6 h-6 flex items-center justify-center "/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product pt-6 md:pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7.5 pb-15">
                        {
                            catproducts.slice(0, visible).map((product, index)=>(
                                <div className="1" key={index}>
                                    <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-6 md:p-12.25">
                                        <img src={product.thumbnail} alt="" className='mx-auto max-h-40 md:max-h-48 object-contain' />
                                        <div className="icon absolute top-3 right-3">
                                            <FaRegHeart  className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2'/>
                                            <MdOutlineRemoveRedEye className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]'/>
                                        </div>
                                        <div className="btn absolute bottom-2 left-0 w-full">
                                            <a href="" className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-poppins font-medium py-2 px-4 w-full text-center bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500 block'>Add To Cart</a>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <h3 className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-medium font-poppins'>{product.title}</h3>
                                        
                                        <div className="icons flex items-center flex-wrap gap-2">
                                            <div className="price pr-2">
                                                <p className='text-[#DB4444] text-[14px] md:text-[16px] leading-5 md:leading-6 font-medium font-poppins py-2'>{product.price}</p>
                                            </div>
                                            <div className="flex">
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[rgba(0,0,0,0.25)]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[rgba(0,0,0,0.25)]'/>
                                            </div>
                                            <div className="pl-2">
                                                <p className='text-[12px] md:text-[14px] leading-5 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(35)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                            

                        </div>
                        


                        {
                            visible < catproducts.length &&
                            <div className="button flex justify-center pb-46 ">
                                <a onClick={()=> setVisible(visible+4)} className='text-[14px] md:text-[16px] leading-5 md:leading-6 font-poppins font-medium text-[#FAFAFA] py-3 px-8 md:py-4 md:px-12 bg-[#DB4444] rounded-sm cursor-pointer'>View All Products</a>
                            </div>
                        }

                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Categoryproduct
