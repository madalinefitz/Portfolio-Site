import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ContactMe from './components/ContactMe'
import {Routes, Route} from 'react-router-dom'
import "./index.css"


function App(){
    return(
        <div>
                {
                <Route exact path="/" element={<Home/>}/> ? 
                <div>
                <NavBar/>
                <Routes>
                    
                    <Route exact path="/" element={<Home/>}/> 
                    <Route exact path="/aboutme" element={<AboutMe />}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/resume" element={<Resume/>}/>
                    <Route exact path="/contactme" element={<ContactMe/>}/>
                </Routes> 
                </div>
                :
                <div>
                <NavBar/>
                <Routes>
                    
                    <Route exact path="/aboutme" element={<AboutMe />}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/resume" element={<Resume/>}/>
                    <Route exact path="/contactme" element={<ContactMe/>}/>
                </Routes>
                </div>
                }
        </div>
    )
}

export default App