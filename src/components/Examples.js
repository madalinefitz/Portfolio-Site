import React, {useState} from 'react'
import hustle from './hustle.png'

function Examples(){
    const [showHustle, setShowHustle] = useState(false)

    const handleShowHustle = () => {setShowHustle(!showHustle)}

    return(
        <div class="bg-[#FFC39E] h-screen">
            <div class="text-6xl font-bold text-center text-[#FFECE1] p-10">Technical Work</div>
                <div class="flex mb-4">
                    <div class="w-full max-w-sm w-full lg:max-w-full lg:flex mx-48">
                        <div >
                            <img src={hustle} class="h-auto cursor-pointer" onClick={handleShowHustle}/>
                        </div>
                        <div class="bg-[#ED8A65] rounded-b shadow-lg lg:rounded-b-none lg:rounded-r p-10 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                            <div class="text-[#FFECE1] font-bold text-2xl mb-2">Hustle.</div>
                            <p class="text-[#FFECE1] text-lg">User can organize and view schedule and estimated pay for multiple jobs using iOS app</p>
                            <div class="text-[#FFECE1] p-5">
                                <li>Built three models and associated database relationships using Python with Flask, serialize rules, and backpopulates</li>
                                <li>Created effective RestAPI methods to perform full CRUD for information in databases </li>
                                <li>Utilizing React Native CLI for iOS, built a user-friendly and efficient client side interface with multiple components, authorization using JWT, and useContext and useState hooks</li>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-sm">
                                <p class="text-[#FFECE1] leading-none">JavaScript, React Native, Python, Flask</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Examples