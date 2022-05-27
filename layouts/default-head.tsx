import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'

export function DefaultHead() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src *;
                        img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                        style-src  'self' 'unsafe-inline' *"
        ></meta>
        <meta
          name="keywords"
          content="caash, dapp, decentralized app, caashv1, caashv2"
        />
        <meta name="image" content="images/image-seo.png" />
        <meta
          name="description"
          content="Caash is a decentralized app ecosystem pushing self-crypto custody forward. We want crypto to be fast, fun, and easy-to-use so that's why we're building solutions like Caash Me, which helps people recognize they're sending you funds, and Caash Swap, which allows for an instant, permission-less trading experience."
        />
        <link rel="icon" type="image/png" href={'/favicon.png'} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  )
}
