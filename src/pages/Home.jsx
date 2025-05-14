import Hero from '../components/Hero'
import { LayoutDashboard, Tag, RectangleGoggles, Smartphone } from 'lucide-react';

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
      <div className='grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-y-4'>
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
    </div>
  )
}

export default Home
