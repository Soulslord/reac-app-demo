import React from 'react';
import Navigation from '../components/Navigation/Navigation';

import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import OtherSkills from '../components/knowledges/OtherSkills';
import Language from '../components/knowledges/Language';


const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowLedgesContent">
                <Language />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;