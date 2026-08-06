// Supports weights 100-900


export const AddMoney=()=>{
    return(
        <main className="flex flex-col md:flex-row">
            <section className="w-full md:w-1/2 px-5 ">
               <header className="">
                <h2 className="font-extrabold text-3xl tracking-tight heading">Add Money</h2>
                <p className="pt-0.2 text-lg font-medium">Transfer money to anyone instantly and securely.</p>
               </header>
                <div className="border-2 border-gray-200  w-full max-w-lg bg-white mt-10 shadow-xl px-16 py-8 text-base ">
                    <form className="mt-6 flex flex-col gap-5 ">
                        <div>
                            <h2>Enter Amount</h2>
                            <section className="flex">
                                <input type="text" value="NPR" className="border-2 border-gray-300 h-12 rounded-l-lg pl-3 w-16 placeholder:text-lg"/>
                                 <input type="text" placeholder="Enter Amount"  className="border-2 border-gray-300 h-12 rounded-r-lg pl-3 w-full placeholder:text-lg"/>
                            </section>

                            <section className="mt-6">
                                <h2>Select Payment Method</h2>
                                <div className="space-x-3 border-2 border-gray-300 py-3 pl-5 rounded-t-md">
                                    <input type="radio" name="payment" value="mobile" />
                                     <label>Bank Account</label>
                                    
                                    </div>

                                    <div className="space-x-3 border-2 border-gray-300 py-3 pl-5 rounded-b-md">

                                    <input type="radio" name="payment" value="mobile" />
                                     <label>Debit Card</label>
                                    
                                    </div>

                                    <button className="bg-black text-white w-full py-3 mt-10">Continue</button>


                                   
                            </section>
                           
                        </div>
                      
                       
                       
                         









                    </form>
                </div>
            </section>
    <section className="bg-white hidden md:flex w-1/2 flex-col shadow-xl p-8 my-28">
    <h2 className="text-3xl font-extrabold tracking-tight  heading">
        Transaction Summary
    </h2>

    <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
            <span>You are sending</span>
            <span>NPR 100</span>
        </div>

        <div className="flex justify-between">
            <span>Transaction Fee</span>
            <span>NPR 10</span>
        </div>

        <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>NPR 110</span>
        </div>
    </div>
</section>
        </main>
    )
}