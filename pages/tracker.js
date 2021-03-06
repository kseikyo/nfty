import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import GlobalContext from '../context/global'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tracker() {
  const global = useContext(GlobalContext)

  return (
    <Layout>
      <Head>
        <title>Tracker</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <div className="pb-32 bg-green-600">
          <Disclosure as="nav" className="bg-green-600 border-b border-green-300 border-opacity-25 lg:border-none">
            {({ open }) => (
              <>
                <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                  <div className="relative flex items-center justify-between h-16 lg:border-b lg:border-green-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        <p className="text-4xl text-center text-white"><i className="fa-duotone fa-poo-storm"></i></p>
                      </div>
                      <div className="hidden lg:block lg:ml-10">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-green-700 text-white'
                                  : 'text-white hover:bg-green-500 hover:bg-opacity-75',
                                'rounded-md py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-green-200 bg-green-600 rounded-md hover:text-white hover:bg-green-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 p-1 text-green-200 bg-green-600 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="w-6 h-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative flex-shrink-0 ml-3">
                          <div>
                            <Menu.Button className="flex text-sm text-white bg-green-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block py-2 px-4 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-green-700 text-white'
                            : 'text-white hover:bg-green-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-green-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">{user.name}</div>
                        <div className="text-sm font-medium text-green-300">{user.email}</div>
                      </div>
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-green-200 bg-green-600 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="px-2 mt-3 space-y-1">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-green-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Dashboard {global.address}</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                          >
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="w-10 h-10 rounded-full" src={person.image} alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.title}</div>
                              <div className="text-sm text-gray-500">{person.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{person.role}</td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


            {/* /End replace */}
          </div>
        </main>
      </div>
    </Layout>
  )
}