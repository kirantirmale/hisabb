import React, { useState, useEffect } from 'react';
import Features from '../components/Features';
import Sidebar from '../components/Sidebar';

const Feature = () => {
    
    const [activeSection, setActiveSection] = useState('');
    console.log(activeSection,"activeSection")


    return (
        <>
            <Sidebar activeSection={activeSection} />
            <Features setActiveSection={setActiveSection} />
        </>
    );
};

export default Feature;
