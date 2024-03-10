import React from 'react'
import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section} `}>
      <h1>Contact Us</h1>
      <p>Have any question? Please contact us. </p>
    </div>
  )
}

export default ContactHeader
