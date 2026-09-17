import { useEffect, useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import flash1 from '../assets/images/flash1.png'
import { Link, useLocation, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import axios from 'axios'

function Details(){
    const {id} = useParams()
    const [previewing, setPreviewing] = useState(null)
    const [gallery, setGallery] = useState([])
    const handleperview = (img) =>{
        setPreviewing(img)
    }

    const colors = [
        {id:1, name:'soft blue', code:'#A0BCE0'},
        {id:2, name:'soft red', code:'#E07575'}
    ]
    const sizes = [
        {id:1, name:'XS'},
        {id:2, name:'S'},
        {id:3, name:'M'},
        {id:4, name:'L'},
        {id:5, name:'XL'},
    ]

    const [count, setCount] = useState(1)

    function inc (){
        setCount(pre => pre + 1)
    }
    function dec (){
        if(count > 1){
            setCount(pre => pre - 1)
        }
    }

    const [showMore, setShowMore] = useState(false)
    const [prodetails, setProdetails] = useState({})

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res =>{
            setProdetails(res.data)
            setPreviewing(res.data.thumbnail)
            setGallery(res.data.images)
        })
    },[id])

    const [related, setRelated] = useState([])
    useEffect(()=>{
        if(!prodetails.category) return
        axios.get(`https://dummyjson.com/products/category/${prodetails.category}`)
        .then(res => setRelated(res.data.products))
    },[prodetails.category])

    return(
        <>
            <section className="px-4">
                <div className="container mx-auto px-4">
                    <div className="pt-16 pb-10">
                        <p><a href="" className="text-[14px] leading-5 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-black">/ product details</span></a></p>
                    </div>

                    <div className="flex flex-col lg:flex-row pb-24 gap-8">
                        <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-6">
                            <div className="flex md:flex-col gap-4 overflow-x-auto pb-2">
                                {
                                    gallery.map((gal, index)=>(
                                        <div className="image flex-shrink-0" key={index}>
                                            <img onClick={()=>handleperview(gal)} src={gal} alt="" className='w-20 h-16 md:w-40 md:h-32 py-2 px-3 md:py-4 md:px-6 bg-[#F5F5F5] rounded-sm cursor-pointer' />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <img src={previewing} alt="" className='max-w-full h-auto max-h-80 md:max-h-[400px] px-3 py-8 md:px-6 md:pt-24 md:pb-24 rounded-sm bg-[#F5F5F5] object-contain' />
                            </div>
                        </div>

                        <div className="w-full lg:w-[35%]">
                            <div className="">
                                <h3 className='text-[20px] md:text-[24px] leading-6 font-semibold font-inter'>{prodetails.title}</h3>
                                <div className="icon flex flex-wrap items-center py-4">
                                    <div className="flex items-center">
                                        {
                                            Array.from({length:5}).map((_,i)=>{
                                                const rating = prodetails.rating
                                                const fullstar = Math.floor(rating)
                                                const halfstar = rating - fullstar >= 0.5

                                                if(fullstar > i) return <TiStarFullOutline key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />
                                                if(i === fullstar && halfstar) return <FaRegStarHalfStroke key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />

                                                return <FaRegStar key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />
                                            })
                                        }
                                    </div>
                                    <h5 className='text-[12px] md:text-[14px] leading-5 font-normal font-poppins pr-2 pl-2 text-[rgba(0,0,0,0.5)]'>({prodetails.reviews?.length} Reviews)</h5>
                                    <div className="pl-3 border-l border-[rgba(0,0,0,0.5)]">
                                        <h6 className={`${prodetails.stock ? 'text-[#00FF66]' : 'text-red-600'} text-[12px] md:text-[14px] leading-5 font-normal font-poppins`}>{prodetails.stock ? 'In Stock' : 'Out Of Stack'}</h6>
                                    </div>
                                </div>
                                <p className='text-[20px] md:text-[24px] leading-6 font-semibold font-inter pb-6'>{prodetails.price}$</p>
                                <div className='pb-6 border-b border-[rgba(0,0,0,0.5)]'>
                                    <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-40': 'max-h-10'}`}>
                                        <p className='text-[14px] leading-5 font-normal font-poppins'>{prodetails.description}</p>
                                    </div>
                                    <span onClick={()=> setShowMore(!showMore)} className="underline cursor-pointer text-sm">
                                        {
                                            showMore ? 'See less..' : 'See more..'
                                        }
                                    </span>
                                </div>

                                <div className="py-6 flex gap-4 items-center">
                                    <p className='text-[16px] md:text-[20px] leading-5 font-normal font-inter'>Colours:</p>
                                    <div className="flex gap-2">
                                        {
                                            colors.map((color, index)=>(
                                                <div className="color" key={index}>
                                                    <input id={`color${color.id}`} name='color' type="radio" className='hidden'/>
                                                    <label htmlFor={`color${color.id}`} className="cursor-pointer">
                                                        <span style={{backgroundColor:color.code}} className='w-5 h-5 inline-block rounded-full'></span>
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="pb-6 flex gap-4 items-center">
                                    <p className='text-[16px] md:text-[20px] leading-5 font-normal font-inter'>Size:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            sizes.map((size, index)=>(
                                                <div className="size" key={index}>
                                                    <input id={`size${size.id}`} name='size' type="radio" className='hidden'/>
                                                    <label htmlFor={`size${size.id}`} className="cursor-pointer">
                                                        <span className='w-8 h-8 border border-[rgba(0,0,0,0.5)] rounded-sm inline-flex justify-center items-center text-sm'>{size.name}</span>
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex">
                                        <div className="w-10 h-10 border border-[rgba(0,0,0,0.5)] rounded-l-sm flex justify-center group items-center hover:border-[#DB4444] hover:bg-[#DB4444]" onClick={dec}>
                                            <LuMinus className='text-[20px] md:text-[24px] group-hover:text-[#FFFFFF]' />
                                        </div>
                                        <div className="w-16 h-10 border border-[rgba(0,0,0,0.5)] flex justify-center items-center select-none">
                                            {count}
                                        </div>
                                        <div className="w-10 h-10 border border-[rgba(0,0,0,0.5)] flex justify-center rounded-r-sm group items-center hover:border-[#DB4444] hover:bg-[#DB4444]" onClick={inc}>
                                            <FiPlus className='text-[20px] md:text-[24px] group-hover:text-[#FFFFFF]' />
                                        </div>
                                    </div>

                                    <a href="" className='text-[14px] md:text-[16px] leading-6 font-medium font-poppins bg-[#DB4444] text-[#FAFAFA] py-2.5 px-8 md:px-12 rounded-sm select-none flex-shrink-0'>Buy Now</a>

                                    <div className="w-10 h-10 border border-[rgba(0,0,0,0.5)] flex justify-center rounded-sm group items-center hover:border-[#DB4444] hover:bg-[#DB4444]">
                                        <IoMdHeartEmpty className='text-[24px] md:text-[32px] group-hover:text-[#FFFFFF]' />
                                    </div>
                                </div>

                                <div className="pt-6 pb-4 pl-4 border mt-8 border-[rgba(0,0,0,0.5)] flex gap-4 rounded-t-sm">
                                    <TbTruckDelivery className='text-[32px] md:text-[40px]' />
                                    <div className="">
                                        <h6 className='text-[14px] md:text-[16px] leading-6 font-medium font-poppins pb-2'>Free Delivery</h6>
                                        <p className='text-[12px] leading-4.5 font-medium font-poppins'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 pl-4 border border-[rgba(0,0,0,0.5)] flex gap-4 rounded-b-sm">
                                    <BsArrowRepeat className='text-[32px] md:text-[40px]' />
                                    <div className="">
                                        <h6 className='text-[14px] md:text-[16px] leading-6 font-medium font-poppins pb-2'>Return Delivery</h6>
                                        <p className='text-[12px] leading-4.5 font-medium font-poppins'>{prodetails.returnPolicy}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="headline pb-12">
                        <div className="flex gap-4 items-center pb-6">
                            <div className="after:h-10 after:w-5 after:bg-[#DB4444] after:content-[''] after:block after:rounded-sm"></div>
                            <div className="text-[16px] leading-5 font-poppins font-semibold text-[#DB4444]">Related Item</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24">
                        {
                            related.slice(0,4).map((sale, index)=>(
                                <div className="1" key={index}>
                                    <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-6 md:p-10">
                                        <Link to={`/product/detail/${sale.id}`}>
                                            <img src={sale.thumbnail} alt="" className='mx-auto max-h-48 object-contain' />
                                        </Link>
                                        <div className="icon absolute top-3 right-3">
                                            <FaRegHeart className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2' />
                                            <MdOutlineRemoveRedEye className='h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]' />
                                        </div>
                                        <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                                            <h5 className='text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]'>-{sale.discountPercentage}%</h5>
                                        </div>
                                        <div className="btn absolute bottom-2 left-0 w-full">
                                            <a href="" className='text-[14px] md:text-[16px] leading-6 font-poppins font-medium py-2 px-4 bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500 block text-center w-full'>Add To Cart</a>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Link to={`/product/detail/${sale.id}`}>
                                            <h3 className='text-[14px] md:text-[16px] leading-6 font-medium font-poppins'>{sale.title}</h3>
                                        </Link>
                                        <p className='text-[#DB4444] text-[14px] md:text-[16px] leading-6 font-medium font-poppins py-2'>
                                            ${(sale.price - (sale.price * sale.discountPercentage) / 100).toFixed(2)}{" "}
                                            <del className='text-[rgba(0,0,0,0.4)] pl-3'>${sale.price}</del>
                                        </p>
                                        <div className="icons flex items-center">
                                            {
                                                Array.from({length:5}).map((_,i)=>{
                                                    const rating = sale.rating
                                                    const fullstar = Math.floor(rating)
                                                    const halfstar = rating - fullstar >= 0.5

                                                    if(fullstar > i) return <TiStarFullOutline key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />
                                                    if(i === fullstar && halfstar) return <FaRegStarHalfStroke key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />

                                                    return <FaRegStar key={i} className='text-[18px] md:text-[20px] text-[#FFAD33]' />
                                                })
                                            }
                                            <div className="pl-2">
                                                <p className='text-[12px] md:text-[14px] leading-5 font-semibold font-poppins text-[rgba(0,0,0,0.4)]'>({sale.reviews?.length})</p>
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
export default Details