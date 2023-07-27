import React from 'react'
import {plainSunset} from './plainSunset.png'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] bg-cover px-52 py-20">
            <div class="bg-[#FFECE1] bg-opacity-50 text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-3xl font-medium">Experience</h1>
                <p>As a software engineer I am pursuing a career in which I can mix logic, creativity, and problem solving skills to build innovate solutions. I have grown in several languages and frameworks, built projects with teams and independently, and am constantly learning more.

                Over the years my professional experiences have allowed me to develop a complete and well rounded skill set. I have a background as a labor and delivery nurse through which I developed an ability to communicate effectively and adapt quickly to a new situation. As an event and volunteer coordinator, I collaborated with a multidisciplinary team to host an inagural fundraising gala. During my study abroad and time as an intern, I discovered the importance of understanding that the world can look very different depending on a person's experiences and background.

                All of these skills work together in a beautiful way and give me the unique knowledge and ability to develop innovative ideas and manage a broad range of problems. I am excited to positively contribute to the tech field!</p>
            </div>
            <div class="flex flex-rows text-[#FFECE1]">
                <div class="basis-1/2 bg-[#ED8A65] m-10 shadow-md rounded-md">
                    <h1 class="text-4xl text-center font-bold p-5">Tech Stack</h1>
                    <div class="pl-10 pb-10 m-3 text-2xl">
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>CSS</p>
                        <p>TailwindCSS</p>
                    </div>
                </div>
                <div class="basis-1/2 bg-[#ED6565] m-10 shadow-md rounded-md">
                    <h1 class="text-4xl font-bold p-5 text-center">Skills</h1>
                    <div class="pl-10 pb-10 m-3 text-2xl">
                        <p>Time Management</p>
                        <p>Communication</p>
                        <p>Collaboration</p>
                        <p>Problem Solving</p>
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