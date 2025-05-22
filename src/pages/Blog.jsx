import { FaSearch } from 'react-icons/fa'

const Blog = () => {

  const category = ['UI/UX Design', 'Web Development', 'Digital Marketing', 'AI & Automation', 'Product Updates'];

  return (
    <div className='w-full pt-28 pb-10 px-4 md:px-8 bg-blue-400/10'>

      {/* Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold'>Latest Articles & Industry Insights</h2>
        <p className='text-gray-500 max-w-xl mx-auto mt-4 text-sm md:text-base'>From tech trends to creative strategies, our blog delivers valuable knowledge to keep you informed and inspired.</p>
      </div>

      {/* Search Bar */}
      <div className='max-w-sm mx-auto mt-4 relative'>
        <input type='text' placeholder='Search articles...' className='w-full py-2 pl-4 pr-10 rounded-md bg-gray-100 outline-none' />
        <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm' />
      </div>

      {/* Category */}
      <div className='flex flex-wrap justify-center gap-3 mt-6'>
        {category.map((tag, index) => (
          <button key={index} className='px-4 py-1 text-sm rounded-full bg-[#EAF6FF] text-[#1090CB]'>{tag}</button>
        ))}
      </div>

    </div>
  );
};

export default Blog
