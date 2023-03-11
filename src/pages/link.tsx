import React from 'react';

const link = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minHeight: '100vh',
            }}
        >
            <iframe
                src="https://res.cloudinary.com/deepeshgupta/image/upload/v1678526145/deepeshgupta/Deepesh_Gupta_Resume_m9bsml.pdf"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    left: '0',
                    bottom: '0',
                }}
            ></iframe>
        </div>
    );
};

export default link;
