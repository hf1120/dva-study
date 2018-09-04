import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './Index.less';

@connect(({ example }) => ({
  example,
}))
export default class IndexPage extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetch500',
    });
  }

  render() {
    return <div className={styles.center}>1</div>;
  }
}
