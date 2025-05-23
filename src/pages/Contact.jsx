import mapImg from '../assets/contact/mapImg.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div>
      {/* Top  */}
      <div className='bg-white py-28 px-6 lg:px-24'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='mb-10 lg:mb-0 lg:max-w-xl'>
            <h2 className='text-3xl font-bold text-gray-700 mb-4'>Let's Collaborate</h2>
            <p className='text-gray-600 lg:text-lg'>We're here to help bring your ideas to life with seamless digital solutions tailored for you.</p>

            <div className='mt-10 flex items-center space-x-10'>
              <div className='flex items-center gap-4'>
                <a href='#' className='text-blue-700 p-2 rounded-full shadow-lg shadow-gray-300'><FaFacebookF className='w-4 h-4' /></a>
                <a href='#' className='text-pink-700 p-2 rounded-full shadow-lg shadow-gray-300'><FaInstagram className='w-4 h-4' /></a>
                <a href='#' className='text-gray-900 p-2 rounded-full shadow-lg shadow-gray-300'><FaXTwitter className=' w-4 h-4' /></a>
                <a href='#' className='text-blue-700 p-2 rounded-full shadow-lg shadow-gray-300'><FaLinkedinIn className='w-4 h-4' /></a>
              </div>

              <div className='flex items-center space-x-2'>
                <span className='text-gray-700'>📞 +91 12345 67890</span>
              </div>
              <div className='border-l border-gray-300 h-6'></div>
              <div className='flex items-center space-x-2'>
                <span className='text-gray-700'> New Delhi, India</span>
              </div>
            </div>
          </div>

          <div>
            <img src={mapImg} alt='map_img' className='max-w-xl' />
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className='bg-blue-400/10 py-16 px-6 lg:px-48'>
        <div className='text-center mb-10'>
          <h3 className='text-2xl font-bold text-gray-900'>Say hello</h3>
          <p className='text-gray-600 text-lg mt-2'>Have an idea? Let's talk and make it happen.</p>
        </div>

        <form className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
          <input type='text' placeholder='First Name' className='px-4 py-3 rounded-md bg-white outline-none w-full' />
          <input type='text' placeholder='Last Name' className='px-4 py-3 rounded-md bg-white outline-none w-full' />
          <input type='email' placeholder='Email Address' className='md:col-span-2 px-4 py-3 rounded-md bg-white outline-none w-full' />
          <textarea placeholder='Message' rows='5' className='md:col-span-2 px-4 py-3 rounded-md bg-white outline-none w-full'></textarea>
          <div>
            <button className='bg-[#1090CB] text-white px-6 py-3 rounded-md transition cursor-pointer'>Get in touch</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Contact
