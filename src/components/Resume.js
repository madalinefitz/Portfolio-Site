import React, {ReactPDF} from 'react'
import resume from './resume.pdf'

function Resume(){
    return(
        <div>
            <object class="h-screen w-screen" data={resume} type="application/pdf"/> 
        </div>

    )
}

export default Resume