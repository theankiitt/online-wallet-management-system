// Supports weights 100-900


export const SendMoney=()=>{
    return(
        <main className="flex flex-col md:flex-row">
            <section className="w-full md:w-1/2 px-5 ">
               <header className="">
                <h2 className="font-extrabold text-3xl tracking-tight heading">Send Money</h2>
                <p className="pt-0.2 text-lg font-medium">Transfer money to anyone instantly and securely.</p>
               </header>
                <div className="border-2 border-gray-200  w-full max-w-lg bg-white mt-10 shadow-xl px-16 py-8 text-base ">
                    <h3>To</h3>
                   
                        <ul className="flex gap-5">
                            <li>Mobile Number</li>
                            <li>Bank Account</li>
                            <li>eWallet User</li>
                        </ul>
              
                    <form className="mt-6 flex flex-col gap-5 ">
                        <div className="flex gap-3">  
                            <input type="text" value="+977" disabled  className="border border-black w-16 h-12 rounded-lg pl-3" />
                            <input type="text" placeholder="Enter Mobile Number"  className="border border-black h-12 rounded-lg pl-3 flex-1"/>
                        </div>
                        <div>
                            <h2>Amount</h2>
                            <input type="text" placeholder="Enter Amount"  className="border border-black h-12 rounded-lg pl-3 w-full placeholder:text-lg"/>
                        </div>
                        <div>
                            <select  className="border border-black h-12 rounded-lg pl-3 w-full">
                                <option>Bills Sharing</option>
                                <option>Groceries</option>
                                <option>Personal Use</option>
                                <option>Ride Sharing</option>
                                <option>Family Expenses</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <h2>Remarks</h2>
                            <input type="text" placeholder="Write Remark"  className="border border-black h-12 w-full rounded-lg pl-3"/>
                        </div>
                        <button className="bg-[#043d7d] h-12 text-white ">Continue</button>
                       
                         









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