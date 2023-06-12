import React from 'react'
function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-black w-full">

        <nav className="md:flex md:justify-evenly lg:flex lg:justify-evenly">
            <div className="mt-12 mr-30 ml-35 text-center">
                <div className="flex">
            <img src="https://th.bing.com/th/id/OIP.qyT7rkAlpvPKLk89YDrh3wHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="h-10 w-10 border border-white "/>
               <p className="text-white title-font font-medium ml-2 text-1xl"> Treklers</p>
               </div>
               <p className="text-white title-font font-medium ">Visit Help Center</p>
            </div>
        <div className = " mt-10 mr-30 text-center">
        <p className ="title-font font-medium text-white mb-4">Company</p>
        <ul className= "text-center">
        <li className="text-gray-600 hover:text-gray-200"><a href="#">About us</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Our offerings</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Newsroom</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Investors</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Blog</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Careers</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Gift cards</a></li>
        </ul>
        </div>
        <div className = "mt-10 mr-30 text-center">
        <p className ="title-font text-white font-medium mb-4">Products</p>
        <ul className= "text-center">
        <li className="text-gray-600 hover:text-gray-200"><a href="#">Ride</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Drive</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Deliver</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Treklers for Business</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Treklers Freight</a></li>
        </ul>
        </div>
        <div className = "mt-10 mr-30 text-center">
        <p className ="title-font text-white font-medium mb-4">Global citizenship</p>
        <ul className= "text-center">
        <li className="text-gray-600 hover:text-gray-200"><a href="#">Safety</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Diversity and Inclusion</a></li>
            </ul>
        </div>
        <div className = "mt-10 mr-30 text-center" >
        <p className ="title-font text-white font-medium mb-4">Travel</p>
        <ul className= "text-center">
        <li className="text-gray-600 hover:text-gray-200"><a href="#">Airports</a></li>
            <li className="text-gray-600 hover:text-gray-200"><a href="#">Cities</a></li>
            </ul>
        </div>
        </nav>
        <nav className ="flex-wrap md:flex md:justify-end lg:flex lg:justify-end mr-40 mt-20">
        <div className='pb-5 flex'>
        <button><svg class="w-5 h-5 pb-1 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></button>
            <button className="text-white font-medium title-font pr-8 pl-2 pb-2">English</button>
        </div>
        <div className='flex pb-5'>
        <button><img src = "https://static.vecteezy.com/system/resources/previews/000/638/537/original/vector-gps-location-map-pointer-icon.jpg" className = "w-5 h-5 pb-1"/></button>
        <button  className="text-white font-medium title-font pr-8 pl-1 pb-2">Delhi NCR</button>
        </div>
        </nav>
        
        <nav className="  sm:text-center md:flex md:justify-between lg:flex lg:justify-between bg-gray-600">
        <div className = "flex ml-5">
            <a><p className ="pt-8 pb-8 title-font text-white">&copy; 2023 Treklers</p></a>
            <a><p className ="pt-8 pb-8 title-font text-white"> - @Trecklers.com</p></a>
        </div>
        <div className = "flex mr-5">
        <a><p className ="pr-5 pt-8 pb-8 title-font text-white">Privacy</p></a>
            <a><p className ="pr-5 pt-8 pb-8 title-font text-white"> Accessibility</p></a>
            <a><p className ="pr-5 pt-8 pb-8 title-font text-white"> Terms</p></a>
        </div>
        </nav>
        
        </footer>
    )
}

export default Footer