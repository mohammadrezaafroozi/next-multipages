import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className='border-y-orange-800 text-7xl'>wlc to extra page</div>

            <ul>
                <li><Link href='./..'>home</Link></li>
                <li><Link href='./'>about</Link></li>
                <li><Link href='#'> extra</Link></li>
            </ul>
        </>
    )
}
