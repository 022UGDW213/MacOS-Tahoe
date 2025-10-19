
import React from 'react';

const CalendarIcon = () => {
    const day = new Date().getDate();
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">{day}</text>
        </svg>
    );
};

export default CalendarIcon;
