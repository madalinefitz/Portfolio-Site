import React, {useState} from 'react'
import hustle from './hustle.png'
import hustle1 from './hustle1.png'
import hustle2 from './hustle2.png'
import hustle3 from './hustle3.png'
import hustle4 from './hustle4.png'
import hustle5 from './hustle5.png'
import hustle6 from './hustle6.png'
import hustle7 from './hustle7.png'


function Examples(){
    const [showHustle, setShowHustle] = useState(false)

    const handleShowHustle = () => {setShowHustle(!showHustle)}

    const openHustleGitHub = () => {
        window.open('https://github.com/madalinefitz/Capstone-Project-Hustle', '_blank', 'noreferrer')
    }

    return(
        <div class="bg-[#FFC39E] h-screen">
            {showHustle ?
            <>
                <div class="fixed inset-0 bg-[#FFECE1] bg-opacity-50 transition-opacity"></div>
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center text-end sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-[#FFC39E] px-10 sm:p-6 sm:pb-10">
                                    <div class="mt-3 sm:ml-4 sm:mt-0">
                                        <button onClick={handleShowHustle} type="button" class="inline-flex w-full rounded-md text-sm font-semibold text-[#FFECE1] shadow-lg sm:ml-3 sm:w-auto px-3 py-2">X</button>
                                        <div class="max-w-2xl mx-auto">
                                        <div id="default-carousel" class="relative" data-carousel="static">
                                            <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                    <img src={hustle1} class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="hustle one"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle2} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle two"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle3} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle three"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle4} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle four"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle5} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle five"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle6} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle six"/>
                                                </div>
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src={hustle7} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="hustle seven"/>
                                                </div>
                                            </div>
                                            <div class="flex absolute bottom-5 left-1/2 z-30 space-x-7 -translate-x-1/2">
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
                                            </div>
                                            <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                                                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                                    <span class="hidden">Previous</span>
                                                </span>
                                            </button>
                                            <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                                                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                                    <span class="hidden">Next</span>
                                                </span>
                                            </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </>
                :
                <>
            <div class="text-6xl font-bold text-center text-[#FFECE1] p-10">Technical Work</div>
                <div class="flex mb-4">
                    <div class="w-full max-w-sm w-full lg:max-w-full lg:flex mx-48">
                        <div >
                            <img src={hustle} class="h-auto cursor-pointer" onClick={handleShowHustle}/>
                        </div>
                        <div class="bg-[#ED8A65] rounded-b shadow-lg lg:rounded-b-none lg:rounded-r p-10 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                            <div onClick={openHustleGitHub} class="text-[#FFECE1] items-center mr-5 flex justify-end cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div class="text-[#FFECE1] font-bold text-2xl mb-2">Hustle.</div>
                            <p class="text-[#FFECE1] text-lg">User can organize and view schedule and estimated pay for multiple jobs using iOS app</p>
                            <div class="text-[#FFECE1] p-5">
                                <li>Built three models and associated database relationships using Python with Flask, serialize rules, and backpopulates</li>
                                <li>Created effective RestAPI methods to perform full CRUD for information in databases </li>
                                <li>Utilizing React Native CLI for iOS, built a user-friendly and efficient client side interface with multiple components, authorization using JWT, and useContext and useState hooks</li>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-sm">
                                <p class="text-[#FFECE1] leading-none">JavaScript, React Native, Python, Flask</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default Examples