import React from 'react';
import Institutes from '../Institutes/Institutes';
import Mentors from '../Mentors/Mentors';
import Advisors from '../Advisors/Advisors';

const Home = () => {
    return (
        <div className='container mx-auto p-8'>
            <Institutes/>
            <Mentors/>
            <Advisors/>
        </div>
    );
};

export default Home;