import { FaMobileAlt, FaRocket, FaGlobe, FaVrCardboard } from 'react-icons/fa';
import speakerImg from '../assets/services/speakerImg.png'

const Services = () => {
  const services = [
  {
    id: 1,
    icon: <FaMobileAlt size={20} className="text-white" />,
    title: 'Mobile Applications',
    description: 'Custom mobile apps that engage and perform across devices.',
    bgColor: 'bg-purple-100',
  },
  {
    id: 2,
    icon: <FaGlobe size={20} className="text-white" />,
    title: 'Web Application',
    description: 'Responsive web apps built for speed and reliability.',
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    icon: <FaRocket size={20} className="text-white" />,
    title: 'SEO',
    description: 'Smarter SEO to get you ranked, found, and growing.',
    bgColor: 'bg-blue-100',
  },
  {
    id: 4,
    icon: <FaVrCardboard size={20} className="text-white" />,
    title: 'AR/VR Solutions',
    description: 'Immersive AR/VR to transform how users experience your brand.',
    bgColor: 'bg-pink-100',
  },
];


  return (
    <div className='w-full bg-blue-400/10 pt-28'>
      {/* Top Section*/}
      <div className='flex flex-col items-center text-center px-4'>
        <div className='bg-white p-3 rounded-full shadow-md mb-4'>
          <img src={speakerImg} alt='speaker_icon' className='w-10 h-10' />
        </div>
        <h2 className='text-2xl font-bold'>
          Our <span className='text-[#1090CB]'>Services</span>
        </h2>
        <p className='max-w-xl text-gray-500 mt-2 text-sm md:text-base'>
          At Digitra, we deliver cutting-edge digital solutions designed to help your business grow, scale, and stand out in a competitive market.
        </p>
      </div>

      {/* Services Grid */}
      <div className='max-w-5xl mx-auto bg-white mt-10 rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2'>
        {services.map(({ id, icon, bgColor, title, description }) => (
          <div key={id} className='p-6 flex gap-4'>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${bgColor}`}>
              {icon}
            </div>
            <div>
              <h3 className='text-sm font-semibold'>{title}</h3>
              <p className='text-xs text-gray-500'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
