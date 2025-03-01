import React from 'react'
import '../style/contacts.css'

function Contact() {
  return (
    <div data-ignore-cursor="true" className='Contacts'>
      <h2 data-ignore-cursor="true" className='cont_h2'>Contacts</h2>
      
      <div data-ignore-cursor="true" className="git_hub">
        <h2  className=' git_hub_h2'>Git Hub</h2>
        <h2  className='git_hub_h3'>Linked In</h2>
      </div>
        <div  data-ignore-cursor="true" className='git_hub_s_m'>
         <h2 className='git_hub_h4'>Telegram</h2>
         <h2 className='git_hub_h4'>Instagram</h2>
         <h2 className='git_hub_h4'>x[twitter]</h2>

        </div>
      

    </div>
  )
}

export default Contact
