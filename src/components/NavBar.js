import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){

    return(
        <div>
            <nav class="bg-[#FFC39E] fixed right-6 min-w-[64px]">
                <div class="divide-y-[3px] divide-[#FFECE1] flex flex-col h-screen p-5 text-[#FFECE1] text-lg font-medium">
                    <div class="hover:bg-[#fce4d8] hover:bg-opacity-30 flex basis-1/5 aspect-square min-h-[auto] w-25 px-5 aspect-square justify-center items-center">
                        <NavLink to='/' exact>
                            HOME
                        </NavLink>
                    </div>
                    <div class="hover:bg-[#FFEE98] hover:bg-opacity-30 flex basis-1/5 aspect-square min-h-[auto] w-25 px-5 aspect-square justify-center items-center">
                        <NavLink to='/aboutme' exact>
                            ABOUT
                        </NavLink>
                    </div>
                    <div class="hover:bg-[#EFA11B] hover:bg-opacity-30 flex basis-1/5 aspect-square min-h-[auto] w-25 px-5 aspect-square justify-center items-center">
                        <NavLink to='/resume' exact>
                            RESUME
                        </NavLink>
                    </div>
                    <div class="hover:bg-[#ED8A65] hover:bg-opacity-30 flex basis-1/5 aspect-square min-h-[auto] w-25 px-5 aspect-square justify-center items-center">
                        <NavLink to='/examples' exact>
                            EXAMPLES
                        </NavLink>
                    </div>
                    <div class="hover:bg-[#ED6565] hover:bg-opacity-30 flex basis-1/5 aspect-square min-h-[auto] w-25 px-5 aspect-square justify-center items-center">
                        <NavLink to='/contactme' exact>
                            CONNECT
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar