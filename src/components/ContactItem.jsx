import React from 'react'

const ContactItem = ({contact,index,handleDeleteContact}) => {
  return (
    <div className="contact__item">
        <div className="contact__content__wrapper">
        <span className="contact__name">{contact.name}</span>
        <span className="contact__phone">{contact.phone}</span>
        </div>
        <span className="delete__contact" onClick={()=>handleDeleteContact(index)}>&#10006;</span>
    </div>
  )
}

export default ContactItem;