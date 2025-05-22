import { FaSearch } from 'react-icons/fa'
import blogPoster from '../assets/blog/blogPoster.png'
import userImg1 from '../assets/blog/userImg1.png'

const Blog = () => {

  const category = ['UI/UX Design', 'Web Development', 'Digital Marketing', 'AI & Automation', 'Product Updates'];

  return (
    <div className='w-full pt-24 md:pt-28 pb-10 px-4 md:px-8'>

      {/* Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>Latest Articles & Industry Insights</h2>
        <p className='text-gray-600 max-w-xl mx-auto mt-4 text-base'>From tech trends to creative strategies, our blog delivers valuable knowledge to keep you informed and inspired.</p>
      </div>

      {/* Search Bar */}
      <div className='max-w-md mx-auto my-4 relative'>
        <input type='text' placeholder='search articles...' className='w-full py-2 px-4 rounded-md bg-[#F1F1F1] outline-none' />
        <FaSearch className='absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-' />
      </div>

      {/* Category */}
      <div className='flex flex-wrap justify-center gap-3 mt-6'>
        {category.map((tag, index) => (
          <button key={index} className='px-4 py-1 text-xs md:text-sm font-medium rounded-full bg-[#E7EFF3] text-[#1090CB] cursor-pointer'>{tag}</button>
        ))}
      </div>

      {/* Middle  */}
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 my-20'>
        <div className='w-full lg:w-2/5'>
          <img src={blogPoster} alt='blog_poster' className='w-full max-w-md mx-auto lg:max-w-lg rounded-md' />
        </div>

        <div className='w-full lg:w-3/5 text-left'>
          <h2 className='text-xl md:text-2xl text-gray-800 font-bold'>Why Responsive Design Is No Longer Optional in 2025</h2>
          <p className='text-gray-600 text-sm lg:text-base py-2 lg:py-4 xl:w-[90%]'>In today's fast-evolving digital landscape, users access websites from a variety of devices, phones, tablets, laptops, and even smart TVs. Responsive design is no longer a luxury but a necessity for delivering seamless user experiences across all screen sizes. In 2025, businesses that fail to adopt responsive design risk higher bounce rates, lower engagement, and lost revenue. Learn why optimizing for flexibility and accessibility is now a core pillar of modern web development.</p>

          {/* Author & Date */}
          <div className='flex items-center justify-between mt-2 w-4/5'>
            <div className='flex items-center gap-3'>
              <img src={userImg1}  alt='user_img' className='w-8 h-8 rounded-full'/>
              <div>
                <p className='text-sm font-semibold'>Emily Carter</p>
                <p className='text-xs text-gray-600'>May 5, 2025</p>
              </div>
            </div>
            <a href='#' className='text-[#1090CB] text-sm font-medium'>Read More</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog
