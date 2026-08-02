
export const LoginPage=()=>{
    return(
        <>

        <main className="bg-gray-200 min-h-screen  flex justify-center items-center  "   >
            <section className="shadow-xl max-w-md w-full py-10 px-12 bg-white/20">
                <header className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold uppercase tracking-normal dm-serif text-[#043d7d]">Digital Wallet</h1>
                <p className="font-medium text-black">Sign in to access admin dashboard</p>
                </header>


                <form className="space-y-8">   
                 
                <div className="space-y-1">
                    <label htmlFor='email' className="block text-lg font-bold tracking-tight">Email</label> 
                    <input type="email" id="email" placeholder="admin@digitalwallet.com" className="border-2 border-black w-full h-12 rounded-md px-5  placeholder:text-xl  " required/>
                    </div>

                   <div>
                     <label htmlFor="password" className="block text-lg tracking-tight  font-bold">Password</label> 
                    <input type="password" name="password" id="password" placeholder="**********" className="border-2 border-black w-full h-12 rounded-md px-5 placeholder:text-2xl " required/>
                   </div>
                   
                    <button type="submit" className="bg-[#043d7d] text-white uppercase text-lg mt-10 w-1/2 block p-3 rounded-md mx-auto ">Sign in</button>

                
                </form>

            </section>

         

        </main>
        
        
        
        </>

    )
}