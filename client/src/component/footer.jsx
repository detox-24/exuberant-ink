import React from 'react'
import { Footer } from 'flowbite-react'

export default function footer() {
  return (
    <Footer
    container className='border border-t-8'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
                  <div className=''>
                  <Footer.Title title = 'About' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='#' target='blank' rel='noopener noreferrer'>About Us</Footer.Link>
                    <Footer.Link href='#'>Contact Us</Footer.Link>
                    <Footer.Link href='#'>FAQ</Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                  <div className=''>
                  <Footer.Title title = 'Follow Us' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='https://www.instagram.com/exuberant_ink/' target='blank' rel='noopener noreferrer'>Instagram</Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='flex justify-left'>
              <Footer.Copyright href='#'
              by='Exuberant Ink'
              year={new Date().getFullYear()}/>
            </div>
        </div>
    </Footer>
  )
}
