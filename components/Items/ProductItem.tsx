import { useLanguage } from "../../lib/providers/language";
import ProductItemType from "./ProductItemType";
interface IProductItemProps {
    item?: any,
}

const ProductItem: React.FC<IProductItemProps> = ({ item }) => {
    const { lang } = useLanguage()
    const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)

    return (
        <div className="flex flex-col">
            <div className="relative rounded-t-lg overflow-hidden w-full pb-[100%]">
                <a href="#">
                    <img className="absolute w-full h-full top-0 left-0 object-cover" src={attributes?.Avatar} />
                    <ProductItemType type={"rare"} />
                </a>
            </div>
            <div className="bg-grayBg p-5 rounded-b-lg">
                <span className="text-xs font-semibold text-gray-400">
                    Stellaverse
                </span>
                <h3>
                    <a className="font-bold" href="#">
                        {attributes?.Name}
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