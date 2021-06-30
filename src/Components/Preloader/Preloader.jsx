import React from 'react'
import "./Preloader.css"
function Preloader() {
    return (
        <div className="preloader">
            <h1>Hash/Hub</h1>
            <div className="loader">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                <div class="line line-4"></div>
                <div class="line line-5"></div>
            </div>
        </div>
    )
}

export default Preloader
