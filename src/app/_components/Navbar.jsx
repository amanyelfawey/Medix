
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


function Navbar() {
    const Menu =[
    {
        id:1,
        name:'Home',
        path:'/#home'
    },
    {
        id:2,
        
        name:'Our Departments',
        path:'/#Dep'
    },
    {
        id:3,
        
        name:'Our Doctors',
        path:'/#OurDr'
    },
    {
        id:4,
        name:'Services',
        path:'/#services'
    },
    {
        id:5,
        
        name:'About Us',
        path:'/#about'
    },
    {
        id:6,
        name:'Contact Us',
        path:'/#contact'
    }
]
  return (
    <div className='container flex items-center text-center justify-center  pl-8 pr-8 p-2 bg-gray-100  bg-opacity-25 shadow-lg rounded-lg ' id="header">
        <div className='container flex items-center gap-10'>
        <Link href={"http://localhost:3000"}><Image src='/Logo.png' alt='logo'
        width={160} height={80}/></Link>
        <ul className='md:flex gap-10 hidden pl-20' >
        {Menu.map((item,index)=>(
            <Link href={item.path}>
                <li className=' text-primary  hover:text-secondary cursor-pointer hover:scale-105 transition-all ease-in-out text-lg text-center
                '>{item.name}</li>
            
            </Link>

        ))}
        </ul>
        </div>
        <Link href={"http://localhost:3000/Signup"}><Button className='rounded text-white hover:bg-secondary' >Sign Up</Button></Link>
        {/* <p className='px-3 text-primary'> | </p> */}

        <Link href={"http://localhost:3000/Login"}><Button className='rounded text-white bg-secondary hover:bg-primary mx-3' >Log In</Button></Link>

        
    </div>
    
  )
}

export default Navbar;