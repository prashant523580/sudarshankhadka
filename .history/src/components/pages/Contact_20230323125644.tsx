import { Email, EmailOutlined, LocationOn, PhoneAndroid } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import styles from '../../styles/contact.module.scss'
import Section from '../Section'
import Card from '../UI/Card/ContactCard'

export default function ContactComponent() {
  return (
    <Section
      id='Contact'
      headTitle='Contact'
      title="contact"
      // bgImg='/img/contact.jpg'
      style={{
        backgroundColor: "white"
      }}
    >
      {/* <h1 style={{
        textAlign: "center"
      }}
        data-aos={"zoom-in"} data-aos-duration="700"
      >Get In Touch</h1> */}
<div className='flex flex-wrap justify-around'>
  <Card
    icon={<LocationOn style={{
      color:"var(--logo-color)"
    }}/>}
    title='Location'
    desc='Gwarko, Lalitpur'
  />
  <Card
  icon={<EmailOutlined style={{
    color:"var(--logo-color)"
  }}/>}
    title='Email'
    desc='swarsankhadka0000@gmail.com'
  />
  <Card
  icon={<PhoneAndroid style={{
    color:"var(--logo-color)"
  }}/>}
    title='Phone'
    desc='+977-9813179737'
  />
</div>
    </Section>
  )
}
