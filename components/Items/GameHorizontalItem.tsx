import { Title6 } from "../../components/Common/Title";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";


const GameItemHorizontal: React.FC = () => {
    return (
        <div className="border-b-0.5 border-[#333] bg-grayBg first:rounded-t-xl last:rounded-b-xl last:border-b-0">
            <div className="p-4">
                <div className="flex gap-8 w-full">
                    <div className="">
                        <div className="">
                            <a href="https://gategame.io/stellaverse-frontier-p11163.html">
                                <img className="w-[120px] h-[75px] object-cover rounded-xl" src="https://cdn.gategame.io/storage/upload/product/HoDHUHGezKDh0lWdzPnVa77O1sXCM8Khtx6GFmRN.jpg?h=75&amp;auto=compress,format" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="">
                            <Title6 className="text-gray-500">
                                <img src="/images/icon/hero-ic1.png" />
                                GGWP
                            </Title6>
                            <h3 className="text-16 leading-7 font-semibold my-1">
                                <a className="" href="https://gategame.io/stellaverse-frontier-p11163.html">
                                    Stellaverse: FRONTIER
                                </a>
                            </h3>
                            <div className="">
                                <ItemTags tags={[
                                    "multiverse",
                                    "play2earn",
                                    "win2earn",
                                ]} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ItemRating />
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default GameItemHorizontal;