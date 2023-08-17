import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Examples from './components/Examples'
import Resume from './components/Resume'
import ContactMe from './components/ContactMe'
import {Routes, Route} from 'react-router-dom'
import "./index.css"


function App(){
    return(
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/> 
                <Route exact path="/aboutme" element={<AboutMe />}/>
                <Route exact path="/examples" element={<Examples/>}/>
                <Route exact path="/resume" element={<Resume/>}/>
                <Route exact path="/contactme" element={<ContactMe/>}/>
            </Routes>
        </div>
    )
}

export default App