import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import {  CogIcon, CubeTransparentIcon, HomeIcon, AcademicCapIcon, UsersIcon, FolderIcon, ChatAltIcon, OfficeBuildingIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import { UserCircleIcon} from '@heroicons/react/solid'
import Card from './Card'
import Selector from './Selector'


const option = [
  { 
    name: 'Dashboard', 
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Knowledge',
    href: '/',
    icon: AcademicCapIcon,
  },
  { name: 'Members', 
  href: '/', 
  icon: UsersIcon },
  {
    name: 'Teams',
    href: '/',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Vault',
    href: '/',
    icon: FolderIcon,
  },
  {
    name: 'Chat',
    href: '/',
    icon: ChatAltIcon,
  },
  {
    name: 'Settings',
    href: '/',
    icon: CogIcon,
  },
  {
    name: 'Company',
    href: '/',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'My Profile',
    href: '/',
    icon: UserCircleIcon,
  }
]
const sortOptions = [
  { name: 'All', href: '/', current: true },
  { name: 'Live', href: '/', current: false },
  { name: 'Draft', href: '/', current: false },
  { name: 'Archieved', href: '/', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Homepage() {
  return (
    <div className="select-none">
        <main className="mx-auto">
          <section aria-labelledby="products-heading">
            <div className="flex gap-y-10">
              {/* SideBar */}
              <div className="hidden lg:block pl-10 pr-12 border-r-4 border-blue-400 bg-black">
              <div className='flex flex-col pb-4  h-screen justify-between'>
                <nav className="grid pt-8 gap-y-6">
                {/* Logo */}
                <img
                className="h-8 w-full"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
              />
              {/* Options 1 to 6 */}
                  {option.slice(0,6).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 pr-10 flex items-center hover:bg-gray-800"
                    >
                      <item.icon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
                      <span className="ml-4 text-sm font-medium uppercase text-white">{item.name}</span>
                    </Link>
                  ))}
                </nav>
                {/* Last 3 Options */}
                <nav className="grid pt-8 gap-y-6">
                  {option.slice(6,9).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 pr-10 flex items-center hover:bg-gray-800"
                    >
                      <item.icon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
                      <span className="ml-4 text-sm font-medium uppercase text-white">{item.name}</span>
                    </Link>
                  ))}
                  {/* Powered By */}
                  <div className='flex pt-3 px-2 -mx-8 border-t border-white'>
                    <p className='text-white text-xs'>Powered By</p>
                <img
                className="h-6 pl-2"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
              />
              </div>
                </nav>
                </div>
              </div>
              {/* Content */}
              <div className="bg-gray-100">
                <div className="h-full">
                <div className="w-full mx-auto px-4 bg-white sm:px-6 lg:px-10 py-4 shadow">
          <div className="relative z-10 flex items-baseline justify-between">
              <div>
              <p className="w-full pr-6 font-bold text-lg uppercase">Knowledge</p>
              </div>
            <div className="flex items-center">
            <a href='/' className="w-full p-1 px-2 border-2 border-black text-white font-medium text-lg bg-blue-400 uppercase cursor-pointer">Create Course</a>
            {/* Profile Pic */}
            <div className="ml-3 flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
              <Menu as="div" className="relative inline-block text-left">
                {({open})=>(
                  <>
              <Menu.Button
                className="p-2 text-black"
              >
                <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
              </Menu.Button>
                {open && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-1 mt-3 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {/* Options */}
                    <div className="py-1">
                      {option.map((options) => (
                        <Menu.Item key={options.name}>
                          {({ active }) => (
                            <Link
                              to={options.href}
                              className={classNames(
                                options.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {options.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
                )}
                </>
                )}
              </Menu>
            </div>
          </div>
          </div>
          <div className='h-90 overflow-y-scroll'>
          <div className="w-full mx-auto px-8 sm:px-6 lg:px-10 py-6">
          <div className="relative flex-row-reverse md:flex-row z-10 flex items-baseline justify-between">
              {/* Sort Options like All Live */}
              <div>
              {sortOptions.map((options) => (
              <a href={options.href} key={options.name} className="w-full pr-3 md:pr-6 text-xs md:text-base hover:underline uppercase">{options.name}</a>
              ))}
              </div>
            <div className="flex items-center">
              {/* Select Item */}
              <Selector/>
            </div>
          </div>
          </div>
          {/* Cards and Grid */}
                <Card/>
                </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}
