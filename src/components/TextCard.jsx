
const TextCard = ({ heading, description, className }) => {
    return (
        <div className={className}>
            <h2 className='font-medium'>{heading}</h2>
            <p className='text-gray-500'>{description}</p>
        </div>
    )
}

export default TextCard
