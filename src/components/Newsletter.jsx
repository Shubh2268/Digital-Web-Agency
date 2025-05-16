
const Newsletter = () => {
    return (
        <div className='bg-[#E8F4FA] py-36 flex flex-col items-center justify-center'>
            <h2 className='text-xl md:text-3xl font-bold w-full md:w-2/5 px-4 text-center text-gray-800'>Stay Informed With the Latest News, Tips, and Updates</h2>
            <div className='flex flex-col md:flex-row mt-10 w-2/5'>
                <input type='text' placeholder='Enter your email' className='bg-white rounded-lg outline-none py-3 px-5 w-full mr-2' />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
