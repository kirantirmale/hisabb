import React, { useState, useEffect } from 'react';
import Features from '../components/Features';
import Sidebar from '../components/Sidebar';

const Feature = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleSetActive = (section) => {
        setActiveSection(section);
    };

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

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
            <Sidebar handleSetActive={handleSetActive} scrollToSection={scrollToSection} activeSection={activeSection} />
            <Features handleSetActive={handleSetActive} scrollToSection={scrollToSection} />
        </>
    );
};

export default Feature;
