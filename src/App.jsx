import { useEffect,useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  const [contacts,setContacts] = useState([]);

  // effect
  useEffect(() => {
    const locale = localStorage.getItem('contacts');
    if(locale){
      setContacts(JSON.parse(locale))
    }else{
      localStorage.setItem('contacts',JSON.stringify([]))
    }
  },[])
  

  // deleteHandler 
  const handleDeleteContact = (id)=>{
    const filtered = contacts.filter((contact,index)=>{
      if(index !== id) return contact;
    })
    setContacts(filtered);
    localStorage.setItem('contacts',JSON.stringify(filtered))
  }

  return (
    <div className="App">
      <ContactForm contacts={contacts} setContacts={setContacts}/>
      <ContactList contacts={contacts} setContacts={setContacts} handleDeleteContact={handleDeleteContact}/>
    </div>
  )
}

export default App
