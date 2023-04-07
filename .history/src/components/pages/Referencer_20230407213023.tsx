import React from 'react'
import Divider from '../UI/Divider'

export default function Referencer() {
    return (
        <section className="text-gray-600 body-font">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-100 ">

                DECLARATION
                <br className="hidden sm:block" />

            </h1>
            <p className='text-center'>
                I declare that all the information is correct to the best according to my knowledge.

            </p>
            <div className="container px-10  mx-auto flex justify-center items-center flex-col">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-100 "><br className="hidden sm:block" />Referencer

                </h1>
                <Divider />
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 py-10 md:space-y-0 space-y-6">
                    <div data-aos="fade-up" data-aos-duration="1000" className="p-4 md:w-1/2 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-100 text-lg title-font font-medium mb-2">Mr. Ratindra Singh</h2>
                            <p className="leading-relaxed text-base">
                                Academic head<br />
                                Mid valley Int’l College<br />
                                Gyaneshor Kathmandu Nepal<br />
                                9801113141<br />
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Ratindar.singh@midvalley.edu.np
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="p-4 md:w-1/2 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-100 text-lg title-font font-medium mb-2">Mr. Jeevan Adhikari</h2>
                            <p className="leading-relaxed text-base">

                                Program Coordinator<br />
                                Mid valley Int’l college<br />
                                9851074365<br />

                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">coordinator@midvalley.edu.np
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
