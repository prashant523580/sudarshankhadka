import { Email, LocationOn, PhoneAndroid } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import styles from '../../styles/contact.module.scss'
import Section from '../Section'

export default function ContactComponent() {
  return (
    <Section
      id='Contact'
      headTitle='Contact'
      // bgImg='/img/contact.jpg'
      style={{
        backgroundColor: "white"
      }}
    >
      <h1 style={{
        textAlign: "center"
      }}
        data-aos={"zoom-in"} data-aos-duration="700"
      >Get In Touch</h1>
      <div className={styles.container_fluid}>

       
        <div className={styles.column}>
          <Parallax translateX={[5, -5]}>

            {/* <h3 className={styles.h3}>whehere for you.</h3> */}
          </Parallax>
          <Parallax translateY={[-10, 10]}>

            <div className={styles.card}>

              <div className={styles.contact} data-aos={"fade-up"} data-aos-duration="700" >
                <LocationOn  />
                <p data-aos={"fade-up"} data-aos-duration="700">Nepalgunj</p>
                </div>
              <div className={styles.contact} data-aos={"fade-up"} data-aos-duration="1000">
                <Email  />
                <p data-aos={"fade-up"} data-aos-duration="700">meraki@gmail.com</p>
                </div>
              <div className={styles.contact} data-aos={"fade-up"} data-aos-duration="1500" >
                <PhoneAndroid />
                <p data-aos={"fade-up"} data-aos-duration="700">9987648484</p>
                </div>
            </div>
          </Parallax>
        </div>
      </div>
    </Section>
  )
}
