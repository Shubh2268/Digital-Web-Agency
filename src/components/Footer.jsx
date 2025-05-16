import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='py-12 px-6 mt-10'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
                
                <div>
                    <h1 className='text-2xl font-bold mb-3'>Digitra</h1>
                    <p className='text-sm text-gray-600'>Empowering your digital presence with modern solutions and strategic innovation.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
                    <ul className='space-y-2 text-sm text-gray-600'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className='text-lg font-semibold mb-3'>Contact</h3>
                    <p className='text-sm text-gray-600'>email@digitra.com</p>
                    <p className='text-sm text-gray-600 mt-1'>+91 12345 67890</p>
                </div>

                {/* Social Links */}
                    <div className='flex items-center gap-4'>
                        <a href='#'><FaFacebook className='text-gray-600' /></a>
                        <a href='#'><FaInstagram className='text-gray-600' /></a>
                        <a href='#'><FaXTwitter className='text-gray-600' /></a>
                        <a href='#'><FaLinkedin className='text-gray-600' /></a>
                       
                    </div>
            </div>

            <div className='mt-10 text-center text-sm text-gray-600'>
                © {new Date().getFullYear()} Digitra. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
