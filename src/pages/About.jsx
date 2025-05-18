import RectangleImg1 from '../assets/about/RectangleImg1.png'
import RectangleImg2 from '../assets/about/RectangleImg2.png'
import RectangleImg3 from '../assets/about/RectangleImg3.png'
import RectangleImg4 from '../assets/about/RectangleImg4.png'
import TextCard from '../components/TextCard';

const About = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto pt-28 md:pt-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-3 items-start lg:m-10 xl:m-0'>

          <div className='flex justify-center lg:justify-end items-end'>
            <img src={RectangleImg1} alt='about_img1' className='mx-2 w-[150px] md:w-[250px] lg:w-full' />
            <img src={RectangleImg2} alt='about_img2' className='mx-2 w-[150px] md:w-[250px] lg:w-full' />
          </div>

          <div className='px-6 lg:px-0 mt-5 lg:mt-0'>
            <h1 className='text-[#1090CB] text-xl font-semibold'>About us</h1>
            <TextCard heading='Driving Digital Transformation with Creativity, Strategy & Technology' description="At Digitra, we combine design thinking, cutting-edge technology, and a passion for innovation to help businesses grow and thrive in the digital world. Our team of strategists, designers, and developers work closely with clients to turn ideas into impactful, user-focused digital experiences. From concept to launch, we ensure every detail aligns with your brand vision and user needs." head_class='text-xl font-bold text-gray-700 my-4 w-full lg:w-4/5' desc_class='my-4 text-gray-600 w-full lg:w-4/5' />
          </div>

          <div className='flex items-start justify-center lg:justify-end m-5 md:m-0'>
            <img src={RectangleImg3} alt='about_img3' />
          </div>

          <div className='hidden lg:block'>
            <img src={RectangleImg4} alt='about_img4' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
