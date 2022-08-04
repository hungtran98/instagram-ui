import React from "react"
import {Navigate} from 'react-router-dom'

function News() {
    return (
        
       <div> <h3>News page</h3>
       <Navigate to="/contact" replace={true} />
       </div>
    )
}

export default News