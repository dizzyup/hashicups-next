import { useEffect } from 'react'
import Image from 'next/image'

import ChevronsIcon from '@hashicorp/flight-icons/svg/chevrons-right-24.svg'

export default function PayButton(props) {
    
  const handleClick = async (event) => {
    props.setPaymentFormIsVisible(true);
  };
  
  return (
    <button className="flex items-center justify-between w-full h-[72px] px-8 text-left bg-gray-700 hover:bg-gray-800 text-white rounded-lg group transition duration-500 ease-in-out" onClick={handleClick}>
      <span className="uppercase tracking-widest text-lg">Purchase now</span>
      <span className="flex items-center invert opacity-75 group-hover:opacity-100 group-hover:translate-x-[8px] transition duration-500 ease-in-out">
        <Image src={ChevronsIcon} />
      </span>
    </button>
  )
}
