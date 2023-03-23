import React from 'react'
import Carousel, { CarouselItem } from '../UI/carousel/CustomCarousel'
import Section from '../Section'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import Divider from '../UI/Divider';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
export default function HomeComponent() {
  return (
    <Section id="Home">
      <ParallaxBanner className='relative'>

        <Carousel>
          <CarouselItem>
            <ParallaxBannerLayer image="/images/carousel/carousel-1.jpg" speed={-20} />

            <div className='h-full bg-black z-20 w-full flex flex-col justify-center items-center'>

              <div className="relative  rounded-md overflow-hidden px-4 py-5 shadow-xl shadow-sky-500 flex">
                <div className="absolute left-0 top-0 w-full h-full opacity-40 z-10 bg-black"></div>
                <div className='flex flex-col justify-center items-center z-20'>

                  <CodeIcon style={{
                    color: "var(--logo-color)",
                    fontSize: "78px",
                  }} />
                  <h1 className='text-3xl md:text-4xl lg:6xl text-white ont-bold '>Namaste!</h1>
                  <div className='h-1 bg-white w-40'></div>
                  <h2 className='text-2xl text-white'>I&apos;m</h2>
                  <h1 className='text-4xl md:text-5xl text-sky-400  lg:text-7xl  font-bold'>Sudarshan Khadka</h1>
                  <div className='h-2 bg-sky-500 w-[50%]'></div>
                  <CodeOffIcon style={{
                    color: "var(--logo-color)",
                    fontSize: "78px"
                  }} />
                </div>
              </div>
            </div>
            {/* <Image src={"/images/carousel/carousel-1.jpg"} fill sizes='100vw' alt='cover picture'/> */}
          </CarouselItem>
          {/* <CarouselItem>
            <ParallaxBannerLayer image="/images/carousel/carousel-3.jpg" speed={-20} />
            <div className='w-full bg-black z-20 flex flex-col justify-center items-center'>

              <div className="relative rounded-md overflow-hidden px-4 py-5 shadow-lg shadow-sky-500 flex ">
                <div className="absolute w-full h-full left-0 top-0 opacity-40 z-10 bg-black"></div>
                <div className='z-20 flex flex-col justify-center items-center'>
                  <CodeIcon style={{
                    color: "var(--logo-color)",
                    fontSize: "78px",
                  }} />
                  <h1 className='text-3xl md:text-4xl lg:5xl text-white'>Nameste!</h1>
                  <h2 data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-white'>I&apos;m</h2>
                  <h1 data-aos="fade-right" className='text-3xl md:text-5xl lg:text-7xl text-white'>a Website</h1>
                  <h2 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-white'>&</h2>
                  <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl md:text-5xl lg:text-7xl text-white'>Android Developer.</h1>
                  <div className='h-2 bg-sky-500 w-[50%]'></div>
                  <CodeOffIcon style={{
                    color: "var(--logo-color)",
                    fontSize: "78px"
                  }} />
                </div>
              </div>
            </div>
            <Image src={"/images/carousel/carousel-1.jpg"} fill sizes='100vw' alt='cover picture'/>
          </CarouselItem> */}

        </Carousel>
      </ParallaxBanner>
    </Section>
  )
}
