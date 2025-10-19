import React from 'react';

// Fix: Replaced placeholder content with a functional React component to resolve module loading errors.
// This component renders an SVG icon for "HybridSim".
const HybridSimIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 8H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 16H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 16H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export default HybridSimIcon;