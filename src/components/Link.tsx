import React from 'react';

export type Props = {
    name: string;
    url?: string;
};

const Link = ({ name, url }: Props) => {
    if (url)
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="link">
                {name}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        );

    return <>{name}</>;
};

export default Link;
