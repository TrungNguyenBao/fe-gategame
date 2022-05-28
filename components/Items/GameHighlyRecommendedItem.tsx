import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";


const GameHighlyRecommendedItem: React.FC = () => {
    return (
        <div><div className="rounded-xl overflow-hidden">
            <div className="">
                <div className="relative">
                    <a href="https://gategame.io/stellaverse-frontier-p11163.html"  >
                        <img className="w-full" src="https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?w=650&amp;auto=compress,format" />
                        <ItemOverlayCover />
                        <ItemRating className="absolute bottom-4 left-4" />
                    </a>
                </div>
                <div className="bg-[#222]">
                    <div className="flex justify-between p-4">
                        <div className="">
                            <Title6>
                                <img src="/images/icon/hero-ic5.png" />
                                GGWP
                            </Title6>
                            <h3 className="text-16 leading-7 font-semibold my-1">
                                <a className="text-title" href="https://gategame.io/stellaverse-frontier-p11163.html"  >
                                    Stellaverse: FRONTIER
                                </a>
                            </h3>
                            <ul className="flex gap-2 text-12 text-gray-500 font-semibold">
                                <li><a href="#"  >2 Likes</a></li>
                                <li><a href="#"  >2 Reviews</a></li>
                                <li><a href="#"  >0 shares</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="custom-tooltip position-top --jsfied">
                                <ItemTags tags={[
                                    "multiverse",
                                    "play2earn",
                                    "win2earn",
                                ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default GameHighlyRecommendedItem;