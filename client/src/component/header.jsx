import { Button, Navbar, NavbarToggle } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
export default function header() {
  const path = useLocation().pathname;
  return (
    <Navbar className = 'border-b-2'>
      <Link to = "/" className='self-center whitespace-nowrap text-sm:text-xl font-semibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-white via-blue-300 to-blue-700'>
        The Write Side Up
        </span>
        </Link>
          <Navbar.Collapse>
            <Navbar.Link active = {path == '/'} >
              <Link to = '/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active = {path == '/about'} >
              <Link to = '/about'>
                About
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
        <div className='flex gap-4'>
          <Button className='w-12 h-10' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to = '/subscribe'>
            <Button className=' hidden sm:inline' color='dark'  >
              Subscribe
            </Button>
          </Link>
          <Link to = '/signin'>
            <Button className = 'hidden sm:inline' color = 'dark'>
              Sign in
            </Button>
          </Link>
          </div>
          <NavbarToggle/>
          </Navbar>
  )
}
