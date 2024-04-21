import React, { useState } from 'react';
import './SubNavItem.css';

const SubNavItem = ({ menuText }) => {
    const unselectedImgURL = '/icons/short-line-unselected.png';
    const hoveredImgURL = '/icons/long-line-hover.png';
    const selectedImgURL = '/icons/long-line-selected.png';

    const [isHovered, setIsHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            className={`sub-nav-item ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img
                src={isSelected ? selectedImgURL : (isHovered ? hoveredImgURL : unselectedImgURL)}
                alt='menu-icon'
                className={`menu-icon ${isSelected ? 'selected' : ''}`}
            />
            <p className={`menu-text ${isSelected ? 'selected' : ''}`}>{menuText}</p>
        </div>
    );
};

export default SubNavItem;
