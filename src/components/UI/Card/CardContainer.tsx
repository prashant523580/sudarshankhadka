import React from 'react'

export default function CardContainer(props: any) {
  return (
    <div className='mt-6 grid grid-cols-2 px-3 max-md:px-2 gap-y-3 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8'>{props.children}</div>
  )
}
