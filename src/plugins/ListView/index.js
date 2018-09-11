import React from 'react';
import { ListView } from 'antd-mobile';

let pageIndex = 0;

function genData(pIndex = 0) {
  const NUM_ROWS = 20;
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i += 1) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    const { dataSource } = this.state;
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = () => {
    const { isLoading, hasMore, dataSource } = this.state;
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (isLoading && !hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData((pageIndex += 1)) };
      this.setState({
        dataSource: dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const { dataSource, isLoading } = this.state;
    const { renderRowFun, SeparatorFun } = this.props;

    return (
      <ListView
        dataSource={dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {isLoading ? 'Loading...' : 'Loaded'}
          </div>
        )}
        renderRow={(rowData, sectionID, rowID) => renderRowFun(rowData, sectionID, rowID)}
        renderSeparator={SeparatorFun ? (sectionID, rowID) => SeparatorFun(sectionID, rowID) : null}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => {
          console.log('scroll');
        }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
