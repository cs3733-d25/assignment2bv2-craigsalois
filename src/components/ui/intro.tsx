import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto text-center">
            <p className="text-lg">
                Hi! We are {name1} and {name2}. We are part of CS3733-D25 Team 20 and excited to work on this project together!<br/>
                {name1} is from Massachusetts and loves running.<br/> {name2} is from California and ______
            </p>
        </div>
    );
};

export default Intro;