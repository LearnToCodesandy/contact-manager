import React from 'react'

const TodoForm = () => {
  return (
    <form className='contact-form'>
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

export default TodoForm