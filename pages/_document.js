import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Crimson+Text&family=Open+Sans:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
