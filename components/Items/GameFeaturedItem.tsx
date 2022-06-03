import { slugGame } from "../../lib/helpers/slugGame";
import { Title6 } from "../Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";

interface IGameItemFeaturedProps {
    item?: any
}


const GameItemFeatured: React.FC<IGameItemFeaturedProps> = ({ item }) => {
    const lang = "en"
    const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)
    
    return (
        <div>
            <div className="relative">
                <div className="">
                    <a className="" href="#"  >
                        <img className="w-full h-[333px] object-cover" src={attributes.Avatar} />
                        <ItemOverlayCover />
                    </a>
                    <div className="absolute bottom-6 left-6">
                        <ItemRating />
                        <Title6 className="text-gray-200 my-3">
                            <img src="/images/icon/hero-ic1.png" />
                            GGWP
                        </Title6>
                        <h3 className="text-28 leading-normal font-semibold mb-3">
                            <a className="text-title" href={slugGame(attributes.Name, attributes.Id)}  >
                                {attributes.Name}
                            </a>
                        </h3>
                        <div className="mb-10">
                            <div className="">
                                <ItemTags tags={[
                                    "multiverse",
                                    "play2earn",
                                    "win2earn",
                                ]} />
                            </div>
                        </div>
                        <ul className="flex gap-2 text-12 text-gray-500 font-semibold">
                            <li><a href="#"  >1 Likes</a></li>
                            <li><a href="#"  >2 Reviews</a></li>
                            <li><a href="#"  >0 shares</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItemFeatured;