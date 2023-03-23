import React from 'react'
import Divider from './UI/Divider'

export default function Section(props: any) {
  return (
    <div id={props.id}>
      {props.headTitle &&
        <div className='px-8 py-10 text-center flex justify-center items-center flex-col'>
          <h5 data-aos="fade-up" data-aos-duration="1000" className='text-gray-500 dark:text-gray-300 uppercase'>{props.headTitle}</h5>
          <h1 data-aos="zoom-in" data-aos-duration="1000" className='uppercase text-gray-400 text-4xl font-bold'>{props.title}</h1>
          <Divider />

        </div>
    }
      {props.children}
    </div>
  )
}
