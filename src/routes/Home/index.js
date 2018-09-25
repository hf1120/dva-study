import React, { PureComponent } from 'react';
import Search from 'plugins/Search';
import CarouselStand from 'plugins/CarouselStand';
import GridStand from 'plugins/GridStand';
// import ListView from 'plugins/ListView';
import ListViewHf from 'plugins/ListViewHf';
import RowFun from './RowFun';
// import SeparatorFun from './SeparatorFun';

export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      listViews: [
        {
          id: 1,
          img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
          title: 'Meet hotel',
          des: '不是所有的兼职汪都需要风吹日晒1',
          price: 10,
        },
        {
          id: 2,
          img:
            'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=612440790,485705230&fm=58&s=01B4ED374703734554610CDB0300C020',
          title: 'Meet hotel',
          des: '不是所有的兼职汪都需要风吹日晒2',
          price: 10,
        },
        {
          id: 3,
          img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
          title: 'Meet hotel',
          des: '不是所有的兼职汪都需要风吹日晒3',
          price: 10,
        },
        {
          id: 4,
          img:
            'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=612440790,485705230&fm=58&s=01B4ED374703734554610CDB0300C020',
          title: 'Meet hotel',
          des: '不是所有的兼职汪都需要风吹日晒4',
          price: 10,
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
        <ListViewHf
          dataProps={listViews}
          renderRowFun={rowData => <RowFun rowData={rowData} data={listViews} />}
        />
        {/* <ListView
          renderRowFun={(rowData, sectionID, rowID) => (
            <RowFun rowData={rowData} sectionID={sectionID} rowID={rowID} data={listViews} />
          )}
          SeparatorFun={(sectionID, rowID) => (
            <SeparatorFun key={`${sectionID}-${rowID}`} sectionID={sectionID} rowID={rowID} />
          )}
        /> */}
      </div>
    );
  }
}
