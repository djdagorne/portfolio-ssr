import Document, { Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="Dexter Dagorne's Portfolio Website, get to know Dexter and see some of his latest creations!"
          />
          <meta
            name="keywords"
            content="Javascript, HTML, CSS, JS, React, ReactJS, jQuery, PostgreSQL, database, Express, framework, web development, development, front-end, back-end, frontend, backend, full-stack, fullstack, SEO, JWT, Bootstrap, Tennit, CONCERTFINDER, Dexter, Dagorne"
          />
          <meta name="author" content="Dexter Dagorne" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="./favicon/site.webmanifest" />
          <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900|Lato:400,900|Raleway:300,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
