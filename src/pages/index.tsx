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
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '100vh',
                    }}
                >
                    <iframe
                        src="/Deepesh_Gupta_Resume.pdf"
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
            </main>
        </>
    );
}
