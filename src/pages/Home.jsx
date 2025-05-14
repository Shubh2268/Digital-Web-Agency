import Hero from '../components/Hero'
import { LayoutDashboard, Tag, RectangleGoggles, Smartphone } from 'lucide-react';
import TextCard from '../components/TextCard';
import mobileImg from '../assets/home/mobileImg.png'

const Home = () => {

  const services = [
    {
      id: 1,
      icon: <LayoutDashboard />,
      title: 'Web Application',
      description: 'Modern, scalable web apps',
      style: 'bg-[#EFEAFF] text-[#4628A4]'
    },
    {
      id: 2,
      icon: <Tag />,
      title: 'SEO',
      description: 'Boost search visibility',
      style: 'bg-[#ECFFDA] text-[#5FC300]'
    },
    {
      id: 3,
      icon: <RectangleGoggles />,
      title: 'AR/VR Solution',
      description: 'Immersive digital experiences',
      style: 'bg-[#DAE6FF] text-[#00329B]'
    },
    {
      id: 4,
      icon: <Smartphone />,
      title: 'Mobile Application',
      description: 'iOS & Android apps',
      style: 'bg-[#FFE5DA] text-[#BB3800]'
    }
  ]

  return (
    <div>
      <Hero />

      {/* Services  */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-y-4 border-b border-gray-300'>
        {services.map(({ id, icon, title, description, style }) => (
          <div key={id} className='flex items-center justify-center'>
            <div className={'p-4 rounded-2xl' + ' ' + style}>{icon}</div>
            <div className='ml-4'>
              <h3 className='font-medium'>{title}</h3>
              <p className='text-gray-500'>{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details  */}
      <div className='flex flex-col py-20 items-center justify-center'>
        <h2 className='font-bold text-[#252525] text-3xl'>Crafting Impactful Digital Experiences That Scale</h2>
        <p className='py-3 text-gray-500 w-2/5 text-center'>We offer a range of modern digital services designed to elevate your brand, optimize operations, and deliver meaningful results in a rapidly evolving online world.</p>
      </div>

      <div>
        <div className='flex items-center justify-center'>
          <TextCard heading='Building Seamless Mobile Experiences' description="We create high-performance mobile applications tailored to your business goals and user needs, Whether it's iOS Android, or cross-platform, our apps combine sleek design with robust functionality to keep your brand connected, accessible, and competitive in the mobile-first world." className='w-full md:w-2/5' />
          <img src={mobileImg} alt='mobile-application' />
        </div>
      </div>
    </div>
  )
}

export default Home
