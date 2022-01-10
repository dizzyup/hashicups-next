import Link from 'next/link'
import Image from 'next/image'

import InfoIcon from '@hashicorp/flight-icons/svg/info-16.svg'
import DocsIcon from '@hashicorp/flight-icons/svg/docs-link-16.svg'
import LearnIcon from '@hashicorp/flight-icons/svg/learn-link-16.svg'
import GitHubIcon from '@hashicorp/flight-icons/svg/github-16.svg'
import GlobeIcon from '@hashicorp/flight-icons/svg/globe-16.svg'

export default function Footer() {
  
  return (
    <footer className="flex flex-col items-center justify-center w-full px-8 bg-white/50 shadow-low">
      <aside className="grid xl:grid-cols-2 gap-8 xl:gap-12 max-w-[1080px] w-full py-12">
        <div className="flex flex-col justify-center px-8 py-6 bg-white rounded-xl shadow-high space-y-4">
          <h4 className="flex items-center space-x-2 font-medium text-sm">
            <Image src={InfoIcon} className="opacity-75" />
            <span>What is HashiCups?</span>
          </h4>
          <p className="text-sm">HashiCups is a demo app for the HashiCorp stack. If you're seeing this page, your demo is up and running!</p>
        </div>
        <div className="bg-white rounded-xl shadow-high space-y-2 overflow-hidden">
          <ul className="flex flex-col md:flex-row xl:grid gap-px grid-cols-2 grid-rows-2 text-sm bg-gray-100">
            <li className="flex flex-auto">
              <Link href="#">
                <a className="flex items-center space-x-2 flex-1 px-8 py-6 bg-white hover:bg-gray-50 transition ease-in-out">
                  <span className="flex items-center opacity-75 flex-shrink-0"><Image src={LearnIcon} /></span>
                  <span>Visit HashiCups on Learn</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-auto">
              <Link href="#">
                <a className="flex items-center space-x-2 flex-1 px-8 py-6 bg-white hover:bg-gray-50 transition ease-in-out">
                  <span className="flex items-center opacity-75 flex-shrink-0"><Image src={GitHubIcon} /></span>
                  <span>Browse on GitHub</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-auto">
              <Link href="#">
                <a className="flex items-center space-x-2 flex-1 px-8 py-6 bg-white hover:bg-gray-50 transition ease-in-out">
                  <span className="flex items-center opacity-75 flex-shrink-0"><Image src={DocsIcon} /></span>
                  <span>Visit HashiCups Docs</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-auto">
              <Link href="#">
                <a className="flex items-center space-x-2 flex-1 px-8 py-6 bg-white hover:bg-gray-50 transition ease-in-out">
                  <span className="flex items-center opacity-75 flex-shrink-0"><Image src={GlobeIcon} /></span>
                  <span>Visit HashiCorp.com</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex items-center justify-center w-screen bg-gray-200/50 py-6">
        <p className="text-sm text-black/75">{Copyright()}</p>
      </div>
    </footer>
  )
}

function Copyright() {
  let newDate = new Date()
  let year = newDate.getFullYear();
  
  return `© ${year} HashiCorp`
}