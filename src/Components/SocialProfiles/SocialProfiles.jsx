import React from 'react'
import './SocialProfiles.css'

function SocialProfiles() {
    return (
        <>
            <section className='all-social'>
            <div className="container">
                <h1>Minhas Redes Sociais</h1>
                <div className="iphone">
                    <img src="./img/smartphone.png" alt="" className='smart'/>
                    <div className='social-media'>
                       <a href="http://instagram.com" className='link'><img src="./img/instagram.png"/></a> 
                        <a href="http://Github.com" className='link'><img src="./img/github.png"  /></a>
                        <a href="http://linkedin.com" className='link'><img src="./img/linkedin.png"/></a>
                    </div>
                </div>
            </div>
            </section>
            

        </>
    )
}

export default SocialProfiles