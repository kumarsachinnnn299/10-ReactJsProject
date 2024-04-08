import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { collection, getDoc, getDocs, onSnapshot, snapshotEqual } from "firebase/firestore";
import { db } from "./config/firebase.js";
import { useEffect } from "react";
import ContactCard from "./components/ContactCard.jsx";
import Modal from "./components/Modal.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";
import useDisclose from "./hooks/useDisclose.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContact from "./components/NoContact.jsx";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen}=useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts=(e)=>{
    const value=e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts=contactLists.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))

          setContacts(filteredContacts)
          return filteredContacts
        
  });

  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="text-white ml-1 text-3xl absolute" />
          <input
            onChange={filterContacts}
            type="text"
            className=" text-white pl-9 pr-2 flex-grow h-10 bg-transparent border-white border rounded-md"
          />
        </div>

        <AiFillPlusCircle onClick={onOpen} className="text-white cursor-pointer text-4xl relative flex" />
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {contacts.length<=0?<NoContact/>:contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
        <ToastContainer position="bottom-center"/>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
  </>
  );
};


export default App
