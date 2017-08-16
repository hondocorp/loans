import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Auto Loan Calculator</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="Content-Language" content="en" />
    </Head>
    <style jsx global>{`
      body {
        background: #ffffff;
        font-size: 125%;
        color: #202020;
      }

      hr {
        border: none;
        background: none;
        height: 0;
        border-top: 2px solid #e5e5e5;
        margin: 3rem 0;
      }

      .c {
        display: flex;
        flex-direction: column;
        max-width: 70rem;
        margin: 0 auto;
        padding: 2rem;
      }

      @media (min-width: 960px) {
        .c {
          flex-direction: row;
        }
      }

      .b {
        max-width: 70rem;
        margin: 0 auto;
        padding: 2rem;
      }
    `}</style>
    {props.children}
  </div>
)

export default Layout
