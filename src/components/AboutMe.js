import React from 'react'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] h-screen px-52 py-20">
            <div class="bg-[#FFECE1] bg-opacity-50 text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-3xl font-medium">Experience</h1>
                <p>This is space for my background and experiences</p>
            </div>
            <div class="flex flex-rows text-[#FFECE1]">
                <div class="basis-1/2 bg-[#ED8A65] m-10 shadow-md rounded-md">
                    <h1 class="text-3xl text-center font-medium p-5">Tech Stack</h1>
                    <div class="pl-10 pb-10">
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>CSS</p>
                        <p>TailwindCSS</p>
                    </div>
                </div>
                <div class="basis-1/2 bg-[#ED6565] m-10 shadow-md rounded-md">
                    <h1 class="text-3xl font-medium p-5 text-center">Skills</h1>
                    <div class="pl-10 pb-10">
                    <p>Time Management</p>
                    <p>Communication</p>
                    <p>Collaboration</p>
                    </div>
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