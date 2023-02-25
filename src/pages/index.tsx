import resumeDetails from '@/resumeDetails';
import Head from 'next/head';

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDuration = (from?: Date | 'present', to?: Date | 'present'): string => {
    if (typeof from === 'string' && typeof to === 'string') return 'present';

    if (from && !to) {
        if (typeof from !== 'string') return `${month[from.getMonth()]} ${from.getFullYear().toString()}`;

        return from;
    }

    if (!from && to) {
        if (typeof to !== 'string') return `${month[to.getMonth()]} ${to.getFullYear().toString()}`;

        return to;
    }

    if (from && to) {
        if (typeof from === 'string' && typeof to !== 'string')
            return `${from} - ${month[to.getMonth()]} ${to.getFullYear().toString()}`;

        if (typeof from !== 'string' && typeof to === 'string')
            return `${month[from.getMonth()]} ${from.getFullYear().toString()} - ${to}`;

        if (typeof from !== 'string' && typeof to !== 'string') {
            if (from.getTime() === to.getTime())
                return `${month[from.getMonth()]} ${from.getFullYear().toString()}`;

            return `${month[from.getMonth()]} ${from.getFullYear().toString()} - ${month[to.getMonth()]} ${to
                .getFullYear()
                .toString()}`;
        }
    }

    return '';
};

export default function Home() {
    return (
        <>
            <Head>
                <title>Resume | deepeshdg</title>
                <meta name="author" content="Deepesh Gupta" />
                <meta name="description" content="Resume of deepeshdg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="main" className="main">
                <div id="resume" className="contentContainer">
                    <div className="row gx-2">
                        <div className="col-4">
                            <div className="links h-100">
                                <div className="center">
                                    {resumeDetails.socialLinks.mailId && (
                                        <div className="link">
                                            <i className="fa-solid fa-envelope"></i>
                                            <a
                                                target="_blank"
                                                href={'mailto:' + resumeDetails.socialLinks.mailId}
                                            >
                                                {resumeDetails.socialLinks.mailId}
                                            </a>
                                        </div>
                                    )}
                                    {resumeDetails.socialLinks.mobile && (
                                        <div className="link">
                                            <i className="fa-solid fa-square-phone"></i>
                                            <a
                                                target="_blank"
                                                href={'tel:' + resumeDetails.socialLinks.mobile}
                                            >
                                                +91-{resumeDetails.socialLinks.mobile}
                                            </a>
                                        </div>
                                    )}
                                    {resumeDetails.socialLinks.website && (
                                        <div className="link">
                                            <i className="fa-solid fa-globe"></i>
                                            <a target="_blank" href={resumeDetails.socialLinks.website.url}>
                                                {resumeDetails.socialLinks.website.name}
                                            </a>
                                        </div>
                                    )}
                                    {resumeDetails.socialLinks.linkedin && (
                                        <div className="link">
                                            <i className="fa-brands fa-linkedin"></i>
                                            <a
                                                target="_blank"
                                                href={
                                                    'https://linkedin.com/in/' +
                                                    resumeDetails.socialLinks.linkedin
                                                }
                                            >
                                                linkedin.com/in/{resumeDetails.socialLinks.linkedin}
                                            </a>
                                        </div>
                                    )}
                                    {resumeDetails.socialLinks.github && (
                                        <div className="link">
                                            <i className="fa-brands fa-square-github"></i>
                                            <a
                                                target="_blank"
                                                href={
                                                    'https://github.com/' + resumeDetails.socialLinks.github
                                                }
                                            >
                                                github.com/{resumeDetails.socialLinks.github}
                                            </a>
                                        </div>
                                    )}
                                    {resumeDetails.socialLinks.npm && (
                                        <div className="link">
                                            <i className="fa-brands fa-npm"></i>
                                            <a
                                                target="_blank"
                                                href={
                                                    'https://www.npmjs.com/~' + resumeDetails.socialLinks.npm
                                                }
                                            >
                                                npmjs.com/{resumeDetails.socialLinks.npm}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="profile h-100">
                                <div className="heading">
                                    <h1>{resumeDetails.personalInfo.name}</h1>
                                    <h6>{resumeDetails.personalInfo.designation}</h6>
                                </div>
                                <div className="bio">
                                    <p>{resumeDetails.summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-2">
                        <div className="col-4 text-right">
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row gx-2" style={{ marginTop: '-0.5rem' }}>
                        <div className="col-4">
                            <div className="extraInfo h-100">
                                {resumeDetails.skills.length > 0 && (
                                    <div className="skills">
                                        <h2> technical skills</h2>
                                        <ol>
                                            {resumeDetails.skills.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                                {resumeDetails.educationInfo.length > 0 && (
                                    <div className="education">
                                        <h2>education</h2>
                                        <ul className="list">
                                            {resumeDetails.educationInfo.map((item, index) => (
                                                <li key={index} className="list-item">
                                                    <div className="university">{item.university}</div>
                                                    <div className="course">{item.degreeName},</div>
                                                    <div className="duration">
                                                        <>
                                                            {item.from.getFullYear()}&nbsp;-&nbsp;
                                                            {item.to.getFullYear()}
                                                        </>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {resumeDetails.certifications.length > 0 && (
                                    <div className="certifications">
                                        <h2>certifications</h2>
                                        <ul className="list">
                                            {resumeDetails.certifications.map((item, index) => (
                                                <li key={index} className="list-item">
                                                    <div className="university">
                                                        {item.institite.url ? (
                                                            <a target="_blank" href={item.institite.url}>
                                                                {item.institite.name}
                                                            </a>
                                                        ) : (
                                                            item.institite.name
                                                        )}
                                                    </div>
                                                    <div className="course">
                                                        {item.url ? (
                                                            <a target="_blank" href={item.url}>
                                                                {item.name}
                                                            </a>
                                                        ) : (
                                                            item.name
                                                        )}
                                                    </div>
                                                    <div className="duration">
                                                        {getDuration(item.from, item.to)}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="mainInfo h-100">
                                {resumeDetails.sectionInfo.map((section, index) => (
                                    <div key={index}>
                                        <h2>{section.title}</h2>
                                        <ul className="list">
                                            {section.content.map((content, i) => (
                                                <li className="list-item" key={i}>
                                                    <div className="content">
                                                        <div className="header">
                                                            {content.url ? (
                                                                <a
                                                                    href={content.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {content.name}
                                                                </a>
                                                            ) : (
                                                                content.name
                                                            )}
                                                            {content.source && (
                                                                <>&nbsp;|&nbsp;{content.source}</>
                                                            )}
                                                        </div>
                                                        <div className="body">
                                                            {content.description}
                                                            {content.list.length > 0 && (
                                                                <ul>
                                                                    {content.list.map((list, ind) => (
                                                                        <li key={ind}>{list}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="duration">
                                                        {getDuration(content.from, content.to)}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
