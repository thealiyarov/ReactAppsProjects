import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout({books}) {
  return (
    <div className='w-[100%]   '>
        <Navbar books={books}/>
    <Outlet/>

    </div>
  )
}

export default Layout