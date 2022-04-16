import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, setContacts, handleDeleteContact }) => {
  return (
    <div className='contact-list'>
      <h2 className="title">Contacts</h2>

      {
        contacts.length !== 0 ?
        contacts.map((contact, index) => {
          return (<ContactItem contact={contact} setContacts={setContacts} contacts={contacts} index={index} handleDeleteContact={handleDeleteContact} />)
        }) : <p>Sorry no contacts!</p>
      }
    </div>
  )
}

export default ContactList;