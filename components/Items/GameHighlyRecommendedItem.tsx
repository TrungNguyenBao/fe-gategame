import { useLanguage } from "../../lib/providers/language";
import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";


interface IGameHighlyRecommendedItemProps {
    item?: any
}


const GameHighlyRecommendedItem: React.FC<IGameHighlyRecommendedItemProps> = ({ item }) => {
    const { lang } = useLanguage()
    const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)

    return (
        <div><div className="rounded-xl overflow-hidden">
            <div className="">
                <div className="relative w-full pb-[56.25%]">
                    <a href="#"  >
                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={attributes.Avatar} />
                        <ItemOverlayCover />
                        <ItemRating className="absolute bottom-4 left-4" />
                    </a>
                </div>
                <div className="bg-grayBg">
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
                                <li><a href="#"  >{item.LikeCount} Likes</a></li>
                                <li><a href="#"  >{item.ReviewCount} Reviews</a></li>
                                <li><a href="#"  >{item.ShareCount} shares</a></li>
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