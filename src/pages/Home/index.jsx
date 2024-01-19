import React from 'react'
import Banner from '../../components/Banner/'
import Homebanner from '../../Assets/Home_Banner.jpg'

function Home() {
    return (
        <div>
            <Banner backgroundImage={Homebanner}/>
            
            <h1>Accueil</h1>
        </div>
    )
}

export default Home