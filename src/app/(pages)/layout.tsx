'use client'

import '@/app/styles/pages.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { labelFromPathname } from '@/app/lib/utils';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  return (
  <>
          <header>
          <Link className='back' href='/'>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.1368 7.87725L14.6475 25.8187C14.3404 26.1339 14.1685 26.5565 14.1685 26.9966C14.1685 27.4367 14.3404 27.8594 14.6475 28.1745L32.1368 46.1227C32.2799 46.2697 32.451 46.3865 32.6399 46.4663C32.8289 46.546 33.0319 46.5871 33.237 46.5871C33.4422 46.5871 33.6452 46.546 33.8342 46.4663C34.0231 46.3865 34.1942 46.2697 34.3373 46.1227C34.6317 45.8214 34.7965 45.4168 34.7965 44.9955C34.7965 44.5742 34.6317 44.1696 34.3373 43.8682L17.8909 26.9966L34.3373 10.1284C34.6307 9.82715 34.7948 9.42329 34.7948 9.00281C34.7948 8.58233 34.6307 8.17847 34.3373 7.87725C34.1942 7.73029 34.0231 7.61348 33.8342 7.53373C33.6452 7.45397 33.4422 7.41288 33.237 7.41288C33.0319 7.41288 32.8289 7.45397 32.6399 7.53373C32.451 7.61348 32.2799 7.73029 32.1368 7.87725Z" />
            </svg>
            Back to homepage
          </Link>
          <Image src='/logo.png' width='57' height='71' alt='logo'/>
          </header>

          <h1>{labelFromPathname(pathname)}</h1>
          {children}
  </>)
}
