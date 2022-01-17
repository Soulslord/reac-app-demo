
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation/Navigation';
import "../styles/styles.scss"

const Home = () => {

    const [staten, setStaten] = useState(false);

    const useStaten = () => {
        setStaten(!staten);
    };

    console.log(staten);
    
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Stephane Noel</h1>
                    <h2>Développeur Front-end</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;