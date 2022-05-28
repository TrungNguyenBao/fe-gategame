import ProductItemType from "./ProductItemType";

const ProductItem: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="relative rounded-t-lg overflow-hidden">
                <a href="#">
                    <img className="aspect-square" src="/images/icon/product.png" />
                    <ProductItemType type={"rare"} />
                </a>
            </div>
            <div className="bg-grayBg p-5 rounded-b-lg">
                <span className="text-xs font-semibold text-gray-400">
                    Stellaverse
                </span>
                <h3>
                    <a className="font-bold" href="#">
                        LIGHTNING PYLON
                    </a>
                </h3>
                <p>
                </p><div className="" id="nft-price-info" data-busd="350">
                    <p className="flex gap-3 items-center">
                        <img className="w-4 h-4" src="/images/icon/money_icon.png" />
                        350
                    </p>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default ProductItem;