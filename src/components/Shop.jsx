import { FaStar, FaBars, FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router';

function Shop() {

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    },[])

    const colors = [
        { id: 1, color: "#000000", name: "Color 1" },
        { id: 2, color: "#FF0000", name: "Color 2" },
        { id: 3, color: "#00FF38", name: "Color 3" },
    ];
    
    const [sortby, setSortby] = useState('')
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(6);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
    if(sortby){
        axios.get(`https://dummyjson.com/products/category/${sortby}`)
        .then(res=>{
            setProducts(res.data.products)
            setPage(0)
        })
    }else{
        axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    }
}, [sortby]);

    const [page, setPage] = useState(0);

    const itemsPerPage = Number(visible);
    const offset = page * itemsPerPage;

    const handlePageClick = (data) => {
        setPage(data.selected);
        console.log("Selected page:", data.selected + 1);
    };

    useEffect(() => {
        setPage(0);
    }, [visible]);

  return (
    <>
      <section className="pb-26 px-4">
        <div className="container mx-auto px-4">

          <div className="pt-16 md:pt-20 pb-8 md:pb-12.5">
            <p>
              <a
                href=""
                className="text-[14px] leading-5 font-normal font-poppins text-[rgba(0,0,0,0.5)]"
              >
                Home <span className="">/ Shop</span>
              </a>
            </p>
          </div>

          <div className="relative md:flex md:gap-8">
            {/* Mobile Sidebar Toggle */}
            <button 
              onClick={() => setShowSidebar(!showSidebar)} 
              className="md:hidden mb-4 flex items-center gap-2 text-[14px] font-medium"
            >
              <FaBars /> Filter & Categories
            </button>

            {/* Sidebar */}
            <div className={`
              ${showSidebar ? 'block' : 'hidden'} md:block
              absolute md:static z-30 bg-white shadow-lg md:shadow-none p-4 md:p-0 rounded-lg md:rounded-none
              w-full md:w-[20%]
            `}>
              <div className="flex justify-between items-center md:hidden mb-4">
                <h2 className="text-[18px] font-bold font-poppins">Filters</h2>
                <button onClick={() => setShowSidebar(false)} className="text-2xl">
                  <FaTimes />
                </button>
              </div>
              <div className="div">
                <h2 className="text-[18px] md:text-[20px] font-bold font-poppins leading-[100%] pb-3 md:pb-3.75">
                  Shop by Category
                </h2>
              </div>
              <div className="catagories pb-8 md:pb-10">
                <div className="catagories flex flex-col gap-4 ">
                    {
                        categories.slice(0,9).map((category, index)=>(
                            <ul key={index} className='cursor-pointer'>
                                <li><a onClick={()=> { setSortby(category.slug); setShowSidebar(false); }} className="text-[14px] md:text-[16px]">{category.name}</a></li>
                            </ul>  
                        ))
                    }
                    
                </div>
              </div>

              <div className="">
                <h2 className="text-[18px] md:text-[20px] font-bold font-poppins leading-[100%] pb-3 md:pb-3.75">
                  Shop by Color
                </h2>
                <div className="">
                  {colors.map((color) => (
                    <div key={color.id} className="[&>label]:text-[14px] md:[&>label]:text-[16px] [&>label]:leading-7.5 [&>label]:text-[#767676] [&>label]:font-normal [&>label]:font-poppins">
                      <input
                        type="radio"
                        name="color"
                        id={`color-${color.id}`}
                        className="hidden"
                      />
                      <label
                        htmlFor={`color-${color.id}`}
                        className="cursor-pointer flex gap-2 items-center py-1"
                      >
                        <span
                          style={{ background: color.color }}
                          className="w-3 h-3 inline-block rounded-full"
                        ></span>
                        {color.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-[80%] md:pl-8">
              <div className="flex flex-wrap gap-3 justify-end items-center pb-6 md:pb-7.5">
                <span className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">
                  Show :{" "}
                </span>
                <input
                  onChange={(e) => setVisible(e.target.value)}
                  type="text"
                  value={visible}
                  className="outline-0 border border-[#D9D9D9] w-20 md:w-24.25 py-1.5 rounded-[5px] px-3 md:pl-10.25 md:pr-11.25"
                />
              </div>

              <div className="product">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7.5">
                  {products
                    .slice(offset, offset + itemsPerPage)
                    .map((product, index) => (
                      <div className="1" key={product.id}>
                        <div className="img relative bg-[#F5F5F5] rounded-sm group inline-block w-full p-4 md:px-10 md:py-8.75">
                          <Link to={`/product/detail/${product.id}`}>
                            <img
                              src={product.thumbnail}
                              alt=""
                              className="mx-auto max-h-48 object-contain"
                            />
                          </Link>
                          <div className="icon absolute top-3 right-3">
                            <FaRegHeart className="h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%] mb-2" />
                            <MdOutlineRemoveRedEye className="h-8 w-8 bg-[#FFFFFF] p-2 rounded-[50%]" />
                          </div>
                          <div className="absolute top-3 left-3 py-1 px-3 bg-[#DB4444] rounded-sm">
                            <h5 className="text-[12px] leading-4.5 font-normal font-poppins text-[#FFFFFF]">
                              -{product.discountPercentage}%
                            </h5>
                          </div>
                          <div className="btn absolute bottom-2 left-0 w-full">
                            <a
                              href=""
                              className="text-[14px] md:text-[16px] leading-6 font-poppins font-medium py-2 px-4 w-full text-center bg-[#000000] text-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-500 block"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                        <div className="pt-4">
                          <Link to={`/product/detail/${product.id}`}>
                            <h3 className="text-[14px] md:text-[16px] leading-6 font-medium font-poppins">
                              {product.title}
                            </h3>
                          </Link>
                          <p className="text-[#DB4444] text-[14px] md:text-[16px] leading-6 font-medium font-poppins py-2">
                            $
                            {(
                              product.price -
                              (product.price * product.discountPercentage) / 100
                            ).toFixed(2)}{" "}
                            <del className="text-[rgba(0,0,0,0.4)] pl-3">
                              {product.price}
                            </del>
                          </p>
                          <div className="icons flex items-center">
                            <FaStar className="text-[18px] md:text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[18px] md:text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[18px] md:text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[18px] md:text-[20px] text-[#FFAD33]" />
                            <FaStar className="text-[18px] md:text-[20px] text-[#FFAD33]" />
                            <div className="pl-2">
                              <p className="text-[12px] md:text-[14px] leading-5 font-semibold font-poppins text-[rgba(0,0,0,0.4)]">
                                (88)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex justify-center mt-8 md:mt-10 flex-wrap">
                <ReactPaginate
                  previousLabel={<FaChevronLeft />}
                  nextLabel={<FaChevronRight />}
                  breakLabel={"..."}
                  pageCount={Math.ceil(products.length / itemsPerPage)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"flex gap-2 items-center flex-wrap justify-center"}
                  pageClassName={
                    "border rounded w-8 h-8 flex items-center justify-center cursor-pointer"
                  }
                  activeClassName={"bg-black text-white border-black"}
                  previousClassName={"px-2 text-gray-600 cursor-pointer"}
                  nextClassName={"px-2 text-gray-600 cursor-pointer"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Shop;
