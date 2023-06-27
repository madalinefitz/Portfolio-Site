import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
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
    )
}

export default NavBar