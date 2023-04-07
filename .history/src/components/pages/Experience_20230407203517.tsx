import React from 'react'
import Section from '../Section'
import TungstenIcon from '@mui/icons-material/Tungsten';
import Divider from '../UI/Divider';
export default function ExperienceComponent() {
    return (
        <Section id={"Experience"}
            headTitle="Experience"
            title="work Experience"
        >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div data-aos="fade-up" data-aos-duration="1000" className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-400 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div  data-aos="fade-up" data-aos-duration="1000"  className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-sky-400 rounded-full inline-flex items-center justify-center">
                                <TungstenIcon style={{
                                    fontSize: 50
                                }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="zoom-in" data-aos-duration="1000" className="font-medium title-font text-sky-400 dark:text-white mb-1 text-xl">Armed Forced Officers Club and Hotel</h2>
                                <Divider />
                                <ul className="leading-relaxed dark:text-gray-300 list-disc ml-4">
                                    <li  data-aos="fade-up" data-aos-duration="1000" className='text-gray-300' >
                                    Worked  in FNB service department at (AFOC) Armed Forced Officers Club and Hotel ,UAE. .<br />

                                        <span className='text-white border-b'>2012 Dec 22</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-400 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div data-aos="fade-up" data-aos-duration="1000" className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-sky-400 rounded-full inline-flex items-center justify-center">
                                <TungstenIcon style={{
                                    fontSize: 50
                                }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 data-aos="zoom-in" data-aos-duration="1000" className="font-medium title-font text-sky-400 dark:text-white mb-1 text-xl">KAVERI INN</h2>
                                <Divider />
                                <ul data-aos="fade-up" data-aos-duration="1000" className="leading-relaxed dark:text-gray-400 list-disc ml-4">
                                    <li data-aos="fade-up" data-aos-duration="1000" className='text-gray-300'>A year experience as a receptionist in KAVERI INN, Gyaneshwor Kathmandu</li>
                           
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-400 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-sky-400 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
                                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-400 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-sky-400 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-500 mb-1 text-xl">Neptune</h2>
                                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </Section>
    )
}
