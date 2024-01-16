"use client"
const Navbar = () => {
    return (
        <div>
            <div className="container">
            <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
		<a class="text-3xl font-bold leading-none" href="#">
			Dream Finder
		</a>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Home</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Find Jobs</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">About us</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Services</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Contact</a></li>
		</ul>
		<a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
		<a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
	</nav> 
        </div>
        </div>
    );
};

export default Navbar;