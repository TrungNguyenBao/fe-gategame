
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";

const GameSmItem: React.FC = () => {
    return (
        <div>
            <div className="rounded-xl overflow-hidden">
            <div className="recent-box">
                <div className="relative">
                    <a href="https://gategame.io/stellaverse-frontier-p11163.html" >
                        <img className="h-[280px] object-cover" src="https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?h=197&amp;auto=compress,format" />
                        <ItemOverlayCover />
                        <ItemRating className="absolute bottom-4 left-4" />
                    </a>
                </div>
                <div className="bg-grayBg p-4">
                    <Title6>
                        <img src="/images/icon/hero-ic1.png" />
                        GGWP
                    </Title6>
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

export default GameSmItem;