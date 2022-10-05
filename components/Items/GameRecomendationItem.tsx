import { slugGame } from "../../lib/helpers/slugGame";
import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";
import { useLanguage } from "../../lib/providers/language";
import ImageWithFallback from "../../components/Common/Image";

interface IGameRecomendationItemProps {
    item?: any
}

const GameRecomendationItem: React.FC<IGameRecomendationItemProps> = ({ item }) => {
    const { lang } = useLanguage()
    const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)

    return (
      <div className="flex rounded-xl overflow-hidden">
        <div className="relative w-2/3">
          <a href="">
            <div className="relative w-full h-[450px] object-cover">
              <ImageWithFallback
                className="object-cover"
                layout="fill"
                src={attributes.Avatar}
              />
            </div>
            <ItemOverlayCover />
          </a>
          <div className="absolute bottom-8 left-8">
            <Title6 className="text-gray-200">
              <img src="/images/icon/ggwp.png" />
              GGWP
            </Title6>
            <h3 className="text-28 leading-normal font-semibold my-1">
              <a className="" href={slugGame(attributes.Name, attributes.Id)}>
                {attributes.Name}
              </a>
            </h3>
            <div className="">
              <div className="">
                <ItemTags tags={['multiverse', 'play2earn', 'win2earn']} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/3 bg-grayBg">
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
            <p className="text-16 mb-4">{item?.Reviews?.Data?.[0]?.Content}</p>
            {item?.Reviews?.Data?.HasMore && (
              <a href="#" className="text-[#0a85ed] font-semibold">
                Read full review
              </a>
            )}
            <a href="#" className=" absolute bottom-6 left-8">
              <div className="flex gap-4 items-center ">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={item?.Reviews?.Data?.[0]?.User?.AvatarPath}
                />
                <div>
                  <h3 className="font-semibold">
                    {item?.Reviews?.Data?.[0]?.User?.Name}
                  </h3>
                  <span className="text-12">10</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}

export default GameRecomendationItem;