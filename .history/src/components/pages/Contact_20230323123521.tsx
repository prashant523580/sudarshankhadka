import { Email, LocationOn, PhoneAndroid } from '@mui/icons-material'
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
    title='Location'
    desc='Gwarko, Lalitpur'
  />
  <Card
    title='Location'
    desc='swarsankhadka0000@gmail.com'
  />
  <Card
    title='Location'
    desc='Gwarko, Lalitpur'
  />
</div>
    </Section>
  )
}
