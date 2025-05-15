
const TextCard = ({ heading, description, className }) => {
    return (
        <div className={className}>
            <h2 className='font-bold text-gray-800 text-xl md:text-3xl'>{heading}</h2>
            <p className='text-gray-600 py-2'>{description}</p>
        </div>
    )
}

export default TextCard
