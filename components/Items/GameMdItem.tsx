
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title6 } from "../Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";

const GameMdItem: React.FC = () => {
    return (
        <div>
            <div className="rounded-xl overflow-hidden">
                <div className="recent-box">
                    <div className="relative">
                        <a href="#" >
                            <img className="h-[380px] object-cover" src="https://cdn.gategame.io/storage/upload/product/Pk2MVGT24ISedtZaedWErXt4TN7GVYY7818SkeDj.jpg?h=335&amp;auto=compress,format" />
                            <ItemOverlayCover />
                            <ItemRating className="absolute bottom-4 left-4" />
                        </a>
                    </div>
                    <div className="bg-grayBg p-4">
                        <div className="flex justify-between">

                            <Title6>
                                <img src="/images/icon/hero-ic1.png" />
                                GGWP
                            </Title6>

                            <div className="">
                                <ul className="flex gap-2">
                                    <li>
                                        <img src="/images/icon/ic_Android.svg" title="Android" />
                                    </li>
                                    <li className="">
                                        <img src="/images/icon/ic_PS.svg" title="IOS" />
                                    </li>
                                    <li className="">
                                        <img src="/images/icon/ic_Web.svg" title="Web" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="text-16 leading-7 font-semibold my-2">
                            <a className="text-title" href="https://gategame.io/stellaverse-frontier-p11163.html" >
                                Stellaverse: FRONTIER
                            </a>
                        </h3>
                        <div className="mb-2">
                            <ItemTags tags={[
                                "multiverse",
                                "win2earn",
                            ]} />
                        </div>
                        <ul className="flex justify-start gap-2 text-12 text-gray-500 font-semibold">
                            <li>
                                <a className="flex gap-1" >2 <img className='w-[11px]' src="/images/icon/heart.svg" alt="Like" /></a>
                            </li>
                            <li>
                                <a className="flex gap-1" href="#" >2 <img src="/images/icon/comment.svg" alt="Comment" /> </a>
                            </li>
                            <li>
                                <a className="flex gap-1" href="#" >0 <img src="/images/icon/share.svg" alt="Share" /> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div></div>
    )
}

export default GameMdItem;