import React from 'react'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] h-screen">
            <div>
                <h1>Experience</h1>
                <p>This is space for my background and experiences</p>
            </div>
            <div class="flex flex-rows">
                <div class="basis-1/2">
                    <h1>Tech Stack</h1>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Flask</li>
                </div>
                <div class="basis-1/2">
                    <h1>Skills</h1>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </div>
            </div>
            <div>
                <h1>For Fun</h1>
                <p>this is fun</p>
            </div>


        </div>

    )
}

export default AboutMe