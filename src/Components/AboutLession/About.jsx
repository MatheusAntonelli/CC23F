import React from 'react'
import { Link } from 'react-router-dom';
import './About.css'

function About(props) {
    return (
        <>  
            <div className="about">
                <div className='about-header'>
                    <h1 className='course-text'>{props.title}</h1>
                    <hr />
                </div>
                <div className="feature">
                  <p>{props.text}</p>  
                  <figure className='' data-category={props.label}>
                        <img
                            className='about-banner'
                            alt='Imagem'
                            src={props.src}
                        />
                    </figure>
                </div>
                <div className="info-about">
                    <table border='0' className='table'>
                        <tr>
                          <td><img src="/img/user-profile.png" alt="By Pavani TLN" className="icon-table" />Professor(a): {props.person}</td> 
                        </tr>
                        </table>
                        <table className="table">
                        <tr>
                          <td><img src="/img/mail.png" alt="mail" className="icon-table" />Email: {props.mail}</td>  
                        </tr>
                        </table>
            </div>
            </div>
            
        </>
    )
}

export default About
