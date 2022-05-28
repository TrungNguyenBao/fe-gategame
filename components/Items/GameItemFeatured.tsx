import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";


const GameItemFeatured: React.FC = () => {
    return (
        <div>
            <div className="relative">
                <div className="">
                    <a className="" href="https://gategame.io/metabot-p11193.html"  >
                        <img className="w-full h-[333px] object-cover" src="https://cdn.gategame.io/storage/upload/product/Pk2MVGT24ISedtZaedWErXt4TN7GVYY7818SkeDj.jpg?w=1330&amp;auto=compress,format" />
                        <ItemOverlayCover />
                    </a>
                    <div className="absolute bottom-6 left-6">
                        <ItemRating />
                        <Title6 className="text-gray-200 my-3">
                            <img src="/images/icon/hero-ic1.png" />
                            GGWP
                        </Title6>
                        <h3 className="text-28 leading-normal font-semibold mb-3">
                            <a className="text-title" href="https://gategame.io/metabot-p11193.html"  >
                                Metabot
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