import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomeComponent from '@/components/pages/Home'
import AboutComponent from '@/components/pages/About'
import ServicesComponent from '@/components/pages/Services'
import SkillsComponent from '@/components/pages/Skills'
import EducationComponent from '@/components/pages/Education'
import ExperienceComponent from '@/components/pages/Experience'
import ContactComponent from '@/components/pages/Contact'
import Referencer from '@/components/pages/Referencer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sudarshan Khadka</title>
        <meta name="description" content="A strong front office knowledge, excellent communication skills, and team management experience would be a valuable asset to any organization. Front office knowledge includes an understanding of reception, guest services, and administrative tasks that are essential for the smooth operation of a business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomeComponent/>
        <AboutComponent/>
        <ServicesComponent/>
        <SkillsComponent/>
        <EducationComponent/>
        <ExperienceComponent/>
        <Referencer/>
        <ContactComponent/>
    </>
  )
}
