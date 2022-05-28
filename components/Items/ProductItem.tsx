
const ProductItem: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <a href="#">
                    <img src="https://cdn.gategame.io/storage/upload/product/PsU3gIM937O5vZJMCk5q4qFfEy2HITMv7bxHjHVw.gif?w=424&amp;auto=compress,format" />
                    <span className="flex gap-2 absolute top-4 left-4" >
                        <img src='/images/icon/item_legendary.svg' />
                        Legendary
                    </span>
                </a>
            </div>
            <div className="bg-[#242424] ">
                <span className="text-xs text-[#999]">
                    Stellaverse
                </span>
                <h3>
                    <a className=" " href="https://gategame.io/lightning-pylon-p11355.html">
                        LIGHTNING PYLON
                    </a>
                </h3>
                <p>
                </p><div className="" id="nft-price-info" data-busd="350">
                    <p data-toggle="tooltip" data-placement="bottom" title="BUSD">
                        <img src="/images/icon/money_icon.png" />
                        350
                    </p>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default ProductItem;