import { useEffect } from 'react'
import Image from 'next/image'

import ChevronsIcon from '@hashicorp/flight-icons/svg/chevrons-right-24.svg'

export default function PayButton(props) {
    
  const handleClick = async (event) => {
    props.setPaymentFormIsVisible(true);
  };
  
  return (
    <button className="relative flex items-center justify-between w-full h-[72px] px-8 text-left bg-gray-700 hover:bg-gray-800 text-white rounded-lg group transition duration-500 ease-in-out overflow-hidden" onClick={handleClick}>
      <span className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 shimmer"></span>
      <span className="uppercase tracking-widest text-lg">Purchase now</span>
      <span className="flex items-center invert opacity-75 group-hover:opacity-100 group-hover:translate-x-[8px] transition duration-500 ease-in-out">
        <Image src={ChevronsIcon} />
      </span>
    </button>
  )
}
