import Select from 'react-select'
import { marketData } from './data'
import ProductItem from 'components/Items/ProductItem'
import React from 'react'
import Slider from 'components/Common/Slider'
const ListProducts: React.FC = () => {
  const products: Array<any> = marketData.products
  return (
    <section className="mb-16">
      <div className="flex items-center flex-wrap p-6 py-5  bg-[#121212] rounded-xl">
        <Select
          className="my-react-select-container xl:w-1/6 md:w-1/3 w-full p-3 "
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container xl:w-1/6 md:w-1/3 w-full p-3  "
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container xl:w-1/6 md:w-1/3 w-full p-3  "
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <Select
          className="my-react-select-container xl:w-1/6 md:w-1/3 w-full p-3  "
          classNamePrefix="my-react-select"
          // onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
          // defaultValue={optionsGenere[0]}
          options={[]}
        />
        <div className=" xl:w-1/6 px-3 md:w-1/3 w-full p-3  ">
          <Slider />
        </div>
        <div className=" xl:w-1/6 md:w-1/3 w-full p-3  cursor-pointer font-bold text-blue-800">
          Clear fillter
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {products.map((item: any) => (
          <div className=" xl:w-1/3 2xl:w-1/4 w-1/2 p-4">
            <ProductItem item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ListProducts
