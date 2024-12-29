'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Course', href: '#' },
  { name: 'Get Started', href: '#' },
]

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mt-20 inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 to- black animate-gradient-xy fixed top-0 left-0 w-full z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
          <div className="flex lg:flex-1">
            <span className='text-[1.7em] font-semibold text-blue-200'>Code<span className="text-[#e45f2b]">Latent</span></span>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" font-semibold text-xl text-blue-200">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-blue-200">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
            <div className="flex items-center justify-between text-blue-200">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Code Latent</span>
                <img
                alt="Logo"
                src="code-lint-jpg-logo.jpg"
                className="h-10 rounded-lg w-auto"
              />    
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-blue-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-2xl px-3 py-2 text-base/7 font-semibold text-blue-200 hover:border-blue-200 hover:border-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-blue-200 hover:bg-black-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w h-auto flex flex-col items-centerjustify-around md:flex-row gap-20 mt-20">
          
          <div className="text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Privacy Policy
            </span>
          </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-justify md:tex-2xl text-blue-200 mb-8 max-w-2xl animate-fade-in">
            At Code Latent, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you participate in our 7-day bootcamp on Data Structures and Algorithms (DSA) in Java and any subsequent paid courses
            </p>

          </div>
          <div className='flex items-center justify-center h-auto max-w-2xl text-blue-200'>
            <img src="Mobile encryption-amico.svg" alt="" className=' md:w-[800px] md:h-[500px] h-auto w-auto' />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        >
        </div>
      </div>
    </div>
  )
}
