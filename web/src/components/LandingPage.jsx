import { MdSecurity } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";

export const LandingPage=()=>{
    return(
        <main>
            <header>
            <nav className="flex justify-between px-2 md:px-14 py-5">
                <section>
                    <h2 className="font-extrabold text-3xl">eWallet</h2>
                </section>
                <section className="flex gap-20 items-center">
                    <ul className="gap-9 text-lg hidden md:flex ">
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Features</a></li>
                        <li><a href=''>About Us</a></li>
                        <li><a href=''>Contact</a></li>
                        {/* <li></li>
                        <li>How it Works</li>
                        <li>Security</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Contact</li> */}
                    </ul>
                     <section className="space-x-5">
                    <button className="border border-black px-5 py-2 rounded-md">
                        <a href="">Login</a></button>
                    <button className="bg-[#043d7d] px-5 py-2 rounded-md text-white"><a href="/register">Sign Up</a></button>
                </section> 
                </section>
              
            </nav>
            </header>

            <section className="flex bg-gradient-to-b from-white from-0% via-white via-80% to-blue-600">
                <div className="h-[80vh] w-1/2 flex flex-col justify-center ml-10 md:ml-32 space-y-8 ">
                <h1 className="font-extrabold text-5xl">Your Money, <span className="italic block">Your Way</span></h1>
                <p className="w-[85%] text-xl ">A secure,fast and smart way to manage your money.Send,receive,pay bills and more with eWallet.</p>

                <div>
                                   <button className="bg-[#043d7d] text-white mr-5 rounded p-4">Create Your Wallet</button>
                <button className="border border-[#043d7d] rounded p-4">See How it Works</button>
                </div>
 

                <div className="flex flex-wrap gap-4">
                   <div className="flex w-fit items-center gap-5 rounded-md shadow-md px-5 py-3" >
                        <section className="rounded-full w-9 h-9 bg-purple-300 relative">
                            <div className="absolute top-2.5 left-2.5"><MdSecurity />
</div>
                        </section >
                        <section className="">
                            <h2>100% Secure</h2>
                            <h5>Bank-level security</h5>
                        </section>
                    </div>


  <div className="flex w-fit items-center gap-5 rounded-md shadow-md px-5 py-1" >
                        <section className="rounded-full w-9 h-9 bg-purple-300 relative">
                            <div className="absolute top-2.5 left-2.5"><BsFillSendFill />
</div>
                        </section >
                        <section className="">
                            <h2>Instant Transfers</h2>
                            <h5>Send money in second</h5>
                        </section>
                    </div>

                      <div className="flex w-fit items-center gap-5 rounded-md shadow-md px-5 py-1" >
                        <section className="rounded-full w-9 h-9 bg-purple-300 relative">
                            <div className="absolute top-2.5 left-2.5">
                              <GoClockFill />
</div>
                        </section >
                        <section className="">
                            <h2>24/7 Support</h2>
                            <h5>We're here for you</h5>
                        </section>
                    </div>



                    
                </div>
                 
                </div>
                <div className="w-1/2  ">
                <img src="/undraw_adding-funds_gpjb.svg" className="h-[500px] w-[500px] mt-12" />
                </div>
                
            </section>
           



        </main>

    );
}