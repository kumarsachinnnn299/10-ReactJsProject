import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase.js";
import { useEffect } from "react";
import ContactCard from "./components/ContactCard.jsx";
import Modal from "./components/Modal.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen]=useState(false)

  const onOpen=()=>{
    setIsOpen(true)
  }
  const onClose=()=>{
    setIsOpen(false)
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        console.log(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="text-white ml-1 text-3xl absolute" />
          <input
            type="text"
            className=" text-white pl-9 pr-2 flex-grow h-10 bg-transparent border-white border rounded-md"
          />
        </div>

        <AiFillPlusCircle onClick={onOpen} className="text-white cursor-pointer text-4xl relative flex" />
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
 
  </>
  );
};

export default App;
