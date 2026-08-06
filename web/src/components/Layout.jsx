import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Outlet } from "react-router";





const navigator=[
    {
        icons: IoMdHome,
        title: "Dashboard"

    },

     {
        icons: IoMdAddCircleOutline,
        title:  "Add Money"

    },
     {
        icons: BsFillSendFill ,
        title:  "Send Money"

    },
     {
        icons: GrTransaction,
        title:  "Transactions"

    },
     {
        icons:  MdOutlinePayments,
        title:  "Bill & Payments"

    },
     {
        icons:  TbReportSearch, 
        title:  "Reports"

    },
    {
        icons:  IoIosSettings, 
        title:  "Settings"

    },
    {
        icons:  MdContactSupport , 
        title:  "Reports"

    },
]







export const Layout=()=>{
    return(
        <main className="flex h-screen">
            <aside className="hidden md:w-1/5 bg-white md:flex md:flex-col border-r-2 border-gray-200 shadow-sm" >
            <div className="h-[10%] flex justify-between mx-5 py-4 ">
                <section className="font-extrabold text-3xl tracking-tighy">eWallet</section>
                <section><RxHamburgerMenu className="text-2xl"/></section>
            </div>
            <div className="flex-1 py-10">

                {navigator.map(({icons:Icons,title}, index)=>(
                <div key={index} className="flex items-center gap-6 px-10 py-3">
                  <Icons className="text-2xl"/><span className="text-xl font-normal heading">{title}</span>
                </div>

                ))}
               
               
            </div>
            <div className="h-[10%] text-center font-bold text-2xl flex items-end justify-center pb-3"><a href='/' ><BiLogOut className="inline" /><span className="pl-5">Logout</span></a></div>
            </aside>

            <section className=" flex flex-col flex-1">
                <div className="bg-white text-black h-16 font-bold text-lg flex justify-end items-center px-16 gap-5 ">
                    <div className="bg-red-300 w-10 h-10 rounded-full flex justify-center items-center">AG</div>
                    <div className="r">Hi, Ankit</div>
            </div>

                <div className="bg-gray-200 flex-1 p-8 ">
                    <Outlet/> 
                </div>
            </section>
        </main>
    );
} 