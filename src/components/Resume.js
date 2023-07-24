import React, {ReactPDF} from 'react'
import resume from './resume.pdf'

function Resume(){
    return(
        <div class="bg-[#FFC39E] h-screen">
            <object class="h-screen w-screen pr-52" data={resume} type="application/pdf"/> 
        </div>

    )
}

export default Resume