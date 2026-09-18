function Profile(){
    return(
        <>
            <section className="pb-35 px-4">
                <div className="container mx-auto px-4">
                    <div className="pt-16 pb-16">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <p><a href="" className="text-[14px] leading-5 font-normal font-poppins text-[rgba(0,0,0,0.5)]">Home <span className="text-[#000000]">/ My Account</span></a></p>
                            <p className="text-[14px] leading-5 font-normal font-poppins">Welcome! <span className="text-[#DB4444]">Md Rimel</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10">
                            <div className="w-full lg:w-[20%]">
                                <div className="">
                                    <h3 className="text-[14px] md:text-[16px] leading-6 font-medium font-poppins pb-4">Manage My Account</h3>
                                    <div className="pl-4 md:pl-8.75 gap-2 pb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Profile</h5>
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">Address Book</h5>
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Payment Options</h5>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-[14px] md:text-[16px] leading-6 font-medium font-poppins pb-4">My Orders</h3>
                                    <div className="pl-4 md:pl-8.75 gap-2 pb-6">
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Returns</h5>
                                        <h5 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins text-[rgba(0,0,0,0.5)] hover:text-[#DB4444] hover:duration-500">My Cancellations</h5>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-[14px] md:text-[16px] leading-6 font-medium font-poppins pb-4">My WishList</h3>
                                </div>
                            </div>
                        <div className="w-full lg:w-[80%]">
                            <div className="pt-6 lg:pt-10 px-0 lg:px-20">
                                <h2 className="text-[18px] md:text-[20px] leading-7 font-medium font-poppins pb-4 text-[#DB4444]">Edit Your Profile</h2>
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12.5 pb-6">
                                    <div className="form flex flex-col flex-1">
                                        <label htmlFor="" className="text-[14px] md:text-[16px]">First Name</label>
                                        <input type="text" placeholder="Md" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                    <div className="form flex flex-col flex-1">
                                        <label htmlFor="" className="text-[14px] md:text-[16px]">Last Name</label>
                                        <input type="text" placeholder="Rimel" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12.5">
                                    <div className="form flex flex-col flex-1">
                                        <label htmlFor="" className="text-[14px] md:text-[16px]">Email</label>
                                        <input type="text" placeholder="rimel1111@gmail.com" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                    <div className="form flex flex-col flex-1">
                                        <label htmlFor="" className="text-[14px] md:text-[16px]">Address</label>
                                        <input type="text" placeholder="Kingston, 5236, United State" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                </div>

                                
                                <div className="flex pt-6">
                                    
                                    <div className="form flex flex-col w-full">
                                        <h3 className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins pb-2">Password Changes</h3>
                                        <input type="text" placeholder="Current Passwod" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                </div>
                                <div className="flex pt-4">
                                    <div className="form w-full">
                                        <input type="text" placeholder="New Passwod" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                </div>
                                <div className="flex pt-4 pb-6">
                                    <div className="form w-full">
                                        <input type="text" placeholder="Confirm New Passwod" className="w-full py-3 px-4 outline-0 bg-[#F5F5F5] rounded-sm text-[14px] md:text-[16px]"/>
                                    </div>
                                </div>

                                <div className="btn flex flex-col sm:flex-row gap-4 sm:gap-20 justify-end items-start sm:items-center pb-14">
                                    <a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins">Cancel</a>
                                    <a href="" className="text-[14px] md:text-[16px] leading-6 font-normal font-poppins py-3 px-8 md:py-4 md:px-12 bg-[#DB4444] rounded-sm text-[#FAFAFA]">Save Changes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile
