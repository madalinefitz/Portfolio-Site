import React from 'react'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] h-screen px-52 py-20">
            <div class="bg-[#FFECE1] bg-opacity-50 text-center p-5">
                <h1 class="text-xl text-medium text-white">Experience</h1>
                <p>This is space for my background and experiences</p>
            </div>
            <div class="flex flex-rows">
                <div class="basis-1/2 bg-[#ED8A65] text-center p-5 m-10">
                    <h1>Tech Stack</h1>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Flask</li>
                </div>
                <div class="basis-1/2 bg-[#ED6565] text-center p-5 m-10">
                    <h1>Skills</h1>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </div>
            </div>
            <div class="bg-[#FFEE98] text-center p-5 m-10">
                <h1>For Fun</h1>
                <p>this is fun</p>
            </div>


        </div>

    )
}

export default AboutMe