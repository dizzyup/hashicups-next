import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Orders from '/components/Orders'

export default function Header() {
  const [ordersVisible, setOrdersVisible] = useState(false);
  
  const showOrders = async (event) => {
    setOrdersVisible(true);
  };
  
  return (
    <>
      <Head>
        <title>HashiCups - Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="relative z-20 flex flex-col items-center justify-center bg-white dark:bg-black/50 shadow-mid dark:shadow-highlight h-[120px] xs:h-[164px]">
        <div className="relative flex items-center justify-between max-w-[1080px] w-full">
          <div className="flex-1 px-8"></div>
          <Link href="/">
            <a className="flex cursor-pointer">
              <Image src="/images/logo.svg" height={98} width={98} className="scale-[0.85] xs:scale-100" />
            </a>
          </Link>
          <div className="flex items-center justify-end flex-1 px-8 dark:invert">
            <button onClick={showOrders} className="flex items-center space-x-2 opacity-75 hover:opacity-100 transition duration-500 ease-in-out">
              <span className="flex flex-shrink-0">
                <Image src="/images/orders.svg" height={33} width={45} />
              </span>
              <span className="hidden xs:block text-sm tracking-widest uppercase pt-px">Orders</span>
            </button>
          </div>
        </div>
        <div className="absolute left-0 top-0">
          <Image src="/images/demo.svg" height={88} width={88} />
        </div>
      </header>
      
      <Orders ordersVisible={ordersVisible} setOrdersVisible={setOrdersVisible} />
    </>
  )
}
