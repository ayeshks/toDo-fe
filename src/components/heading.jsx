import { useState } from "react";
import 'primeicons/primeicons.css'

function heading ({title = "My Task List"}){
    return(
        <>
         <section className="rounded-lg px-4 py-2 flex gap-2  place-items-center items-center pt-4" >
              <h1 className="text-black font-bold sm:text-4xl text-2xl font-serif uppercase ">
                {title}
              </h1>
              <div className="rounded-full bg-black p-2 flex items-center cursor-pointer ">
               <i class="pi pi-arrow-up-right text-white"></i>
              </div>
         </section>
        </>
    )
        
}

export default heading;