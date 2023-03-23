import * as React from 'react';

import { Button } from '@mui/material';


interface PropsTypes {
    title:string
    description: string,
    icon: any
}


export default function CardComponent(props: PropsTypes) {
    const [number, setNumber] = React.useState(100);

  

    return (
       
              <div  data-aos="fade-up" data-aos-duration="1000" className=" w-full md:w-1/2 lg:w-1/3 px-4  mx-2 rounded-md">
            <div
               className="
               p-10 md:px-7 xl:px-10 border-b-8 border-sky-500 bg-white shadow-md  mb-8
               "
               >
               <div
                  className="w-[100px] h-[100px] flex items-center justify-center bg-black rounded-2xl mb-8"
                  >
                    {props.icon}
                    {/* <AndroidIcon  style={{
                     color:"white",
                     fontSize: 80
                    }} /> */}
               </div>
               <h4 className="font-semibold text-xl text-black mb-3">
                    {props.title}
               </h4>
               <p className="text-body-color text-black  transition-transform">
                  {props.description.slice(0, number)} {number >= props.description.length ? " " : "..."}

                  { number >= props.description.length ?
                    <Button  onClick={() => {
                        setNumber(100)
                    }}>Less</Button>  : <Button onClick={() => {
                        setNumber(props.description.length)
                    }}>More</Button>
                }
           
               </p>
               
       
            </div>
    

            </div>
    );
}