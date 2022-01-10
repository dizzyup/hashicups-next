import Image from 'next/image'

export default function Radio(props) {
  
  return (
    <li className="relative">
      <label htmlFor={props.id} className={`${props.isChecked ? 'bg-white text-black/100 shadow-highest' : 'bg-gray-50 hover:bg-white text-black/75 shadow-stroke'} flex items-center justify-center space-x-3 h-[68px] rounded-lg cursor-pointer transition duration-500 ease-in-out`}>
        <Image src={`/images/${props.id}.svg`} width={40} height={28} />
        <span className="hidden xs:block">{props.label}</span>
      </label>
      <input type="radio" id={props.id} name="card" value={props.value} readOnly checked={props.isChecked} className="absolute top-0 left-0 opacity-0 pointer-events-none" />
    </li>
  )
}
