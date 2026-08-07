import { useState } from "react";



export const UserRegister=()=>{

    const [userData,setUserData] = useState({
    mobileNumber: " ",
    email: " ",
    fullName: "",
    password: "",
    identification: "",
    })




    const userRegister=(e)=>{
        e.preventDefault()
        
        console.log(userData)

        setUserData({
              mobileNumber: " ",
    email: " ",
    fullName: "",
    password: "",
    identification: ""

        })

    }

   

    


    return(

        

        <main className="flex justify-center items-center bg-white h-screen w-full">
            <section className="bg-[#043d7d] text-white min-h-screen w-full hidden md:flex flex-col items-center justify-center gap-18">
                <header className="flex flex-col justify-center items-center gap-8">
                    <h1 className="text-3xl font-extrabold">eWallet</h1>
                    <p className="w-[80%] text-xl text-center">A secure,fast and smart way to manage your money.Send,receive,pay bills and more with eWallet.</p>
                </header>

                <div className="flex gap-15">
                    <div className="text-center">
                        <h3 className="text-4xl font-extrabold">20K+</h3>
                        <p className="text-xl">Register Users</p>
                    </div>
                    <div className="text-center">
                         <h3 className="text-4xl font-extrabold">NPR 1M</h3>
                        <p className="text-xl">Transaction</p>
                        
                    </div>
                    <div className="text-center">
                         <h3 className="text-4xl font-extrabold">10+</h3>
                        <p className="text-xl">Partners</p>
                    </div>
                </div>

            </section>

            <section className="bg-white h-screen w-full flex flex-col items-center gap-5 py-10   ">
                <header className="text-center">
                    <h1 className="text-3xl uppercase font-extrabold tracking-tight heading">Create Account</h1>
                    <p className="text-2xl">Welcome to eWallet</p>
                </header>


                <form className="flex flex-col gap-5 w-full max-w-md p-6 " onSubmit={userRegister}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor='mobileNumber' className="font-semibold">Mobile Number</label>
                        <input type="text" placeholder="Enter your registered mobile number" id='mobileNumber' className="w-full border-2 border-gray-300 rounded-md h-12 pl-6" value={userData.mobileNumber} name="mobileNumber" onChange={(e)=>setUserData({
                            ...userData, [e.target.name]:e.target.value
                        })
                    }
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor='emailAddress' className="font-semibold">Email Address</label>
                        <input type="email" placeholder="Enter your email address" id='emailAddress' className="w-full border-2 border-gray-300 rounded-md h-12 pl-6" value={userData.email} name="email" onChange={(e)=>setUserData({
                            ...userData, [e.target.name]:e.target.value
                        })}/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor='fullName' className="font-semibold" >Full Name</label>
                        <input type="text" placeholder="Enter your full name" id='fullName' className="w-full border-2 border-gray-300 rounded-md h-12 pl-6" value={userData.fullName} name="fullName" onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}/>
                    </div>

                     <div className="flex flex-col gap-1">
                        <label htmlFor='password' className="font-semibold">Password</label>
                        <input type="password" placeholder="Enter your password" id='password' className="w-full border-2 border-gray-300 rounded-md h-12 pl-6" value={userData.password} name="password" onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor='password' className="font-semibold">Identification Type</label>
                        <select className="w-full border-2 border-gray-300 rounded-md h-12 pl-6" name="identification" value={userData.identification} onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}>
                            <option value=''>-- Select identification type --</option>
                            <option value="citizenship">Citizenship</option>
                            <option value="nidCard">NID Card</option>
                        </select>
                    </div>


                    <button type="submit"  className="bg-[#043d7d] p-3 w-full  text-white mt-5">Create Account</button>

                </form>
                 
            </section>


        </main>

       
       
    );
}
