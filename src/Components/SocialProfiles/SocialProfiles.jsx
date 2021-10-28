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
                       <a href="https://www.instagram.com/matheusantonell1/" target="_blank"  className='link'><img src="./img/instagram.png" alt="insta"/ ></a> 
                        <a href="https://github.com/MatheusAntonelli" target="_blank"  className='link'><img src="./img/github.png"  alt="Github"/></a>
                        <a href="https://www.linkedin.com/in/matheus-antonelli-167004197/" target="_blank" className='link'><img src="./img/linkedin.png" alt="Linkedin"/></a>
                    </div>
                </div>
            </div>
            </section>
            

        </>
    )
}

export default SocialProfiles