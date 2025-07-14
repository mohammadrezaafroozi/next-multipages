"use client"
import Link from 'next/link'
import './globals.css'
import React, { useState } from 'react'

export default function Main() {
   const [data, setData] = useState("mohammadrezaAfroozi")

  return (
    <>
    <h1 className="bg-amber-700"> wlc to my web page</h1>

    <h2>{data}</h2>
    <p className='bg-blue-600 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam placeat, ab eligendi illum atque.</p>
    <ul>
      <li><Link href='#'>home</Link></li>
      <li><Link href='about'>about</Link></li>
      <li><Link href='about/extra'> extra</Link></li>
    </ul>
    </>
  )
}
