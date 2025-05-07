
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Zlogo.svg" />
        <title>GenZBots</title>
        <meta name="description" content="A modern world-class bot application" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
