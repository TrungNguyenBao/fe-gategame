export interface ItemTypeProps {
    type: string
}

const ProductItemType: React.FC<ItemTypeProps> = ({ type }) => {
    const getTextColor = (type: string) => {
        return {
            'legendary': 'text-blue-600',
            'mythic': 'text-[#9D4EDD]',
            'rare': 'text-[#FFD500]',
            'uncommon': 'text-[#B6DAFA]',
        }[type] || ""
    }
    return (
        <span className={`${getTextColor(type)} flex gap-2 absolute top-4 left-4 text-xs font-semibold capitalize`} >
            <img src={`/images/icon/item_${type}.svg`} />
            {type}
        </span>
    )
}

export default ProductItemType;