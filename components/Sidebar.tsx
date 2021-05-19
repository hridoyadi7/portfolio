import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import React from 'react'
import {useTheme} from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {

    const {theme,setTheme}=useTheme();

    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    };

    return (
        <div>
            <Image 
                src='https://raw.githubusercontent.com/hridoyadi7/First-website-using-CSS3/master/sourav.png'
                alt='user avatar'
                className="mx-auto rounded-full"
                height="128"
                width="128"
                layout="intrinsic"
                quality="100"
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className="text-green">Sourav </span>
                Adhikari
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="https://docs.google.com/uc?export=download&id=1GJMmEtM_Zw_taUlWSgoldoSaVQSf-F2-" download='https://docs.google.com/uc?export=download&id=1GJMmEtM_Zw_taUlWSgoldoSaVQSf-F2-'><GiTie className="w-6 h-6"/>Download Resume</a>
            {/* //Social icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="https://www.linkedin.com/in/sourav-adhikari-987a85190/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://github.com/hridoyadi7">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            {/* //Address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
            style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span>Kolkata,India</span>
                </div>
                <p className="my-2">hridoyadi7@gmail.com</p>
                <p className="my-2">8777742167/9874029584</p>
            </div>
            {/* Email Button */}
            <button className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-t from-green to-blue-400 focus:outline-none"
            onClick={()=>window.open("mailto:souravadi27@gmail.com")} 
            >Email me</button>
            <button 
            onClick={changeTheme}
            className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer focus:outline-none bg-gradient-to-t from-green to-blue-400">Toggle Theme</button>
        </div>
    )
}

export default Sidebar

// src='https://raw.githubusercontent.com/hridoyadi7/First-website-using-CSS3/master/sourav.png'
