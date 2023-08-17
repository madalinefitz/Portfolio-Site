import React from 'react'
import plainSunset from './plainSunset.png'
import meAndBird from './meAndBird.png'

function AboutMe(){
    return(
        <div class="bg-[#FFC39E] bg-cover px-52 py-20">
            {/* <img src={plainSunset}/> */}
            <div class="bg-[#ED8A65] bg-opacity-75 text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-4xl font-bold">Experience</h1>
                <p class="whitespace-pre-line p-5 text-xl">As a software engineer I am pursuing a career in which I can mix logic, creativity, and problem solving skills to build innovate solutions. I have grown in several languages and frameworks, built projects with teams and independently, and am constantly learning more.</p>
                
                <p class="whitespace-pre-line p-5 text-xl">Over the years my professional experiences have allowed me to develop a complete and well rounded skill set. I have a background as a labor and delivery nurse through which I developed an ability to communicate effectively and adapt quickly to a new situation. As an event and volunteer coordinator, I collaborated with a multidisciplinary team to host an inagural fundraising gala. During my study abroad and time as an intern, I discovered the importance of understanding that the world can look very different depending on a person's experiences and background.</p>

                <p class="whitespace-pre-line p-5 text-xl">All of these skills work together in a beautiful way and give me the unique knowledge and ability to develop innovative ideas and manage a broad range of problems. I am excited to positively contribute to the tech field!</p>
            </div>
            <div class="flex flex-rows text-[#FFECE1]">
                <div class="basis-1/2 bg-[#ED8A65] bg-opacity-75 m-10 shadow-md rounded-md">
                    <h1 class="text-4xl text-center font-bold p-5">Tech Stack</h1>
                    <div class="pl-10 pb-10 m-3 text-2xl space-y-3">
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>CSS</p>
                        <p>TailwindCSS</p>
                    </div>
                </div>
                <div class="basis-1/2 bg-[#ED8A65] bg-opacity-75 m-10 shadow-md rounded-md">
                    <h1 class="text-4xl font-bold p-5 text-center">Skills</h1>
                    <div class="pl-10 pb-10 m-3 text-2xl space-y-4">
                        <p>Time Management</p>
                        <p>Communication</p>
                        <p>Collaboration</p>
                        <p>Problem Solving</p>
                        <p>Adaptability</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#ED8A65] bg-opacity-75 text-center p-5 m-10 text-[#FFECE1] shadow-md rounded-md">
                <h1 class="text-4xl font-bold">For Fun</h1>
                <div class="flex flex-rows">
                    <img src={meAndBird} alt="Me and Birdie" class="shadow-md rounded-md m-10 h-80 w-80"/>
                    <p class="whitespace-pre-line pt-10 px-20 text-xl text-left">I love spending time outside and often go hiking with my pup, Birdie. Exploring new places is also a favorite way to spend a free day. It's not always possible to travel too far, so checking out a restaurant or coffee shop I've never been to gives me a break from the familiar. </p>
                </div>
            </div>


        </div>

    )
}

export default AboutMe