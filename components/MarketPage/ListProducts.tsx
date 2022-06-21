import Select from 'react-select'
import { Slider } from 'antd'
import { marketData } from './data'
import ProductItem from 'components/Items/ProductItem'
const ListProducts: React.FC = () => {
  const products: Array<any> = marketData.products
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 flex-wrap p-6 py-5  bg-[#121212] rounded-xl">
        <Select
          className="my-react-select-container flex-1"
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container flex-1"
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container flex-1"
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container flex-1"
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <div className="w-1/6">
          <Slider
            tooltipVisible
            range
            defaultValue={[0, 1000000]}
            min={0}
            max={1000000}
            className="text-red-800"
            trackStyle={{ background: 'blue' }}
            // style={{ background: 'blue' }}
          />
        </div>
        <div className="w-1/6 cursor-pointer font-bold text-blue-800">
          Clear fillter
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {products.map((item: any) => (
          <div className="w-1/4 p-4">
            <ProductItem item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ListProducts
