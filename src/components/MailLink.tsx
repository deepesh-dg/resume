import React from 'react';
import Link from './Link';

const MailLink = ({ mailId }: { mailId?: string }) => {
    return mailId ? (
        <div className="link">
            <i className="fa-solid fa-envelope"></i>
            <Link name={mailId} url={'mailto:' + mailId} />
        </div>
    ) : null;
};

export default MailLink;
