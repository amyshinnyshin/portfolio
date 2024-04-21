import React from 'react';
import './AssetShowcase.css'

// First component
const AssetsOnRight = () => {
    return (
        <div className='assets-container'>
            <div className='assets-reason-container'>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
            </div>
            <img className='asset' src='/images/harvest/feature-prioritization.png' alt=''/>
        </div>
    );
};

// Second component
const AssetsOnLeft = () => {
    return (
        <div className='assets-container'>
            <img className='asset' src='/images/harvest/feature-prioritization.png' alt=''/>
            <div className='assets-reason-container'>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
                <div className='reason'>
                    <p className='medium'>1.</p>
                        <div className='reason-group'>
                            <p className='medium'>Local Meal Kits</p>
                            <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

// Export both components
export { AssetsOnRight, AssetsOnLeft };

