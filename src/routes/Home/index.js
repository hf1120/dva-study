import React, { PureComponent } from 'react';
import Search from 'plugins/Search';
import CarouselStand from 'plugins/CarouselStand';
import GridStand from 'plugins/GridStand';
import ListView from 'plugins/ListView';
import RowFun from './RowFun';
import SeparatorFun from './SeparatorFun';

export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      listViews: [
        {
          img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
          title: 'Meet hotel',
          des: '不是所有的兼职汪都需要风吹日晒',
        },
        {
          img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
          title: "McDonald's invites you",
          des: '不是所有的兼职汪都需要风吹日晒',
        },
        {
          img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
          title: 'Eat the week',
          des: '不是所有的兼职汪都需要风吹日晒',
        },
      ],
    };
  }

  render() {
    const { listViews } = this.state;
    return (
      <div>
        <Search styl={{ position: 'fixed', zIndex: 2, width: '100%' }} />
        <CarouselStand />
        <GridStand />
        <ListView
          renderRowFun={(rowData, sectionID, rowID) => (
            <RowFun rowData={rowData} sectionID={sectionID} rowID={rowID} data={listViews} />
          )}
          SeparatorFun={(sectionID, rowID) => (
            <SeparatorFun key={`${sectionID}-${rowID}`} sectionID={sectionID} rowID={rowID} />
          )}
        />
      </div>
    );
  }
}
