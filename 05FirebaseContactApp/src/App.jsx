import Navbar from "./components/Navbar"
import {FiSearch} from 'react-icons/fi'
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import {collection, getDoc} from 'firebase/firestore'
import { db } from "./config/firebase.js";


const App = () => {
  const [contacts,setContacts]=useState([])
  useEffect(() => {
    const getContacts=async()=>{
      try {
          const contactRef=collection(db,"contacts")
          const contactSnapshot=await getDocs(contactRef)
          console.log(contactSnapshot);
      } catch (error) {
          console.log(error);
      }
    }
    getContacts()
  }
  , [third])
  
  return (
   <div className="mx-auto max-w-[370px] px-4">
    <Navbar/>
    <div className="flex gap-2">
    <div className="relative flex items-center flex-grow">
      <FiSearch className="text-white ml-1 text-3xl absolute"/>
      <input type="text" className=" text-white pl-9 pr-2 flex-grow h-10 bg-transparent border-white border rounded-md"/>
    </div>
    
    <AiFillPlusCircle className="text-white cursor-pointer text-4xl relative flex"/>
    
    </div>
   </div>
  )
}

export default App
