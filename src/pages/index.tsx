import Academics from '@/components/Academics';
import GithubLink from '@/components/GithubLink';
import Link from '@/components/Link';
import LinkedinLink from '@/components/LinkedinLink';
import MailLink from '@/components/MailLink';
import MobileLink from '@/components/MobileLink';
import NpmLink from '@/components/NpmLink';
import Section from '@/components/Section';
import WebsiteLink from '@/components/WebsiteLink';
import { getDuration } from '@/helpers/getDuration';
import resumeDetails from '@/resumeDetails';
import Head from 'next/head';

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
                                    <MailLink mailId={resumeDetails.socialLinks.mailId} />
                                    <MobileLink mobile={resumeDetails.socialLinks.mobile?.toString()} />
                                    <WebsiteLink website={resumeDetails.socialLinks.website} />
                                    <LinkedinLink id={resumeDetails.socialLinks.linkedin} />
                                    <GithubLink id={resumeDetails.socialLinks.github} />
                                    <NpmLink id={resumeDetails.socialLinks.npm} />
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
                                <Academics title="education" academics={resumeDetails.educationInfo} />
                                <Academics title="certifications" academics={resumeDetails.certifications} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="mainInfo h-100">
                                {resumeDetails.sectionInfo.map((section, index) => (
                                    <Section key={index} section={section} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
