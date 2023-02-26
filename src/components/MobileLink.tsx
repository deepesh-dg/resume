import React from 'react';
import Link from './Link';

const MobileLink = ({ mobile }: { mobile?: string }) => {
    return mobile ? (
        <div className="link">
            <i className="fa-solid fa-square-phone"></i>
            <Link name={'+91-' + mobile} url={'tel:' + mobile} />
        </div>
    ) : null;
};

export default MobileLink;
