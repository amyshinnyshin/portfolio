import React from 'react';
import './AssetShowcase.css'

// First component
const AssetsOnRight = () => {
    return (
        <div className='assets-container'>
            <div className='assets-reason-container'>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>1.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Message Vendor as well as Runnert</p>
                        <p className='small-12px-lc'>Users found it difficult to use the messaging feature for both vendors and runners.</p>
                    </div>
                </div>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>2.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Reward System Breakdown</p>
                        <p className='small-12px-lc'>The reward system was not clear or engaging enough for users.</p>
                    </div>
                </div>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>3.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Accessibility to Create an Account for New Users</p>
                        <p className='small-12px-lc'>Simplify account creation for all user types.</p>
                    </div>
                </div>
                
            </div>
            <img className='asset' src='/images/harvest/usability-results.png' alt='usability-results'/>
        </div>
    );
};

// Second component
const AssetsOnLeft = () => {
    return (
        <div className='assets-container'>
            <img className='asset' src='/images/harvest/feature-prioritization.png' alt='feature-priority'/>
            <div className='assets-reason-container'>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>1.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Local Meal Kits</p>
                        <p className='small-12px-lc'>Enhance the user experience by offering a unique and convenient option of meal kits crafted by local farmers and chefs.</p>
                    </div>
                </div>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>2.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Rewards and Loyalty Program</p>
                        <p className='small-12px-lc'>Frequent shoppers will earn points, discounts, or exclusive perks, fostering a sense of appreciation and incentivizing continued engagement with the app.</p>
                    </div>
                </div>
                <div className='reason'>
                    <div className='width-16px'>
                        <p className='medium'>3.</p>
                    </div>

                    <div className='reason-group'>
                        <p className='medium'>Personalized Suggestions</p>
                        <p className='small-12px-lc'>Tailor the shopping experience to individual dietary needs. Users would receive recommendations aligned with their health-conscious preferences. </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

// Export both components
export { AssetsOnRight, AssetsOnLeft };

