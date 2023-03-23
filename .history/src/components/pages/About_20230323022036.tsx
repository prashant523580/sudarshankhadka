import Image from 'next/image'
import React from 'react'
import Section from '../Section'
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
export default function AboutComponent() {
    return (
        <Section id={"About"}>

            <div className='py-10'>
                <div className='relaive flex justify-space items-center flex-wrap md:flex-nowrap'>

                    <div className='relative w-[30%] md:w-[40%] lg:w-[30%] h-64 '>
                        {/* <ParallaxBanner> */}
                        {/* <ParallaxBannerLayer image='/images/carousel/carousel-1.jpg' speed={-20}/> */}
                        <Image data-aos-duration="1000"  data-aos="zoom-in" src={"/images/main.png" } fill alt='image abouts' />
                        {/* </ParallaxBanner> */}
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000" className='relative h-64 lg:h-auto md:h-auto w-80'>
                        <Parallax speed={-5}>

                            <div  className='bg-black overflow-hidden shadow-xl shadow-sky-700 rounded-md  px-5 py-5 absolute left-0 lg:-left-20 md:-left-20 top-0 -translate-y-[50%]'>
                                <h4  data-aos="fade-up" data-aos-duration="1000"  className='text-blue-200 text-sm'>About Me</h4>
                                <div  data-aos="fade-left" data-aos-duration="1000"  className="h-1 bg-blue-300 w-24    "></div>
                                <h1  data-aos="fade-up" data-aos-duration="1000"  className='text-white text-xl uppercase'>Who Am I?</h1>
                                <p  data-aos="fade-up" data-aos-duration="1400"  className='text-white'>A candidate with strong front office knowledge, excellent communication skills, and team management experience would be a valuable asset to any organization. Front office knowledge includes an understanding of reception, guest services, and administrative tasks that are essential for the smooth operation of a business..</p>
                            </div>
                        </Parallax>
                    </div>
                </div>
            <div className='px-10 space-y-4 py-3 text-white dark:text-gray-300'>
            <p></p>
            Effective communication skills are vital to building relationships with customers and colleagues, resolving conflicts, and providing clear direction. Team management involves leading, motivating, and coordinating a group of individuals towards common goals, which requires strong leadership, organization, and problem-solving abilities. A candidate with these skills can contribute to enhancing customer satisfaction, improving productivity, and achieving business objectives
        
            </div>
            </div>
            <div className='bg-gray-300 flex items-center justify-center overflow-hidden  py-3 px-4'>
                <div  data-aos="fade-up" data-aos-duration="1000" className="w-52 h-32 flex flex-col mx-2 my-3 items-center justify-center bg-black dark:bg-white shadow-lg border-b-8 border-b-sky-400 border-blue-400  px-3 py-2">
                    <WebIcon color='info' />
                    <h1 className='text-blue-300 text-center'>Web Design & Development</h1>
                </div>
                <div  data-aos="fade-up" data-aos-duration="1000" className="w-52 h-32 flex flex-col mx-2 my-3 items-center justify-center bg-black dark:bg-white shadow-lg border-b-8 border-b-sky-400 border-blue-400  px-3 py-2">
                    <AndroidIcon color='info' />
                    <h1 className='text-blue-300 text-center'>Application</h1>
                </div>

            </div>
            {/* <div  data-aos="fade-up" data-aos-duration="1000" className='bg-black px-3 py-5 w-[80%] md:w-[50%] lg:w[60%] mx-auto mt-10 rounded-md'>
                <h1 className='text-sky-500 text-xl'>I am happy to know you
                    that 300+ projects done sucessfully!
                </h1>
                <button className='border-1 border-blue-400 text-blue-300 my-4 ml-5'>HIRE ME</button>
            </div> */}
        </Section>
    )
}
