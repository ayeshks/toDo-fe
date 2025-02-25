import { useState } from 'react'
import './App.css'
import Heading from './components/heading.jsx'
import Notify from './components/notify.jsx'
import Input from './components/input.jsx'
import Todos from './components/todos.jsx'

function App() {
  const [title] = useState("My Task List");

  return (
    <>
      <main className='bg-hero-background h-screen bg-cover bg-center'>
        <div className=" bg-white/30 backdrop-blur-md h-screen ">
           <div className="nav-header flex justify-between">
               <Heading title={title}/>
               <Notify/>
           </div>

           <div className="todo-body grid sm:grid-cols-2 gap-4 sm:px-4 px-2 ">
            <Input/>
            <Todos/>
           </div>   
        </div>
      </main>
    </>
  )
}

export default App
