import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">My Portfolio</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
                <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
            </div>
        </nav>
    )
}

export default Nav