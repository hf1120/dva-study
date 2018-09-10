import React, { PureComponent } from 'react';
import Search from 'plugins/Search';
import CarouselStand from 'plugins/CarouselStand';
import GridStand from 'plugins/GridStand';

export default class Home extends PureComponent {
  render() {
    console.log('home');

    return (
      <div>
        <Search styl={{ position: 'fixed', zIndex: 2, width: '100%' }} />
        <CarouselStand />
        <GridStand />
      </div>
    );
  }
}
