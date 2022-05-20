import React from 'react';
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const Collection = () => {
  return (
    <div className='text-center mt-52'>
      Coming Soon
    </div>
  );
}

Collection.Layout = DefaultLayout
Collection.LayoutProps = {
  title: 'Collection',
}

export default Collection;