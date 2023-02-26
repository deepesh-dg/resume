import { getDuration } from '@/helpers/getDuration';
import { ISectionInfo } from '@/IResumeDetails';
import React from 'react';
import Link from './Link';

const Section = ({ section }: { section: ISectionInfo }) => {
    return (
        <>
            <h2>{section.title}</h2>
            <ul className="list">
                {section.content.map((content, i) => (
                    <li className="list-item" key={i}>
                        <div className="content">
                            <div className="header">
                                <Link name={content.name} url={content.url} />
                                {content.source && <>&nbsp;|&nbsp;{content.source}</>}
                            </div>
                            <div className="body">
                                {content.description}
                                {content.list.length > 0 && (
                                    <ul>
                                        {content.list.map((list, i) => (
                                            <li key={i}>{list}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="duration">{getDuration(content.from, content.to)}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Section;
