import ImageWithFallback from '../../Common/Image'
import { Title2 } from '../../Common/Title'

function MergingSplitingSection() {
  return (
    <>
      <div className="w-full text-white py-20 bg-[#202020]">
        <div className="flex container flex-wrap mx-auto flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/3 p-5">
            <Title2>Merging / Spliting</Title2>
            <div className="whitespace-pre-wrap mt-10">
              {`We have equipped our SDK to handle even the more complex minting process, such as merging and splitting features. Merging, or combining, is how a player can create new items by combining several other items into one. Splitting creates new items by taking one item and splitting it into two or more. In online game, especially MMO this kind of interaction is very popular.

Gategame SDK has the ability to handle this kind of interaction with our /combine and /merge functions. The "resource" item will have to be locked until we can confirm the creation of the "result" item.

More details will be released in future documentation.`}
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 lg:w-2/3">
            <div className="w-full lg:w-1/2 p-5">
              <ImageWithFallback
                className="object-contain"
                width="100%"
                height="100%"
                layout="responsive"
                src={'https://gategame.io/images/gate_game/marging.png'}
              />
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <ImageWithFallback
                className="object-contain"
                width="100%"
                height="100%"
                layout="responsive"
                src={'https://gategame.io/images/gate_game/spliting.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MergingSplitingSection
