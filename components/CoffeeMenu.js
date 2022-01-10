import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

export default function CoffeeMenu(props) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/get-coffees", fetcher);
  
  return (
    <>
      {props.isHero == true ? (
        <ul className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-0 xs:gap-8 pt-8 pb-16 items-center justify-center">
          {data && data.map((coffee) => (
            <CoffeeMenuItem isInHero={props.isHero} coffee={coffee} key={coffee.id} />
          ))}
        </ul>
      ) : (
        <nav className="relative z-10 flex overflow-scroll items-center justify-center bg-white/50 shadow-low h-[190px]">
          <ul className="flex items-center">
            {data && data.map((coffee) => (
              <CoffeeMenuItem coffee={coffee} key={coffee.id} isActive={props.isActive} />
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

function CoffeeMenuItem(props) {
  const activeState = props.coffee.id == props.isActive
  
  return (
    <>
      {props.isInHero == true ? (
        <li className="flex">
          <Link href={`/coffee/${props.coffee.id}`}>
            <a className="relative flex flex-col items-center group bg-white/0 hover:bg-white/100 hover:shadow-high rounded-xl pb-4 transition ease-in-out duration-500">
              <img className="flex-shrink-0 group-hover:scale-125 transition ease-in-out duration-500" src={`/images/thumbnails${props.coffee.image}`} width={200} height={200} />
              <span className="font-serif text-black/75 text-center">{`${props.coffee.name}`}</span>
            </a>
          </Link>
        </li>
      ) : (
        <li className="flex flex-shrink-0">
          <Link href={`/coffee/${props.coffee.id}`}>
            <a className="relative flex flex-col items-center group">
              <img className={`${activeState ? 'scale-125' : 'scale-100'} flex-shrink-0 group-hover:scale-125 transition ease-in-out duration-500`} src={`/images/thumbnails${props.coffee.image}`} width={120} height={120} />
              <span className="absolute left-1/2 bottom-2 translate-x-[-50%] translate-y-[4px] group-hover:translate-y-0 whitespace-nowrap text-black/75 uppercase text-[10px] tracking-widest text-center bg-gray-50 backdrop-blur-md py-0.5 px-2 shadow-low rounded-full opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 hover:delay-500">{`${props.coffee.name}`}</span>
              <span className={`${activeState ? 'opacity-100 group-hover:translate-y-[8px]' : 'opacity-0'} flex bg-black/75 w-1.5 h-1.5 rounded-full transition duration-300`}></span>
            </a>
          </Link>
        </li>
      )}
    </>
  );
}