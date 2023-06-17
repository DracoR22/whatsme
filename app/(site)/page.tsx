import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div className=" min-h-full py-6 sm:px-6 lg:px-8 bg-white flex justify-center">
         <div className="sm:mx-auto sm:w-full sm:max-w-md ">

            
            <div className=" absolute top-8 left-24">
            <Image src='/bgpanda.png'  height={48} width={48}
             className="mx-auto w-auto" alt="Logo"/>
             </div>
               

            <div className="mt-[100px]">
             <h1 className="mt-6 lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-[#25D366] text-center">
                Hang out anytime, anywhere
             </h1>
             </div>

             <div className="mt-4">
               <p className="font medium text-sm md:text-md text-center text-gray-700">
                  Stay connected with your favorite people with WhatsMe!
               </p>
             </div>

             <AuthForm/>
         </div>

      </div>
    )
  }
  