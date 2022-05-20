import React from 'react';
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const Play = () => {
  return (
    <div className='text-center mt-52'>
      Coming Soon
    </div>
  );
}

Play.Layout = DefaultLayout
Play.LayoutProps = {
  title: 'Play',
}

export default Play;