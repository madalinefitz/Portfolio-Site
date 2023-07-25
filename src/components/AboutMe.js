import React from 'react'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] h-screen px-52 py-20">
            <div class="bg-[#FFECE1] bg-opacity-50 text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-3xl font-medium">Experience</h1>
                <p>This is space for my background and experiences</p>
            </div>
            <div class="flex flex-rows text-[#FFECE1]">
                <div class="basis-1/2 bg-[#ED8A65] text-center p-5 m-10 shadow-md rounded-md">
                    <h1 class="text-3xl font-medium">Tech Stack</h1>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Python</p>
                    <p>Flask</p>
                </div>
                <div class="basis-1/2 bg-[#ED6565] text-center p-5 m-10 shadow-md rounded-md">
                    <h1 class="text-3xl font-medium">Skills</h1>
                    <p>one</p>
                    <p>two</p>
                    <p>three</p>
                </div>
            </div>
            <div class="bg-[#FFEE98] text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-3xl font-medium">For Fun</h1>
                <p>this is fun</p>
            </div>


        </div>

    )
}

export default AboutMe