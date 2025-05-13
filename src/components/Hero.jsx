import heroImage from '../assets/heroImage.png'

const Hero = () => {
    return (
        <section className='pt-24 pb-16 bg-blue-400/10'>
            <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-12'>

                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>Empowering <span className='text-[#1090CB]'>Digital</span> Experiences</h1>

                    <p className='text-gray-600 text-lg mb-8'>Digitra is a modern web agency crafting high-performance websites and digital solutions that drive business growth. From design to deployment, we build with purpose and precision.</p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                        <a href='#contact' className='px-6 py-3 bg-[#1090CB] text-white rounded-md font-medium transition'>Contact Us</a>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <img src={heroImage} alt='poster' className='w-full max-w-md mx-auto lg:max-w-full'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
