import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'NFTY'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="NFTY tools for your NFTs"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/d36e6b2199.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}