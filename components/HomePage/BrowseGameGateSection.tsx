import { Title2 } from '../Common/Title'

const BrowseGameGate: React.FC = () => {
  return (
    <section>
      <Title2 className="mb-4">Browse GameGate</Title2>

      <div className="flex flex-row gap-8">
        <div className="flex-1 relative ">
          <a href="#">
            <img
              src="https://cdn.gategame.io/storage/upload/category/dVxr74gudQ9hJKEOJAvpz4uPPze48AcIISitgTLV.png?w=310&auto=compress,format"
              alt=""
              className="w-full"
            />
            <span className="absolute flex h-full justify-center flex-col top-0  left-0 right-0 font-semibold text-28 text-center z-10">
              New Release
            </span>
          </a>
        </div>
        <div className="flex-1 relative">
          <a href="#">
            <img
              src="https://cdn.gategame.io/storage/upload/category/UkDH5Z5xoKitQ258QKzrEm3an9TTOphHHTVhLzvM.png?w=310&auto=compress,format"
              alt=""
              className="w-full"
            />
            <span className="absolute flex h-full justify-center flex-col top-0   left-0 right-0 font-semibold text-28 text-center z-10">
              Specials
            </span>
          </a>
        </div>
        <div className="flex-1 relative ">
          <a href="#">
            <img
              src="https://cdn.gategame.io/storage/upload/category/yANnazfMoeJ8IgNCWXC7LpXYebqKEowZmGM4fxfs.png?w=310&auto=compress,format"
              alt=""
              className="w-full"
            />
            <span className="absolute  flex h-full justify-center flex-col top-0  left-0 right-0 font-semibold text-28 text-center z-10">
              Free Games
            </span>
          </a>
        </div>
        <div className="flex-1 relative ">
          <a href="#">
            <img
              src="https://cdn.gategame.io/storage/upload/category/GLbTe8A1Z27q8egtDy99Som1cD8JG5x1nLUoUWiL.png?w=310&auto=compress,format"
              alt=""
              className="w-full"
            />
            <span className="absolute  flex h-full justify-center flex-col top-0  left-0 right-0 font-semibold text-28 text-center z-10">
              By User Tags
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrowseGameGate
