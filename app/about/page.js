"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const About = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Welcome to My Website", "We specialize in amazing web solutions", "Your success is our priority"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
       <div className="min-h-screen bg-gradient-to-r from-blue-400 via-green-300 to-red-400 flex flex-col items-center justify-center text-gray-900">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="text-2xl mb-8" ref={typedElement}></div>
            <p className="max-w-2xl text-center">
        
                Our website specializes in providing high-quality coding tutorials tailored to your learning needs. Whether you're interested in mastering C, C++, JavaScript, or Python, our expert instructors offer comprehensive lessons designed to enhance your skills. We ensure that your coding education is both thorough and engaging, equipping you with the knowledge to excel in your programming journey.
            </p>
        </div>
    );
}

export default About;
