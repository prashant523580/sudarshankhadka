import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from "aos";
import "aos/dist/aos.css"
import React from 'react';
import Footer from '@/components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  const [isLoading,setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    AOS.init();
    setInterval(() => {
        setIsLoading(false)
    },3000)
  }, [])
  return (
    isLoading ?  <div className='h-[100vh] w-[100vw] flex items-center flex-col justify-center'>
        <h1 className='text-sky-700 text-5xl'>Welcome</h1>
        <div className='w-10 h-10 rounded-full shadow-lg shadow-sky-400 animate-spin'></div>
    </div>
    :
    <ParallaxProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ParallaxProvider>
  )
}
