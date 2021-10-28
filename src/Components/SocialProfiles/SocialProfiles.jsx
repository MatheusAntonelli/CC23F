import React from 'react'
import './SocialProfiles.css'

function SocialProfiles() {
    return (
        <>
            <section className='all-social'>
            <div className="container">
                <h1>Minhas Redes Sociais</h1>
                <div className="iphone">
                    <img src="./img/smartphone.png" alt="smartphone" className='smart'/>
                    <div className='social-media'>
                       <a href="https://www.instagram.com/matheusantonell1/" alt="insta" className='link'><img src="./img/instagram.png"/></a> 
                        <a href="https://github.com/MatheusAntonelli" alt="Github" className='link'><img src="./img/github.png"  /></a>
                        <a href="https://www.linkedin.com/in/matheus-antonelli-167004197/" alt="Linkedin" className='link'><img src="./img/linkedin.png"/></a>
                    </div>
                </div>
            </div>
            </section>
            

        </>
    )
}

export default SocialProfiles