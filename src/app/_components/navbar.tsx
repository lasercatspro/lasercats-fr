'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function classNames (...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

function ModeToggle (): JSX.Element {
  function disableTransitionsTemporarily (): void {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode (): void {
    disableTransitionsTemporarily()

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    console.log(darkModeMediaQuery, window.localStorage.isDarkMode)
    const isSystemDarkMode = darkModeMediaQuery.matches
    const isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="h-[40px] my-auto px-3 py-2 transition rounded-full shadow-lg group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

export const Navbar = (): ReactNode => {
  const navigation = [
    { name: 'Projets', href: '/projets', current: false },
    { name: 'Articles', href: '/articles', current: false }
  ]
  const [actualNav, setActualNav] = useState<any>(null)
  const path = usePathname()
  useEffect(() => {
    const actual = navigation.find(n => n.href === path)
    if (actual != null) {
      setActualNav(actual?.name)
    }
  }, [path])
  return (
    <Disclosure as="nav" className="z-50 bg-custom-dark dark:border-b-2 fixed top-0 left-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open
                      ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        )
                      : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
                </div>
                <Link className="flex flex-shrink-0 items-center" href={'/'}>
                  <img
                    className="h-8 w-auto"
                    src="/assets/images/svg/logo-green.svg"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${actualNav === item.name
                          ? '!text-primary bg-white'
                          : 'text-white hover:text-primary'} 
                          rounded-md px-3 py-2 font-bold'`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            <ModeToggle />
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    actualNav === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
