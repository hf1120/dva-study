import React, { PureComponent, Fragment } from 'react';
import { Icon } from 'antd-mobile';
import classNames from 'classnames';
import styles from './ListViewHf.less';

export default class ListViewHf extends PureComponent {
  constructor() {
    super();
    this.state = {
      dataState: [],
    };
  }

  componentDidMount() {
    // am-tabs-content-wrap
    document.querySelector('.am-tabs-pane-wrap').addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.querySelector('.am-tabs-pane-wrap').removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const {
      target: { clientHeight, scrollTop, scrollHeight },
    } = e;
    if (scrollHeight <= scrollTop + clientHeight + 10) {
      // 模拟无限加载数据 TODO
      const { dataProps } = this.props;
      const { dataState } = this.state;
      const data = dataState.length > 0 ? dataState : dataProps;
      const len = data.length;
      const copyData = data.map((item, index) => {
        const obj = { ...item };
        obj.id = index + len + 1;
        return obj;
      });
      this.setState({
        dataState: [...data, ...copyData],
      });
    }
  };

  render() {
    const { renderRowFun } = this.props;
    const { dataState } = this.state;
    return (
      <Fragment>
        <ul id="ListViewHf" className={classNames(styles.ListViewHf, styles.clearfix)}>
          {renderRowFun(dataState)}
        </ul>
        <div id="loading" className={styles.loading}>
          <Icon type="loading" />
        </div>
      </Fragment>
    );
  }
}
