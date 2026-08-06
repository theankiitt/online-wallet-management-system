import { GrTransaction } from "react-icons/gr";

export const Transaction=()=>{
    return(
        <main className="p-2">

            <h2 className="text-3xl text-black heading uppercase tracking-tight ">Recent Transaction</h2>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-between mt-10">
                <div className="flex gap-8 bg-white p-5 rounded-lg shadow-md">
                    <GrTransaction className="bg-gray-200 w-10 p-2 h-10 rounded-full "/>
                    <div className="text-lg">
                        <section className="font-bold">Total Transaction</section>
                        <section>128</section>
                    </div>

                </div>
               <div className="flex gap-8  bg-white p-5 rounded-lg shadow-md">
                      <GrTransaction className="bg-gray-200 w-10 p-2 h-10 rounded-full "/>
                    <div className="text-lg">
                        <section className="font-bold">Total Transaction</section>
                        <section>128</section>
                    </div>

                </div>
               <div className="flex gap-8  bg-white p-5 rounded-lg shadow-md">
                      <GrTransaction className="bg-gray-200 w-10 p-2 h-10 rounded-full "/>
                    <div className="text-lg ">
                        <section className="font-bold">Total Transaction</section>
                        <section>128</section>
                    </div>

                </div>
               <div className="flex gap-8  bg-white p-5 rounded-lg shadow-md ">
                      <GrTransaction className="bg-gray-200 w-10 p-2 h-10 rounded-full "/>
                    <div>
                        <section className="font-bold">Total Transaction</section>
                        <section>128</section>
                    </div>

                </div>
               

            </section>

            <section className="rounded-md border border-gray-300 mt-10">
      <table className="w-full">
    <thead>
        <tr className="">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
        </tr>
    </thead>

    <tbody>
        <tr className="bg-gray-100 ">
            <td className="p-3">1</td>
            <td className="p-3">Ankit</td>
            <td className="p-3">NPR 500</td>
            <td className="p-3 text-green-600">Success</td>
        </tr>

        <tr>
            <td className="p-3">2</td>
            <td className="p-3">Ritest</td>
            <td className="p-3">NPR 1200</td>
            <td className="p-3 text-yellow-600">Pending</td>
        </tr>

        <tr>
            <td className="p-3">3</td>
            <td className="p-3">Sumit</td>
            <td className="p-3">NPR 750</td>
            <td className="p-3 text-red-600">Failed</td>
        </tr>
    </tbody>
</table>

            </section>


        </main>
    )
}