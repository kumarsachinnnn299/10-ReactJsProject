import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {
  return (

    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button text="Via Support Chat" icon={<MdMessage fontSize="24px" />} />
          <Button text="Via Call" icon={<FaPhoneAlt />} fontSize="24px" />
        </div>
        <Button
          isOutline={true}
          text="Via Email Form" icon={<HiMail />} fontSize="24px" />
        <form>
          <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={styles.formController}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
          </div>
          <div className={styles.formController}>
            <label htmlFor="message">Message</label>
            <textarea name='message' rows={10} />
          </div>
          <div className={styles.submitBtn}>
            <Button
              text="Submit" fontSize="24px" />
          </div>
        </form>
      </div>

      <div className={styles.contactImage}>
        <img src="./images/contact.svg" alt="Contact" />
      </div>
    </section>

  )
}

export default ContactForm
