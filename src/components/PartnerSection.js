import React from 'react';
import './PartnerSection.css';

const PartnerSection = () => {
    return (
        <div className='partner-outer-cont'>
            <div className="partner-section">
                <div className="partner-container">
                    <span className="partner-logo" >The Washington Post</span>
                    <span className="partner-logo" >TechCrunch</span>
                    <span className="partner-logo" >Bloomberg</span>
                    <span className="partner-logo" >Gizmodo</span>
                    {/* <img src="/techcrunch.png" alt="TechCrunch" className="partner-logo" />
        <img src="/bloomberg.png" alt="Bloomberg" className="partner-logo" />
        <img src="/gizmodo.png" alt="Gizmodo" className="partner-logo" /> */}
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
