import React, { useState, useEffect } from 'react';
import Features from '../components/Features';
import Sidebar from '../components/Sidebar';
import { PiX } from 'react-icons/pi';

const Feature = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleSetActive = (section) => {
        setActiveSection(section);

        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.scrollTop = 0;
        }
    };

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.scrollTop = 0;
        }
    }, [activeSection]);

    return (
        <>
            <Sidebar handleSetActive={handleSetActive} scrollToSection={scrollToSection} />
            <Features handleSetActive={handleSetActive} scrollToSection={scrollToSection} />
        </>
    );
};

export default Feature;
