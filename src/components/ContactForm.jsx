import React from 'react'

const ContactForm = ({contacts,setContacts}) => {

  // handlers
  const handleAddContact = (e)=>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const contactname = formdata.get('name');
    const contactphone = formdata.get('number');
    const data = {name : contactname,phone:contactphone};
    if(contactname && contactphone){
      const latestContacts = [data,...contacts];
      setContacts(latestContacts);
      localStorage.setItem('contacts',JSON.stringify(latestContacts));
      e.target.reset();
    }
  }

  return (
    <form className='contact-form' onSubmit={handleAddContact}>
        <div className="form__item">
            <label htmlFor="name">Contact Name</label>
            <input type="text" name="name" id="name" placeholder='contact name...'/>
        </div>

        <div className="form__item">
            <label htmlFor="number">Contact Number</label>
            <input type="number" name="number" id="number" placeholder='1234567890'/>
        </div>
        <input type="submit" value="Add contact" />
    </form>
  )
}

export default ContactForm;