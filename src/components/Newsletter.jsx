
const Newsletter = () => {
    return (
        <div className='bg-[#E8F4FA] py-36 flex flex-col items-center justify-center'>
            <h2 className='text-xl md:text-3xl font-bold w-2/5 text-center text-gray-800'>Stay Informed With the Latest News, Tips, and Updates</h2>
            <div className='flex flex-col md:flex-row mt-10'>
                <input type='text' className='border' />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
