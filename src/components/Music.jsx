import speaker from '../assets/images/speaker.png'
import background from '../assets/images/background.png'
function Music(){
    return(
        <>
            <section className="pb-20 px-4">
                <div className="container mx-auto px-4" style={{ backgroundImage: `url(${background})` }}>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-[50%] p-6 md:pl-14 pt-10 md:pt-17 pb-10 md:pb-21">
                            <h4 className="text-[14px] md:text-[16px] leading-5 font-semibold font-poppins text-[#00FF66]">Categories</h4>
                            <h3 className="text-[28px] md:text-[36px] lg:text-[48px] leading-15 py-4 md:py-8 font-semibold font-inter text-[#FFFFFF]">Enhance Your Music Experience</h3>
                            <div className="flex gap-4 md:gap-6">
                                <div className="1 bg-[#FFFFFF] py-3 px-4 rounded-[50%] text-center min-w-[60px]">
                                    <h5 className="text-[14px] md:text-[16px] leading-5 font-semibold font-poppins">23</h5>
                                    <h6 className="text-[10px] md:text-[11px] leading-4.5 font-normal font-poppins">Hours</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3 px-4 rounded-[50%] text-center min-w-[60px]">
                                    <h5 className="text-[14px] md:text-[16px] leading-5 font-semibold font-poppins">05</h5>
                                    <h6 className="text-[10px] md:text-[11px] leading-4.5 font-normal font-poppins">Days</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3 px-4 rounded-[50%] text-center min-w-[60px]">
                                    <h5 className="text-[14px] md:text-[16px] leading-5 font-semibold font-poppins">59</h5>
                                    <h6 className="text-[10px] md:text-[11px] leading-4.5 font-normal font-poppins">Minutes</h6>
                                </div>
                                <div className="1 bg-[#FFFFFF] py-3 px-4 rounded-[50%] text-center min-w-[60px]">
                                    <h5 className="text-[14px] md:text-[16px] leading-5 font-semibold font-poppins">35</h5>
                                    <h6 className="text-[10px] md:text-[11px] leading-4.5 font-normal font-poppins">Seconds</h6>
                                </div>
                            </div>
                            <div className="btn pt-8 md:pt-14">
                                <a href="" className="text-[14px] md:text-[16px] leading-6 font-medium font-poppins py-3 px-8 md:py-4 md:px-12 bg-[#00FF66] text-[#FAFAFA]">Buy Now!</a>
                            </div>
                        </div>

                        <div className="w-full md:w-[50%] pt-6 md:pt-9 pb-6 md:pb-10 flex justify-center">
                            <img src={speaker} alt="" className="max-h-64 md:max-h-full object-contain"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Music