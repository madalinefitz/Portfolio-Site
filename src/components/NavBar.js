import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    const [navBar, setNavBar]= useState(<NavLink to='/' exact>Home</NavLink>)

    return(
        <div>
        <nav class="bg-white shrink-0 grow-0 fixed  right-6  min-w-[64px]">
            <div class="divide-y divide-black flex flex-col h-screen p-5">

                        <div class="hover:bg-[#fce4d8] basis-1/5 aspect-square min-h-[auto] w-25 text-center text-lg p-8 whitespace-normal">
                            <NavLink to='/' exact>
                                HOME
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#fce4d8] basis-1/5 aspect-square min-h-[auto] w-25 text-center text-lg p-5">
                            <NavLink to='/aboutme' exact>
                                ABOUT ME
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#fce4d8] basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg p-5">
                            <NavLink to='/resume' exact>
                                RESUME
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#fce4d8] basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg p-5">
                            <NavLink to='/projects' exact>
                                PROJECTS
                            </NavLink>
                        </div>
                        <div class="hover:bg-[#fce4d8] basis-1/5  aspect-square min-h-[auto] w-25 text-center text-lg p-5">
                            <NavLink to='/contactme' exact>
                                CONTACT ME
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