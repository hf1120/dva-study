import React, { PureComponent } from 'react';
import Search from 'plugins/Search';
import GridStand from 'plugins/GridStand';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Search styl={{ position: 'fixed', zIndex: 2, width: '100%' }} />
        <GridStand />
      </div>
    );
  }
}
