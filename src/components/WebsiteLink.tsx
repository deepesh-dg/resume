import React from 'react';
import Link from './Link';

const WebsiteLink = ({ website }: { website?: { name: string; url: string } }) => {
    return website ? (
        <div className="link">
            <i className="fa-solid fa-globe"></i>
            <Link name={website.name} url={website.url} />
        </div>
    ) : null;
};

export default WebsiteLink;
