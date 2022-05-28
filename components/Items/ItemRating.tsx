interface ItemRatingProps {
    className?: string,
    children?: any
}


const ItemRating: React.FC<ItemRatingProps> = ({ children, className }) => {
    return (
        <div className={`inline-block bg-green-500 p-3 py-1 rounded-lg ${className}`}>
            <span>{children || "--"}</span>
        </div>
    )
}

export default ItemRating;