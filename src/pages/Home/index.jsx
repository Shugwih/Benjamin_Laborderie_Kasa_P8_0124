import React from 'react';
import data from '../../data/logements.json';
import Banner from '../../components/Banner/';
import Card from '../../components/Card/';
import Homebanner from '../../Assets/Home_Banner.jpg';
import styles from './Home.module.scss';

function Home() {

    return (
        <div>
            <Banner backgroundImage={Homebanner} bannerText="Chez vous, partout et ailleurs" />
            <div className={styles.home}>
                {data.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} cover={item.cover}/>
                ))}
            </div>
        </div>
    )
}

export default Home