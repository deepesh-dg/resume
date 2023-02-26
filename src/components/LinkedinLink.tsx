import React from 'react';
import Link from './Link';

const LinkedinLink = ({ id }: { id?: string }) => {
    return id ? (
        <div className="link">
            <i className="fa-brands fa-linkedin"></i>
            <Link name={'linkedin.com/in/' + id} url={'https://linkedin.com/in/' + id} />
        </div>
    ) : null;
};

export default LinkedinLink;
