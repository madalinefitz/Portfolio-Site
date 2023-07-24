import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){

    return(
        <div>
        <nav class="bg-[#FFC39E] fixed right-6  min-w-[64px]">
            <div class="divide-y divide-[#FFECE1] flex flex-col h-screen p-5 text-[#FFECE1] align-middle">

                        
                        <div class="hover:bg-[#fce4d8] hover:bg-opacity-30 basis-1/5 aspect-square min-h-[auto] w-25 text-center px-5 pt-14">
                            <NavLink to='/' exact>
                                HOME
                            </NavLink>
                       
                        </div>
                        <div class="hover:bg-[#FFEE98] hover:bg-opacity-30  basis-1/5 aspect-square min-h-[auto] w-25 text-center text-lg px-5 pt-14">
                            <NavLink to='/aboutme' exact>
                                ABOUT
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#EFA11B] hover:bg-opacity-30  basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg px-5 pt-14">
                            <NavLink to='/resume' exact>
                                RESUME
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#ED8A65] hover:bg-opacity-30 basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg px-5 pt-14">
                            <NavLink to='/projects' exact>
                                PROJECTS
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#ED6565] hover:bg-opacity-30 basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg px-5 pt-14">
                            <NavLink to='/contactme' exact>
                                CONNECT
                            </NavLink>
                        </div>
                    </div>
                
        </nav>
        {/* :
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <div class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/' exact>
                                        Home
                                    </NavLink>
                                </div>
                                <div class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/aboutme' exact>
                                        About Me
                                    </NavLink>
                                </div>
                                <div class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/resume' exact>
                                        Resume
                                    </NavLink>
                                </div>
                                <div class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/projects' exact>
                                        Projects
                                    </NavLink>
                                </div>
                                <div class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/contactme' exact>
                                        Contact Me
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        } */}
        </div>
    )
}

export default NavBar