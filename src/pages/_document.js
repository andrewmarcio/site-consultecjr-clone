
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocuments extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/images/about-me.png"/>
                    
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
                    {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@400;500;600&display=swap" rel="stylesheet" /> */}
                    <title>Consultec Jr</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}