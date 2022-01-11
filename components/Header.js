import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  
  return (
    <>
      <Head>
        <title>HashiCups - Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="relative z-20 flex flex-col items-center justify-center bg-white dark:bg-black/50 shadow-mid dark:shadow-highlight h-[164px]">
        <Link href="/">
          <a className="cursor-pointer">
            <Image src="/images/logo.svg" height={98} width={98} />
          </a>
        </Link>
        <div className="absolute left-0 top-0">
          <Image src="/images/demo.svg" height={88} width={88} />
        </div>
      </header>
    </>
  )
}
