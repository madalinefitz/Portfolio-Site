import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink
                to="/"
                exact 
            >
                Home
            </NavLink>
            <NavLink
                to="/aboutme"
                exact
            >
                About Me
            </NavLink>
            <NavLink
                to="/projects"
                exact
            >
                Projects
            </NavLink>
            <NavLink
                to="/resume"
                exact
            >
                Resume
            </NavLink>
            <NavLink
                to="/contactme"
                exact
            >
                Contact Me
            </NavLink>
        </div>

    )
}

export default NavBar