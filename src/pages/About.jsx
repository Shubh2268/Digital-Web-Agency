import RectangleImg1 from '../assets/about/RectangleImg1.png'
import RectangleImg2 from '../assets/about/RectangleImg2.png'
import RectangleImg3 from '../assets/about/RectangleImg3.png'
import RectangleImg4 from '../assets/about/RectangleImg4.png'
import TextCard from '../components/TextCard';

const About = () => {
  return (
    <section className='max-w-7xl mx-auto py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>

        <div className='flex justify-center items-center'>
          <img src={RectangleImg1} alt='about_img1' className='mx-2' />
          <img src={RectangleImg2} alt='about_img2' className='mx-2' />
        </div>

        <div>
          <h1 className='text-[#1090CB] text-xl font-semibold'>About us</h1>
          <TextCard heading='Driving Digital Transformation with Creativity, Strategy & Technology' description="At Digitra, we turn bold ideas into scalable digital solutions. Our team blends creativity, strategy, and technology to deliver experiences that engage users and elevate brands. From startups to enterprises, we help businesses unlock their full potential in the digital era." />
        </div>

        <img src={RectangleImg3} alt='about_img3' />

        <img src={RectangleImg4} alt='about_img4' />

      </div>
    </section>
  );
};

export default About;
