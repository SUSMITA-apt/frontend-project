import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/images/Logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";

function Navbar(){
    const location = useLocation()
    const Currentlink = window.location.pathname

    const [show, setShow] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [searchkeyword, setSearchkeyword] = useState('')

    return(
        <>
            <nav className="bg-[#000000] py-2 px-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center md:justify-between items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-[12px] md:text-[14px] font-normal leading-5 text-[#FAFAFA]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className="font-semibold text-[#FAFAFA]">ShopNow</a></h1>
                        </div>
                        <div>
                            <select className="text-[12px] md:text-[14px] font-normal leading-5 text-[#FAFAFA] outline-0 bg-transparent">
                                <option value="" className="text-black">English</option>
                                <option value="" className="text-black">Bangla</option>
                                <option value="" className="text-black">Spanish</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="nav-2 border-b border-[rgba(0,0,0,0.25)] px-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center pt-4 pb-4">
                        <div className="flex items-center gap-4 md:gap-8 lg:gap-38">
                            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-2xl">
                                {mobileMenu ? <FaTimes /> : <FaBars />}
                            </button>
                            <div>
                                <Link to="/"><img src={logo} alt="logo" /></Link>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex gap-8 md:gap-4 lg:gap-8 items-center">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><a href="">About</a></li>
                                    <li><Link to="/registar">Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={`flex items-center gap-3 md:gap-6 ${Currentlink === '/registar' ? 'justify-end' : ''}`}>
                            {Currentlink !== '/registar' && (
                                <div className="hidden md:block flex-1 max-w-xs">
                                    <div className="relative">
                                        <input 
                                            onChange={(e) => setSearchkeyword(e.target.value)} 
                                            className="w-full py-2.5 outline-0 bg-[#F5F5F5] text-[12px] font-normal pl-5 pr-10 rounded-sm" 
                                            type="text" 
                                            placeholder="What are you looking?"
                                        />
                                        <Link to={`/search/product/${searchkeyword}`}>
                                            <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-[24px]"/>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {
                                Currentlink != '/registar' ?
                                <div className="relative flex items-center gap-2 md:gap-4">
                                    <Link to="/wishlist"><GoHeart className="text-[20px] md:text-[24px]"/></Link>
                                    <Link to="/cart"><RiShoppingCart2Line className="text-[20px] md:text-[24px]"/></Link>
                                    <div className="w-8 h-8 bg-[#DB4444] flex items-center justify-center rounded-full cursor-pointer">
                                        <FiUser onClick={() => setShow(!show)} className="text-white text-[20px] md:text-[24px]"/>
                                    </div>
                                    {
                                        show && 
                                        <div className="dropdown absolute top-10 right-0 bg-linear-to-br from-[#A9A4AA] via-[#6F5B75] to-[#1D161E] z-50 pt-4 pb-2 pl-4 pr-3 flex flex-col gap-3 rounded-sm select-none w-64">
                                        <Link onClick={()=> setShow(false)} to="/profile" className="flex gap-3 items-center">
                                            <FiUser className="text-[20px] text-[#FAFAFA]"/> <span className="text-[13px] font-normal text-[#FAFAFA]">Manage My Account</span>
                                        </Link>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-3 items-center">
                                            <FiShoppingBag className="text-[20px] text-[#FAFAFA]"/> <span className="text-[13px] font-normal text-[#FAFAFA]">My Order</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-3 items-center">
                                            <IoCloseCircleOutline className="text-[20px] text-[#FAFAFA]"/> <span className="text-[13px] font-normal text-[#FAFAFA]">My Cancellations</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-3 items-center">
                                            <TiStarOutline className="text-[20px] text-[#FAFAFA]"/> <span className="text-[13px] font-normal text-[#FAFAFA]">My Reviews</span>
                                        </a>
                                        <a onClick={()=> setShow(false)} href="" className="flex gap-3 items-center">
                                            <TbLogout2 className="text-[20px] text-[#FAFAFA]"/> <span className="text-[13px] font-normal text-[#FAFAFA]">Logout</span>
                                        </a>
                                    </div>
                                    }
                                </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenu && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <ul className="flex flex-col gap-4">
                                <li><Link onClick={() => setMobileMenu(false)} to="/" className="block py-2">Home</Link></li>
                                <li><Link onClick={() => setMobileMenu(false)} to="/shop" className="block py-2">Shop</Link></li>
                                <li><a href="" className="block py-2">About</a></li>
                                <li><Link onClick={() => setMobileMenu(false)} to="/registar" className="block py-2">Sign Up</Link></li>
                            </ul>
                            {Currentlink !== '/registar' && (
                                <div className="mt-4">
                                    <div className="relative">
                                        <input 
                                            onChange={(e) => setSearchkeyword(e.target.value)} 
                                            className="w-full py-2.5 outline-0 bg-[#F5F5F5] text-[12px] font-normal pl-5 pr-10 rounded-sm" 
                                            type="text" 
                                            placeholder="What are you looking for?"
                                        />
                                        <Link onClick={() => setMobileMenu(false)} to={`/search/product/${searchkeyword}`}>
                                            <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-[24px]"/>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Navbar