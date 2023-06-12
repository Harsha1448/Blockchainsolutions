import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

export default function Header(props) {

    function DriverLogin(){
        props.setName("Driver Login")
    }

    function EmployerLogin(){
        props.setName("Employer Login")
    }

    return (
        <>
         <header class= "bg-black h-auto w-full">
            <nav class=" ml-10 flex flex-wrap justify-center md:flex justify-between  items-center lg:flex justify-between items-center text-white title-font font-bold py-3">
                <div class=" ml-2  md:flex items-center lg:flex items-center">
                <div >
                    <a class=" text-2xl cursor-pointer ">Treklers</a>
                </div>
                <div>
                   {/*  <menu class="relative ">
                        <button  class= "md:ml-10 lg:ml-10 hover:bg-gray-700 rounded-full py-1 px-4 hidden">Company
                        <ChevronDownIcon class=" inline-block h-6 w-6 ml-3 mt-1" ></ChevronDownIcon></button>
                        <ul class="absolute left-0 rounded-md bg-white ring-1 ring-black shadow-lg ring-opacity-5 text-black text-sm font-light py-3 px-1 w-full ">
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>About us</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>Our offerings</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1  cursor-pointer"><button>How Treklers works</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>Global citizenship</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>newsroom</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>Investor relations</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>Blog</button></li>
                            <li class="hover:rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer"><button>Careers</button></li>
                        </ul>
                    </menu> */}
                    </div>
                    <div class=" ">
                        <button class="md:ml-10 lg:ml-10 hover:bg-gray-700 rounded-full py-1 px-4 ">Safety</button>
                   </div>
                   <div class=" ">
                        <button class="md:ml-10 lg:ml-10 hover:bg-gray-700 rounded-full py-1 px-4 ">Help</button>
                   </div>
                 </div>

                <div class="md:flex justify-center items-center lg:flex justify-center items-center">
                    <div>
                    <button className="md:mr-10 lg:mr-10 inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-white mt-4 md:mt-0"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z" fill="currentColor"></path></svg>
                    <span className='pl-2'>EN</span></button>
                    </div>
                    <div>
                        <button onClick={DriverLogin} class="md:mr-10 lg:mr-10 bg-gray-800 rounded-full px-3 py-1"><Link className='nav-link'>Driver login</Link></button>
                    </div>
                    <div class="py-2 ">
                        <button onClick={EmployerLogin} class="md:mr-10 lg:mr-10  text-black bg-gray-300 rounded-full  py-1 px-4">
                        <a href="/employerdetails">Employer login</a>
                            </button>
                   </div>

                </div>
            </nav>
         </header>
        </>
    )
}
function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}
