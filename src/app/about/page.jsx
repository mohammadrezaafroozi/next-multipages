import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='bg-emerald-600 h-10'>this is about page</div>
     <ul>
      <li><Link href='./'>home</Link></li>
      <li><Link href='about'>about</Link></li>
      <li><Link href='about/extra'> extra</Link></li>
    </ul>
    </>
  )
}
