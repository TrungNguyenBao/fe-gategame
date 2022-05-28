import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";


const GameItemRecomendation: React.FC = () => {
    return (
        <div className="flex rounded-xl overflow-hidden">
            <div className="relative w-2/3">
                <a href="">
                    <img className="w-full" src="https://cdn.gategame.io/storage/upload/product/80r9evZwYYsf2kYc6vVcdZvcHrrzBUbFDpXlDkEd.png?w=877&amp;auto=compress,format" />
                    <div className="absolute h-full w-full left-0 top-0 bg-customGradientBlackXs"></div>
                </a>
                <div className="absolute bottom-8 left-8">
                    <h6 className="flex items-center gap-2 text-xs text-gray-200 font-semibold">
                        <img src="https://cdn.gategame.io/storage/upload/product/rH0pHyWInbfN0sMEowxrcWt2enAZQ5pFM95tQle8.png?w=16&amp;auto=compress,format" />
                        GGWP
                    </h6>
                    <h3 className="text-28 leading-normal font-semibold my-1">
                        <a className="" href="https://gategame.io/heroes-origin-p11293.html" >
                            Heroes Origin
                        </a>
                    </h3>
                    <div className="">
                        <div className="">
                            <ItemTags tags={[
                                "multiverse",
                                "play2earn",
                                "win2earn",
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-1/3 bg-[#222]">
                <div className=" p-8">
                    <div className="pb-6">
                        <div className="flex justify-between">
                            <div className="">
                                <div className="quote">
                                    <img src="/images/icon/quote.png" />
                                </div>
                            </div>
                            <div className="">
                                <ItemRating />
                            </div>
                        </div>
                    </div>
                    <p className="text-16 mb-4">
                        Boss hunting is a pretty good task in the game!!!...
                    </p>
                    <a href="#" className="text-[#0a85ed] font-semibold">Read full review</a>
                    <a href="#" className=" absolute bottom-6 left-8">
                        <div className="flex gap-4 items-center ">
                            <img src="/images/icon/user1.png" />
                            <div>
                                <h3 className="font-semibold">trevorgoodies ·</h3>
                                <span className="text-12">10</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameItemRecomendation;