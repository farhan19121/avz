import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Confessions from '../confessions/confessions';



export default function Header() {
    const [pwd,setPwd] =useState("")
    const [check, setCheck]=useState(false);
    

    const text_transform = (e)=> {
        setPwd(e.target.value);
        console.log(pwd );
        console.log(check)
    }
     const pwdCheck=()=>{

        if(pwd==="19121"){
            setCheck(true)
            console.log(check)
        }
    }
    console.log(check)

    
    return (
        <>
            <div className=' w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-100'>

                

                <div className='pt-48'>
                    
                    <form class="max-w-lg  mx-auto ">
                    <h1 class="mb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">  <span class="text-blue-600 dark:text-blue-500">ASATI</span> acrhive.</h1>
                
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">enter password, double tap and scroll </label>
                            <input type="password" onChange={text_transform} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                            </input>
                        </div>

                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" value={pwd} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                                </input>
                            </div>
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree that <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Farhan khan is a cutie</a></label>
                        </div>
                        
                        <button onClick={pwdCheck} type="submit" ><Link
                            to={`${check? '/footer':'' }`}
                            className="text-gray-800 hover:bg-gray-50 bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >login</Link></button>

                        

                    </form>
                </div>

            </div>
        </>
    );
}