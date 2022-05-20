import React from 'react';
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const Lottery = () => {
  return (
    <div className='text-center mt-52'>
      Coming Soon
    </div>
  );
}

Lottery.Layout = DefaultLayout
Lottery.LayoutProps = {
  title: 'Lottery',
}

export default Lottery;