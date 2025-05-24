import mapImg from '../assets/contact/mapImg.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div>
      {/* Top  */}
      <div className='py-20 lg:py-24 mt-5'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12'>
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-700 mb-4'>Let's Collaborate</h2>
            <p className='text-gray-600 lg:text-lg w-full md:w-4/5'>We're here to help bring your ideas to life with seamless digital solutions tailored for you.</p>

            <div className='mt-10 flex flex-col-reverse md:flex-row items-center'>
              <div className='flex items-center gap-4 md:gap-2 py-1 md:py-0 md:pr-3'>
                <a href='#' className='text-blue-700 p-2 rounded-full shadow-lg shadow-gray-300'><FaFacebookF className='w-3 h-3' /></a>
                <a href='#' className='text-pink-600 p-2 rounded-full shadow-lg shadow-gray-300'><FaInstagram className='w-3 h-3' /></a>
                <a href='#' className='text-black p-2 rounded-full shadow-lg shadow-gray-300'><FaXTwitter className=' w-3 h-3' /></a>
                <a href='#' className='text-blue-700 p-2 rounded-full shadow-lg shadow-gray-300'><FaLinkedinIn className='w-3 h-3' /></a>
              </div>

              <div className='hidden md:flex border-l border-gray-500 h-6'></div>

              <div className='flex items-center space-x-2 py-2 md:py-0 md:px-3'>
                <BiSolidPhoneCall className='text-gray-700 w-5 h-5' />
                <span className='text-gray-700'> +91 12345 67890</span>
              </div>

              <div className='hidden md:flex border-l border-gray-500 h-6'></div>

              <div className='flex items-center space-x-2 py-2 md:py-0 md:px-3'>
                <IoLocationSharp className='text-gray-700 w-5 h-5' />
                <span className='text-gray-700'> New Delhi, India</span>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <img src={mapImg} alt='map_img' className='w-full max-w-md mx-auto lg:max-w-xl' />
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className='bg-blue-400/10 py-12 md:py-20 px-6 lg:px-48'>
        <div className='text-center mb-10'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>Say Hello!</h3>
          <p className='text-gray-600 md:text-lg mt-2'>Have an idea? Let's talk and make it happen.</p>
        </div>

        <form className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
          <input type='text' placeholder='First Name' className='px-4 py-3 rounded-md bg-white outline-none w-full' />
          <input type='text' placeholder='Last Name' className='px-4 py-3 rounded-md bg-white outline-none w-full' />
          <input type='email' placeholder='Email Address' className='md:col-span-2 px-4 py-3 rounded-md bg-white outline-none w-full' />
          <textarea placeholder='Message' rows='5' className='md:col-span-2 px-4 py-3 rounded-md bg-white outline-none w-full'></textarea>
          <div>
            <button className='bg-[#1090CB] text-white font-medium px-6 py-3 rounded-md transition cursor-pointer'>Get in touch</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Contact
