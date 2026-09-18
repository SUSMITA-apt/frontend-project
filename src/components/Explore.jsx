import { FaStar } from "react-icons/fa"
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa6"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { useEffect, useState } from "react";
import axios from "axios";

function Explore(){

    const [visible, setVisible] = useState(4)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    },[])

    return(
        <>
            <section className="px-4">
                <div className="container mx-auto px-4">
                    <div className="headline pb-10">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold">Our Products</div>
                        </div>

                        <div className="flex">
                            <div className="flex justify-between w-full items-center flex-wrap gap-4">
                                <div className="">
                                    <h1 className="text-[24px] md:text-[36px] leading-12 font-inter font-semibold text-[#000000]">Explore Our Products</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="product pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
                        {
                            products.slice(0, visible).map((product)=>(
                                <div className="1" key={product.id}>
                                    <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-4 md:p-6">
                                        <img src={product.thumbnail} alt="" className='mx-auto object-contain h-48' />
                                        <div className="icon absolute top-3 right-3">
                                            <FaRegHeart  className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2'/>
                                            <MdOutlineRemoveRedEye className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]'/>
                                        </div>
                                        <div className="btn absolute bottom-2 left-0 w-full">
                                            <a href="" className='text-[14px] md:text-[16px] leading-6 font-poppins font-medium py-2 px-4 w-full text-center bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500 block'>Add To Cart</a>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <h3 className='text-[16px] leading-6 font-medium font-poppins'>{product.title}</h3>
                                        
                                        <div className="icons flex items-center flex-wrap">
                                            <div className="price pr-2">
                                                <p className='text-[#DB4444] text-[16px] leading-6 font-medium font-poppins py-2'>${product.price}</p>
                                            </div>
                                            <div className="flex">
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[#FFAD33]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[rgba(0,0,0,0.25)]'/>
                                                <FaStar className='text-[18px] md:text-[20px] text-[rgba(0,0,0,0.25)]'/>
                                            </div>
                                            <div className="pl-2">
                                                <p className='text-[14px] leading-5.25 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>(35)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                            

                        </div>
                        

                        {
                            visible < products.length &&
                            <div className="button flex justify-center pb-20 ">
                                <a onClick={()=> setVisible(visible+4)} className='text-[16px] leading-6 font-poppins font-medium text-[#FAFAFA] py-3 px-8 md:py-4 md:px-12 bg-[#DB4444] rounded-sm cursor-pointer'>View All Products</a>
                            </div>
                        }

                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Explore