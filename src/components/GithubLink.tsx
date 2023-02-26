import React from 'react';
import Link from './Link';

const GithubLink = ({ id }: { id?: string }) => {
    return id ? (
        <div className="link">
            <i className="fa-brands fa-github"></i>
            <Link name={'github.com/' + id} url={'https://github.com/' + id} />
        </div>
    ) : null;
};

export default GithubLink;
