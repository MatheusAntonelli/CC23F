import React from 'react'
import Exercise1 from '../Components/Atv1/Exercise1'
import MainSection from '../Components/MainSection/MainSection'
import Navbar from '../Components/Navbar/Navbar'
import SocialProfiles from '../Components/SocialProfiles/SocialProfiles'
import Agrometeorologia from './Disciplinas/Agrometeorologia'

function MainPage() {
    return (
        <>
            <Navbar/>
            <MainSection/>
            <section id='atv-1'>
                <Exercise1></Exercise1>
                <SocialProfiles></SocialProfiles>
            </section>
        </>
    )
}

export default MainPage
