import React, { useState, useEffect } from 'react';
import Features from '../components/Features';
import Sidebar from '../components/Sidebar';

const Feature = () => {
    const [activeSection, setActiveSection] = useState('');

 

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <>
            <Sidebar activeSection={activeSection} />
            <Features setActiveSection={setActiveSection} />
        </>
    );
};

export default Feature;
