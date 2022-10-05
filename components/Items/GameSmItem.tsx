
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLanguage } from '../../lib/providers/language';
import { Title6 } from "../../components/Common/Title";
import ItemOverlayCover from "./ItemOverlayCover";
import ItemRating from "./ItemRating";
import ItemTags from "./ItemTags";
import { slugGame } from '../../lib/helpers/slugGame';
import ImageWithFallback from '../../components/Common/Image';

interface IGameSmItemProps {
    item?: any
}

const GameSmItem: React.FC<IGameSmItemProps> = ({ item }) => {
    const { lang } = useLanguage()
    const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)

    return (
      <div>
        <div className="rounded-xl overflow-hidden">
          <div className="recent-box">
            <div className="relative">
              <a href={slugGame(attributes.Name, attributes.Id)}>
                <div className="relative h-[280px] object-cover">
                  <ImageWithFallback
                    className="object-cover"
                    layout="fill"
                    src={attributes.Avatar}
                  />
                </div>
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
                <a
                  className="text-title"
                  href={slugGame(attributes.Name, attributes.Id)}
                >
                  {attributes.Name}
                </a>
              </h3>
              <div className="mb-2">
                <ItemTags tags={['multiverse', 'win2earn']} />
              </div>
              <ul className="flex justify-start gap-2 text-12 text-gray-500 font-semibold">
                <li>
                  <a className="flex gap-1">
                    {item.LikeCount}{' '}
                    <img
                      className="w-[11px]"
                      src="/images/icon/heart.svg"
                      alt="Like"
                    />
                  </a>
                </li>
                <li>
                  <a className="flex gap-1" href="#">
                    {item.ReviewCount}{' '}
                    <img src="/images/icon/comment.svg" alt="Comment" />{' '}
                  </a>
                </li>
                <li>
                  <a className="flex gap-1" href="#">
                    {item.ShareCount}{' '}
                    <img src="/images/icon/share.svg" alt="Share" />{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default GameSmItem;