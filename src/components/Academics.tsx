import { getDuration } from '@/helpers/getDuration';
import { Academics } from '@/IResumeDetails';
import React from 'react';
import Link from './Link';

const Academics = ({ title, academics }: { title: string; academics: Academics[] }) => {
    if (academics.length === 0) return null;

    return (
        <div className="academics">
            <h2>{title}</h2>
            <ul className="list">
                {academics.map((item, index) => (
                    <li key={index} className="list-item">
                        <div className="university">
                            <Link name={item.institite.name} url={item.institite.url} />
                        </div>
                        <div className="course">
                            <Link name={item.name} url={item.url} />
                        </div>
                        <div className="duration">{getDuration(item.from, item.to)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Academics;
