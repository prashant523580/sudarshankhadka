
import Section from '../Section'
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
//CountMethods.js
import React, { useEffect, useState, useRef } from "react";
import CardComponent from '../UI/Card';

//setInterval
const CountSetInterval = (props : any) => {
  const intervalRef = useRef();
  const countRef = useRef<any>();

  // label of counter
  // number to increment to
  // duration of count in seconds
  const { number, duration } = props;

  // number displayed by component
  const [count, setCount] = useState("0");

  // calc time taken for computation
  const [timeTaken, setTimeTaken] = useState(Date.now());

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number);
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;

      //update uisng state
      setCount(String(start));

      //update using ref
      //   countRef.current.innerHTML = start;

      if (start === end) {
        clearInterval(timer);
        const diff = Date.now() - timeTaken;
        setTimeTaken(diff / 1000);
        
        //uncomment this when using ref
        // setCount(String(start));
      }
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <>
      <span ref={countRef} className="Count">
        {count}
      </span>{" "}
      {"     "}
      {number === count && (
        <span>
          | Took : <b>{timeTaken}</b> seconds to complete
        </span>
      )}
    </>
  );
};
const countT = [
   {
      label: "Download"
   },
   {
      label: "Download"
   },
   {
      label: "Download"
   },
   {
      label: "Download"
   },
]
export default function ServicesComponent() {

   const [counter,setCounter] = React.useState(0);
   const target = 1000;

   React.useEffect(() => {
      console.log(counter)
      let start_count = 0;
      let incre_counter = target / 100;
      const updateCounter  = () => {
         if(counter < target){
            setCounter(start_count + incre_counter);
            setTimeout(updateCounter,200)
         }else{
            setCounter(target)
         }
      }
      updateCounter()
   },[])
   React.useEffect(() => {
      console.log(counter)
   },[counter])
  return (
    <Section id="Services">


<div className="pt-20  lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div className="container mx-auto ">
      <div className="flex flex-wrap justify-center">
         <div className=" px-4">
            <div   className="text-center text-white  mb-12 lg:mb-20 max-w-[510px]">
               <span  data-aos="fade-up" data-aos-duration="1000" className=" uppercase font-semibold text-lg text-primary mb-2 block">
              my services
               </span>
               <h2  data-aos="zoom-in" data-aos-duration="1000"
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  capitalize
                  "
                  >
                     here are some of my expertise.
                  {/* What We Offer */}
               </h2>
                  <p className="text-base capitalize">
                     {/* here are some of my experiise. */}
                  </p>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap justify-center ">
      <CardComponent
         title='Situation handling'
         description={"Situation handling is the ability to effectively manage unexpected circumstances that may arise during a guest's stay. This includes being able to quickly assess the situation, communicate with guests and staff, and take appropriate action to minimize any negative impact on the guest experience."}
         icon={<WebIcon fontSize='large' style={{
            fontSize: 80,
            color:"white"
           }} color="info"/>}
      />
      <CardComponent
         title=' Guest dealing'
         description={" Guest dealing involves providing excellent customer service to guests. This includes being attentive to their needs, providing helpful information and recommendations, and responding quickly and professionally to any requests or concerns. A positive guest experience can lead to increased customer loyalty and positive reviews, which can be beneficial for a hospitality business."}
         icon={<AndroidIcon  style={{
            color:"white",
            fontSize: 80
           }} />}
      />
      <CardComponent
         title='FNB services'
         description={"FNB services, or food and beverage services, are an important aspect of the hospitality industry. This includes providing a variety of high-quality food and drink options to guests, whether through in-room dining, on-site restaurants, or other dining options. Providing delicious and well-presented FNB services can help to enhance the overall guest experience and make their stay more memorable."}
         icon={<AndroidIcon  style={{
            color:"white",
            fontSize: 80
           }} />}
      />

      </div>
   </div>

</div>
   {/* <ParallaxBanner>
      <ParallaxBannerLayer className='-z-10' image='/images/carousel/carousel-2.jpg' speed={-10}></ParallaxBannerLayer>
      <section className="text-gray-600 body-font z-50">
  <div className="container bg-black px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap justify-center text-center ">
      <div data-aos="fade-up" data-aos-duration="800"  className="p-4  md:w-1/4 sm:w-1/2 w-1/2  my-2">
        <div className="border-2  border-sky-500 shadow-lg shadow-sky-400 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-sky-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-300">2</h2>
          <p className="leading-relaxed dark:text-gray-500">Clients</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000"  className="p-4 md:w-1/4 sm:w-1/2 w-1/2 my-2">
        <div className="border-2 border-sky-500 shadow-lg shadow-sky-600 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-sky-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-200">1.3K</h2>
          <p className="leading-relaxed dark:text-gray-500">Users</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1200"  className="p-4 md:w-1/4 sm:w-1/2 w-1/2 my-2">
        <div className="border-2 border-sky-500 shadow-lg shadow-sky-400 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-sky-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-300">74</h2>
          <p className="leading-relaxed dark:text-gray-500 ">Files</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1400"  className="p-4 md:w-1/4 sm:w-1/2 w-1/2 my-2">
        <div className="border-2 border-sky-600 shadow-lg shadow-sky-700 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-sky-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-300">46</h2>
          <p className="leading-relaxed dark:text-gray-500">Places</p>
        </div>
      </div>
    </div>
  </div>
 
</section>
   </ParallaxBanner> */}
    </Section>
  )
}
