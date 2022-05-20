import React from 'react';
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const Crash = () => {
  return (
    <div className='text-center mt-52'>
      Coming Soon
    </div>
  );
}

Crash.Layout = DefaultLayout
Crash.LayoutProps = {
  title: 'Crash',
}

export default Crash;