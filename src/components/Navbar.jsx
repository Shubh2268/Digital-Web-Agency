import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ['home', 'about us', 'services', 'blog'];

    return (
        <header className='w-full fixed top-0 left-0 z-50 bg-white shadow-sm'>
            <div className='mx-auto px-4 md:px-8 flex items-center justify-between h-16'>
               
                <div className='text-2xl font-bold text-[#1090CB]'>Digitra</div>

                {/* Desktop Nav */}
                <nav className='hidden md:flex space-x-8 items-center'>
                    {navLinks.map((link) => (
                        <a key={link} href={link} className='text-gray-700 font-medium transition capitalize'>{link}</a>
                    ))}
                    <a href='#contact' className='px-5 py-2 bg-[#1090CB] text-white font-medium rounded-md transition'>Contact Us</a>
                </nav>

                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white shadow-md text-center px-4 pb-4'>
                    {navLinks.map((link) => (
                        <a key={link} href={link} className='block py-2 text-gray-700 font-medium transition capitalize'>{link}</a>
                    ))}
                    <a href='#contact' className='mt-2 inline-block w-fit text-center px-4 py-2 bg-[#1090CB] text-white rounded-md transition capitalize'>contact us</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
