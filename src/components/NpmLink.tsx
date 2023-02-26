import React from 'react';
import Link from './Link';

const NpmLink = ({ id }: { id?: string }) => {
    return id ? (
        <div className="link">
            <i className="fa-brands fa-npm"></i>
            <Link name={'npmjs.com/' + id} url={'https://www.npmjs.com/~' + id} />
        </div>
    ) : null;
};

export default NpmLink;
