import { FaMobileAlt, FaRocket, FaGlobe, FaVrCardboard } from 'react-icons/fa'
import speakerImg from '../assets/services/speakerImg.png'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: 'Mobile Applications',
      description: 'Custom mobile apps that engage and perform across devices.',
      style: 'bg-[#F1E8FF] text-[#6E00FA]'
    },
    {
      id: 2,
      icon: <FaGlobe />,
      title: 'Web Application',
      description: 'Responsive web apps built for speed and reliability.',
      style: 'bg-[#FFF2F2] text-[#FF4E4E]'
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: 'SEO',
      description: 'Smarter SEO to get you ranked, found, and growing.',
      style: 'bg-[#E2F3FF] text-[#0073C6]'
    },
    {
      id: 4,
      icon: <FaVrCardboard />,
      title: 'AR/VR Solutions',
      description: 'Immersive AR/VR to transform how users experience your brand.',
      style: 'bg-[#FFE7FB] text-[#B50097]'
    }
  ]


  return (
    <div className='w-full bg-blue-400/10 pt-28'>
      {/* Top Section*/}
      <div className='flex flex-col items-center text-center px-4'>
        <div className='bg-white p-3 rounded-full shadow-md mb-4'>
          <img src={speakerImg} alt='speaker_icon' className='w-10 h-10' />
        </div>
        <h2 className='text-2xl md:text-3xl font-bold'>
          Our <span className='text-[#1090CB]'>Services</span>
        </h2>
        <p className='max-w-xl text-gray-500 mt-2 text-sm md:text-base'>
          At Digitra, we deliver cutting-edge digital solutions designed to help your business grow, scale, and stand out in a competitive market.
        </p>
      </div>

      {/* Services */}
      <div className='max-w-5xl mx-auto bg-white rounded shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 mt-10'>
        {services.map(({ id, icon, title, description, style }, index) => (
          <div key={id} className={`flex items-center justify-center w-full my-3 md:my-0 md:p-5 ${(index === 0) ? 'md:border-b-[0.5px] md:border-r-[0.5px] md:border-gray-200' : ''} ${(index === 1) ? 'md:border-b-[0.5px] md:border-l-[0.5px] md:border-gray-200' : ''} ${(index === 2) ? 'md:border-t-[0.5px] md:border-r-[0.5px] md:border-gray-200' : ''} ${(index === 3) ? 'md:border-t-[0.5px] md:border-l-[0.5px] md:border-gray-200' : ''} `} >
            <div className={`p-4 rounded-2xl text-xl md:text-2xl ${style}`}>{icon}</div>
            <div className='ml-5'>
              <h3 className='text-gray-700 text-lg font-medium'>{title}</h3>
              <p className='text-sm text-gray-600 py-1'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services
