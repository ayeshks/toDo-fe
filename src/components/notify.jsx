import { useState } from "react";
import 'primeicons/primeicons.css'


function notify(){

    return(
        <>
          <section className="pt-4 px-4">
            <div className="bg-white/30 backdrop-blur-sm hover:bg-black hover:text-white flex rounded-full place-items-center p-2 ">
            <i class="pi pi-bell text-2xl"></i>
            </div>
          </section>      
        </>
    )
}

export default notify