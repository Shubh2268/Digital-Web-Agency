
const TextCard = ({ heading, description, className }) => {
    return (
        <div className={className}>
            <h2 className='font-semibold text-3xl'>{heading}</h2>
            <p className='text-gray-500 py-2'>{description}</p>
        </div>
    )
}

export default TextCard
