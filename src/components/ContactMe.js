import React, {useState} from 'react'


function ContactMe(){
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    const openBlog = () => {
        window.open('https://medium.com/@madaline.fitzpatrick', '_blank', 'noreferrer')
    }

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/madaline-fitzpatrick/', '_blank', 'noreferrer')
    }

    const openGitHub = () => {
        window.open('https://github.com/madalinefitz', '_blank', 'noreferrer')
    }
    return(
        <div class="bg-[#FFC39E] bg-cover flex flex-col text-[#FFECE1] p-20">
            {modal ?
            <div>
                <div class="fixed inset-0 bg-[#FFECE1] bg-opacity-50 transition-opacity"></div>
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center text-end sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-[#FFC39E] px-10 sm:p-6 sm:pb-10">
                                    <div class="mt-3 sm:ml-4 sm:mt-0">
                                        <button onClick={handleModal} type="button" class="inline-flex w-full rounded-md text-sm font-semibold text-[#FFECE1] shadow-lg sm:ml-3 sm:w-auto px-3 py-2">X</button>
                                        <h3 class="font-semibold text-[#FFECE1] text-center text-3xl pt-6">madaline.fitzpatrick@gmail.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : 
                <div>
                    <div onClick={handleModal} class="items-center mb-20 text-5xl flex justify-center cursor-pointer">
                        <h1 class="p-5">Email</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div onClick={openLinkedIn} class="text-5xl items-center mb-20 flex justify-center">
                        <h1 class="p-5">LinkedIn</h1>
                        <button class="p-2 font-semibold text-[#FFECE1]inline-flex items-center space-x-2 rounded">
                            <svg class="w-32 h-32 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                            </svg>
                        </button>
                    </div>
                    <div onClick={openBlog} class="text-5xl items-center mb-20 flex justify-center cursor-pointer">
                        <h1 class="p-5">Blog</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <div onClick={openGitHub} class="text-5xl items-center mb-20 flex justify-center cursor-pointer">
                        <h1 class="p-5">GitHub</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-32 w-32">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </div>
                }
            
        </div>

    )
}

export default ContactMe